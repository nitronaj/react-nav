import React from 'react';

import styles from './MenuItem.module.scss';
import { IMenuitem } from '../../../../model';

// interface IWaiMenuItem {
// 	ariaHaspopup: boolean;
// 	ariaExpanded: boolean;
// }

type Props = IMenuitem;

const MenuItem = ({ label, url, description }: Props) => (
  <li role="none" className={styles.menuItem}>
    <a role="menuitem" tabIndex={-1} href={url} className={styles.label}>
      {label}
    </a>
    <div className={styles.description}>{description}</div>
  </li>
);

export { MenuItem };
