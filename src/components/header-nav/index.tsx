import React, { useState, useCallback, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import { Motion, spring } from 'react-motion';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import { throttle } from 'lodash';
import IconFont from '@/components/icon-font';
import { navList } from './config';

import styles from './index.module.scss';

const HeaderNav: React.FC<{}> = () => {
  const [isHide, toggleHide] = useState(false);

  const handleScroll = useMemo(() => throttle(() => toggleHide(true)), []);

  const handleToggleClick = useCallback(
    () => toggleHide((isHide) => !isHide),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={classnames([styles.module, 'flex'])}>
      <div className="header-nav-left">
        <Button
          className="btn-toggle"
          type="primary"
          size="large"
          onClick={handleToggleClick}
        >
          <IconFont type="iconright" />
        </Button>
      </div>

      <Motion
        defaultStyle={{ width: 0 }}
        style={{ width: spring(isHide ? -1 : 262) }}
      >
        {(interpolatingStyle) => (
          <ul className="header-nav-right flex" style={interpolatingStyle}>
            {navList.map(({ title, link }) => (
              <li className="header-nav-item" key={title}>
                <NavLink className="header-nav-item-link" to={link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </Motion>
    </div>
  );
};

export default HeaderNav;
