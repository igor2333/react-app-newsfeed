import React, { FC, useState, useRef } from 'react';
import './ColorSchemeSwitcherDesktop.css';
import { Droprown } from '@components/Dropdown/Dropdown';
import { useColorScheme } from '@features/colorScheme/hooks';
import { ColorSchemeSwitcherButton } from '@features/colorScheme/components/ColorSchemeSwitcherButton/ColorSchemeSwitcherButton';
import { ColorSchemeSwitcherMenu } from '@features/colorScheme/components/ColorSchemeSwitcherMenu/ColorSchemeSwitcherMenu';

export const ColorSchemeSwitcherDesktop: FC = () => {
  const { userScheme, setUserScheme } = useColorScheme();
  const [dropdownShown, setDropdownShown] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="color-scheme-switcher">
      <ColorSchemeSwitcherButton
        onClick={(event) => {
          event.stopPropagation();
          setDropdownShown(!dropdownShown);
        }}
        ref={targetRef}
        scheme={userScheme}
      />
      <Droprown shown={dropdownShown} onShownChange={setDropdownShown} targetRef={targetRef}>
        <ColorSchemeSwitcherMenu
          className="color-scheme-switcher__dropdown-menu"
          selectedScheme={userScheme}
          onChangeScheme={(scheme) => setUserScheme(scheme)}
        />
      </Droprown>
    </div>
  );
};
