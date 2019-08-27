import React from 'react';

import styles from './MenuBar.module.scss';
import { INavItem } from '../model';
import { MenuBarItem } from './MenuBarItem';

export interface IProps {
  navItems: INavItem[];
  activeNavItem: string;
  onMouseEnter: (label: string) => () => void;
  onMouseLeave: () => void;
}

// export interface IState {}

class MenuBar extends React.Component<IProps, {}> {
  render() {
    const { navItems, activeNavItem, onMouseEnter, onMouseLeave } = this.props;
    return (
      <ul className={styles.menubar} role="menubar">
        {navItems.map((navItem, index) => {
          const isExpanded = activeNavItem === navItem.label;

          const tabIndex = index === 0 ? 0 : -1;
          return (
            <MenuBarItem
              key={`${navItem.label}-${navItem.link}`}
              {...navItem}
              tabIndex={tabIndex}
              isExpanded={isExpanded}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );

          // return (
          //   <li
          //     key={`${navItem.label}-${navItem.link}`}
          //     role="none"
          //     className={styles.navItemLi}
          //     onMouseEnter={this.handleMouseEnter(navItem.label)}
          //     onMouseLeave={this.handleMouseLeave}
          //   >
          //     <a
          //       role="menuitem"
          //       aria-haspopup={hasLink}
          //       aria-expanded={isActive}
          //       href={navItem.link}
          //       className={styles.navItem}
          //       tabIndex={index === 0 ? 0 : -1}
          //       onFocus={this.handleFocus(navItem.label)}
          //     >
          //       {navItem.label}
          //       {<Chevron className={styles.chevron} />}
          //     </a>
          //     {isActive && (
          //       <ul role="menu" aria-label={navItem.label} className={styles.menu}>
          //         {navItem.menuitems.map(menuItem => (
          //           <MenuItem key={`${menuItem.label}-${menuItem.url}`} {...menuItem} />
          //         ))}
          //       </ul>
          //     )}
          //   </li>
          // );
        })}
      </ul>
    );
  }
}

export { MenuBar };
