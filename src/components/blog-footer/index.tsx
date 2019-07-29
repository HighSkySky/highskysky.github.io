import React, { memo } from 'react';

import styles from './index.module.scss';

const BlogFooter: React.FC<{}> = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <footer className={styles.module}>Copyright© 2019-{year}</footer>;
};

export default memo(BlogFooter);
