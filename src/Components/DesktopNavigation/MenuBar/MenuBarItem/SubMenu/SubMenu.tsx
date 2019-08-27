import React from 'react';
import classNames from 'classnames';
import { MenuItem } from './MenuItem';
import breakpoints from '../../../../../shared/breakpoints.json';

import styles from './SubMenu.module.scss';
import { IMenuitem } from '../../../model';

export interface IProps {
  label: string;
  menuItems: IMenuitem[];
  isExpanded: boolean;
  ref?: React.LegacyRef<HTMLUListElement>;
}
export interface IState {
  subMenuAlign: string;
}
class SubMenu extends React.Component<IProps, IState> {
  subMenuRef!: HTMLUListElement;
  state = {
    subMenuAlign: 'left'
  };

  setSubMenuRef = (element: HTMLUListElement) => {
    this.subMenuRef = element;
  };

  getSubMenuAlignment = (elementSize: DOMRect | ClientRect) => {
    const viewPortWidth = window.innerWidth;
    const desktopBreakPoint = parseInt(breakpoints.desktop.slice(0, -2), 10);
    const leftPadding = 20;

    const startLeft = (viewPortWidth - desktopBreakPoint) / 2 + leftPadding;

    if (elementSize.right - startLeft > desktopBreakPoint) {
      return 'right';
    }
    return 'left';
  };

  componentDidMount() {
    this.setState({
      subMenuAlign: this.getSubMenuAlignment(this.subMenuRef.getBoundingClientRect())
    });
  }

  render() {
    const { label, menuItems, isExpanded } = this.props;

    if (menuItems && menuItems.length) {
      return (
        <ul
          role="menu"
          aria-label={label}
          className={classNames(styles.menu, {
            [styles.menuRight]: this.state.subMenuAlign === 'right',
            [styles.menuExpanded]: isExpanded === true
          })}
          ref={this.setSubMenuRef}
        >
          {menuItems.map(menuItem => (
            <MenuItem key={`${menuItem.label}-${menuItem.url}`} {...menuItem} />
          ))}
        </ul>
      );
    }
  }
}

// const  SubMenu = ({ label, menuitems, isExpanded }: IProps) => (
//  menuitems.length &&
//   <ul
//          role="menu"
//          aria-label={label}
//          className={classNames(styles.menu, {
//            [styles.menuRight]: this.state.subMenuAlign === 'right',
//            [styles.menuExpanded]: isExpanded === true
//          })}
//          ref={this.setSubMenuRef}
//        >
//     {menuitems.map(menuItem => (
//       <MenuItem key={`${menuItem.label}-${menuItem.url}`} {...menuItem} />
//          ))}
//   </ul>
// )

export { SubMenu };
