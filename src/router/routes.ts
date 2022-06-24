import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/',
    name: 'Layout',
    component: () => import('~/layout/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('~/views/Index/Index.vue'),
        meta: {
          name: '控制台',
          icon: 'clarity:dashboard-solid',
        },
      },
      {
        path: 'documentation',
        name: 'Documentation',
        component: () => import('~/views/Documentation/Documentation.vue'),
        meta: {
          name: '文档',
          icon: 'ri:treasure-map-fill',
        },
      },
      {
        path: '',
        name: 'Manage',
        component: () => import('~/views/Manage/Manage.vue'),
        meta: {
          name: '管理',
          icon: 'ic:baseline-support-agent',
        },
        children: [
          {
            path: 'roleManage',
            name: 'RoleManage',
            component: () => import('~/views/Manage/RoleManage/RoleManage.vue'),
            meta: {
              name: '角色管理',
              icon: 'ic:round-import-contacts',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('~/views/NotFound/NotFound.vue'),
  },
]
