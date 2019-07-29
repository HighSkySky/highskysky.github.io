import React from 'react';
import { RouteComponentProps } from 'react-router';
import PageHeader from '@/components/page-header';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <PageHeader title="Hello World">
        终有一天，我有属于我自己的天 - 蜗牛
      </PageHeader>
      <div style={{ height: 500 }}>123</div>
    </div>
  );
};

export default Home;
