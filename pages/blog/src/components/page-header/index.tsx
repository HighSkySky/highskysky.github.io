import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

interface IPageHeaderProps {
  title: string;
  children?: ReactNode | string;
}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  const { title, children } = props;
  return (
    <header className={classnames([styles.module, 'flex-center'])}>
      <h1 className="header-title">{title}</h1>
      {children && <div className="header-content">{children}</div>}
    </header>
  );
};

export default PageHeader;
