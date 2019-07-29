import React from 'react';
import { NavLink } from 'react-router-dom';
import { navList } from './config';

import styles from './index.module.scss';

const BlogHeader: React.FC<{}> = () => {
  return (
    <header className={styles.module}>
      <div className="header-content">
        <ul className="header-content-right flex">
          {navList.map(({ title, link }) => (
            <li className="header-nav-item" key={title}>
              <NavLink className="header-nav-item-link" to={link}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default BlogHeader;
