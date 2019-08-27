import React from 'react';
import { INavItem } from './model';

import styles from './DesktopNavigation.module.scss';
import { MenuBar } from './MenuBar';

export interface IProps {
  navItems: INavItem[];
}

export interface IState {
  activeNavItem: string;
}

class DesktopNavigation extends React.Component<IProps, IState> {
  timeOutIdEnter: NodeJS.Timeout;
  timeOutIdLeave: NodeJS.Timeout;

  handleMouseEnter = (label: string) => () => {
    if (this.timeOutIdLeave) {
      clearTimeout(this.timeOutIdLeave);
    }

    this.timeOutIdEnter = setTimeout(() => {
      this.setState({ activeNavItem: label });
    }, 100);
  };

  handleMouseLeave = () => {
    if (this.timeOutIdEnter) {
      clearTimeout(this.timeOutIdEnter);
    }

    this.timeOutIdLeave = setTimeout(() => {
      this.setState({ activeNavItem: null });
    }, 500);
  };

  handleFocus = (label: string) => () => {
    this.setState({ activeNavItem: label });
  };

  render() {
    const { navItems } = this.props;
    return (
      <div className={styles.navContainer}>
        {/* TODO: can get menu label from AEM component */}
        <nav className={styles.nav} aria-labelledby="qbr menu">
          <MenuBar
            navItems={navItems}
            activeNavItem={this.state.activeNavItem}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
        </nav>
      </div>
    );
  }
}

export { DesktopNavigation };
