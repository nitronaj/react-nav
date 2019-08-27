import React from 'react';

import styles from './MenuBarItem.module.scss';

import { INavItem } from '../../model';
import { SubMenu } from './SubMenu';

export interface IProps extends INavItem {
  tabIndex: number;
  isExpanded: boolean;

  onMouseEnter: (label: string) => () => void;
  onMouseLeave: () => void;
}

const MenuBarItem = ({
  label,
  link: url,
  menuItems,
  tabIndex,
  isExpanded,
  onMouseEnter,
  onMouseLeave
}: IProps) => (
  <li
    key={`${label}-${url}`}
    role="none"
    className={styles.navItemLi}
    onMouseEnter={onMouseEnter(label)}
    onMouseLeave={onMouseLeave}
  >
    <a
      role="menuitem"
      aria-haspopup={!!(menuItems && menuItems.length > 0)}
      aria-expanded={isExpanded}
      href={url}
      className={styles.navItem}
      tabIndex={tabIndex}
      // onFocus={this.handleFocus(navItem.label)}
    >
      {label}
      {/* <Chevron className={styles.chevron} /> */}
    </a>
    <SubMenu label={label} menuItems={menuItems} isExpanded={isExpanded} />
  </li>
);

// export interface IState {

// }
// class MenuBarItem extends React.Component<IProps, IState> {
// 	subMenuRef: HTMLUListElement = null;

// 	state = {
// 	  subMenuAlign: 'left'
// 	};

// 	setSubMenuRef = (element: HTMLUListElement) => {
// 	  this.subMenuRef = element;
// 	};

// 	render() {
// 		const { label, link: url, menuitems, tabIndex, isExpanded, onMouseEnter, onMouseLeave } = this.props;
// 		return (
//   <li
// 		key={`${label}-${url}`}
// 		role="none"
// 		className={styles.navItemLi}
// 		onMouseEnter={onMouseEnter(label)}
// 		onMouseLeave={onMouseLeave}
// 	>
//     <a
// 			role="menuitem"
// 			aria-haspopup={!!(menuitems && menuitems.length > 0)}
// 			aria-expanded={isExpanded}
// 			href={url}
// 			className={styles.navItem}
// 			tabIndex={tabIndex}
// 			// onFocus={this.handleFocus(navItem.label)}
// 		>
//       {label}
//       {/* <Chevron className={styles.chevron} /> */}
//     </a>
//     <SubMenu label={label} menuitems={menuitems} isExpanded={isExpanded} ref={this.setSubMenuRef}/>
//   </li>
// );
// 		}
// 	}

export { MenuBarItem };
