const routes = [
  {
    path: '/dashboard',
    component: () => import('src/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/DashboardsPage.vue'),
        children: [
          {
            path: '',
            name: 'dashboard',
            component: () => import('src/components/super-admin/SuperDashboard.vue'),
          },
          {
            path: 'users',
            name: 'management',
            component: () => import('src/components/super-admin/UsersManagement.vue'),
          },
          {
            path: 'billings',
            name: 'billing',
            component: () => import('src/components/super-admin/BillingPayment.vue'),
          },
          {
            path: 'subscriptions',
            name: 'subscription',
            component: () => import('src/components/super-admin/SubscriptionPlans.vue'),
          },
          {
            path: 'report-analytics',
            name: 'reports',
            component: () => import('src/components/super-admin/ReportsAnalytics.vue'),
          },
          {
            path: 'team-members',
            name: 'teams',
            component: () => import('src/components/common/TeamMembers.vue'),
          },
          {
            path: 'profile-setting',
            name: 'profile',
            component: () => import('src/components/common/ProfileSetting.vue'),
          },
          // * admin side
          { path: 'overview',
            name:'overview',
            component: () => import('src/components/admin/overview/OverviewStats.vue')
          },
          { path: 'analytics',
            name:'analytics',
            component: () => import('src/components/admin/analytics/AnalyticsComp.vue')
          },
          { path: 'ai-insights',
            name:'ai-driven',
            component: () => import('src/components/admin/insights/AiInsights.vue')
          },
          // { path: 'ai-insights',
          //   name:'ai-driven',
          //   component: () => import('src/components/admin/insights/AiInsights.vue')
          // },
          { path: 'audience-analysis',
            name:'audience',
            component: () => import('src/components/admin/analysis/AudienceAnalysis.vue')
          },
          {
            path: 'social-accounts',
            name: 'social',
            component: () => import('src/components/admin/SocialAccounts.vue'),
          },
          {
            path: 'post-management',
            name: 'post-management',
            component: () => import('src/components/admin/PostManagement.vue'),
          },
          {
            path: 'miss-information',
            name: 'miss-information',
            component: () => import('src/components/admin/MissInformation.vue'),
          },
          {
            path: 'threats',
            name: 'threats',
            component: () => import('src/components/admin/ThreatsDetection.vue'),
          },
          {
            path: 'subscription-detail',
            name: 'subscription and billing',
            component: () => import('src/components/admin/SubscriptionBilling.vue'),
          },
          {
            path: 'notifications',
            name: 'notifications',
            component: () => import('src/components/admin/NotificationsPage.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/',
    component: () => import('src/layouts/LandingLayout.vue'),
    children: [{ path: '', component: () => import('pages/landingPage.vue') }],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
