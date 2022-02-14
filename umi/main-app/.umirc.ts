import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        {
          path: '/app1',
          microApp: 'app1'
        },
      ]
    }
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8301', // html entry
        },
      ]
    }
  },
});
