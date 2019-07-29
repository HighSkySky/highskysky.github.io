const routes = [
  {
    path: '*',
    component: () => import('@/pages/home')
  }
];

export default routes;
