<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Swayvel App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->
    <!-- {{route.name}} -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="q-px-md q-py-lg q-gutter-y-lg dashboard-drawer"
    >
      <q-list>
        <q-item-label header>
          <img src="~assets/logo.svg" alt="loading" class="logo" />
        </q-item-label>
        <q-item-label>
          <q-input
            outlined
            v-model="text"
            placeholder="Search"
            input-class="rounded-8"
            dense
            class="rounded-8"
            color="gray-background"
          >
            <!-- {{}} -->
            <template v-slot:prepend>
              <IconComp icon="iconoir:search" width="24" height="24" />
            </template>
            <template v-slot:append>
              <IconComp icon="ri:command-fill" width="18" height="18" />
              <span style="font-size:18px">/</span>
            </template>
          </q-input>
        </q-item-label>
        <q-item-label class="text-grey-7 q-py-md font-14"> Dashboards </q-item-label>
        <!-- <div class="grey-5">
         </div> -->
        <div v-if="store.currentUser !== 'admin'">
          <router-link
            v-for="dash_super in dashboard_superAdmin"
            :key="dash_super.title"
            :to="dash_super.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(dash_super.name)"
            >
              <IconComp
                v-if="dash_super.name == 'dashboard'"
                class="icon"
                style="transform: rotate(250deg)"
                :icon="dash_super.icon"
                width="24"
                height="24"
              />
              <!-- <img v-if="dash.name === 'dashboard'" class="icon" height="24px" src="~assets/ChartPieSlice-d.svg" alt="loading"> -->
              <IconComp v-else :icon="dash_super.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md">
                {{ dash_super.title }}
              </span>
            </q-item>
          </router-link>
        </div>
        <div v-else>
          <router-link
            v-for="dash in dashboard"
            :key="dash.title"
            :to="dash.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(dash.name)"
            >
              <IconComp
                v-if="dash.name === 'overview'"
                class="icon"
                style="transform: rotate(250deg)"
                :icon="dash.icon"
                width="24"
                height="24"
              />
              <!-- <img v-if="dash.name === 'dashboard'" class="icon" height="24px" src="~assets/ChartPieSlice-d.svg" alt="loading"> -->
              <IconComp v-else :icon="dash.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ dash.title }}
              </span>
            </q-item>
          </router-link>
        </div>
        <div v-if="store.currentUser == 'admin'">
          <q-item-label class="text-grey-7 q-py-md font-14"> Social Media Management </q-item-label>
          <router-link
            v-for="media in socials"
            :key="media.title"
            :to="media.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(media.name)"
            >
              <IconComp :icon="media.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ media.title }}
              </span>
            </q-item>
          </router-link>
        </div>
        <div v-if="store.currentUser !== 'admin'">
          <q-item-label class="text-grey-7 q-py-md font-14"> Pages </q-item-label>
          <router-link
            v-for="page in pages"
            :key="page.title"
            :to="page.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(page.name)"
            >
              <IconComp :icon="page.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ page.title }}
              </span>
            </q-item>
          </router-link>
        </div>
        <div v-if="store.currentUser == 'admin'">
          <q-item-label class="text-grey-7 q-py-md font-14"> Security & Reputation </q-item-label>
          <router-link
            v-for="secure in security"
            :key="secure.title"
            :to="secure.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(secure.name)"
            >
              <IconComp :icon="secure.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ secure.title }}
              </span>
            </q-item>
          </router-link>
        </div>
        <div v-if="store.currentUser == 'admin'">
          <q-item-label class="text-grey-7 q-py-md font-14"> Reports & Insights </q-item-label>
          <router-link
            v-for="insight in insights"
            :key="insight.title"
            :to="insight.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(insight.name)"
            >
              <IconComp :icon="insight.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ insight.title }}
              </span>
            </q-item>
          </router-link>
        </div>

        <q-item-label class="text-grey-7 q-py-md font-14"> Settings </q-item-label>
        <div v-if="store.currentUser !== 'admin'">
          <router-link
            v-for="setting_super in settings_super"
            :key="setting_super.title"
            :to="setting_super.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(setting_super.name)"
            >
              <IconComp :icon="setting_super.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ setting_super.title }}
              </span>
            </q-item>
          </router-link>
        </div>
        <div v-else>
          <router-link
            v-for="setting in settings"
            :key="setting.title"
            :to="setting.to"
            style="color: black; text-decoration: none"
          >
            <q-item
              active-class="my-menu-link"
              class="flex items-center rounded-12"
              :active="route.name.includes(setting.name)"
            >
              <IconComp :icon="setting.icon" class="icon" width="24" height="24" />
              <span class="q-ml-md font-14">
                {{ setting.title }}
              </span>
            </q-item>
          </router-link>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { userStore } from 'src/stores/userStore'
const store = userStore()
const route = useRoute()
// const currentUser = route.currentUser;
const dashboard = [
  {
    title: 'Overview',
    name: 'overview',
    icon: 'hugeicons:pie-chart-02',
    to: '/dashboard/overview',
  },
  {
    title: 'Analytics',
    name: 'analytics',
    icon: 'fluent-mdl2:analytics-view',
    to: '/dashboard/analytics',
  },
  {
    title: 'Notifications',
    icon: 'ph:notification-duotone',
    name: 'notifications',
    to: '/dashboard/notifications',
  },
]
const dashboard_superAdmin = [
  {
    title: 'Dashboard',
    name: 'dashboard',
    icon: 'hugeicons:pie-chart-02',
    to: '/dashboard',
  },
  {
    title: 'Notifications',
    icon: 'ph:notification-duotone',
    name: 'notifications',
    to: '#',
    role: 'superadmin',
  },
]
const socials = [
  {
    title: 'Social Accounts',
    icon: 'ph:link-duotone',
    name: 'social',
    to: '/dashboard/social-accounts',
  },
  {
    title: 'Posts Management',
    icon: 'fluent-mdl2:post-update',
    name: 'post-management',
    to: '/dashboard/post-management',
  },
]

const security = [
  {
    title: 'Misinformation Detection',
    icon: 'line-md:alert-twotone',
    name: 'miss-information',
    to: '/dashboard/miss-information',
  },
  {
    title: 'Threat Detection',
    icon: 'duo-icons:alert-octagon',
    name: 'threats',
    to: '/dashboard/threats',
  },
]

const insights = [
  {
    title: 'AI-Driven Insights',
    icon: 'carbon:analytics',
    name: 'ai-driven',
    to: '/dashboard/ai-insights',
  },
  {
    title: 'Audience Analysis',
    icon: 'ph:users-three-duotone',
    name: 'audience',
    to: '/dashboard/audience-analysis',
  },
]

const pages = [
  {
    title: 'Users Management',
    icon: 'ph:users-duotone',
    name: 'management',
    to: '/dashboard/users',
  },
  {
    title: 'Billing & Payments',
    icon: 'iconamoon:file-document-duotone',
    name: 'billing',
    to: '/dashboard/billings',
  },
  {
    title: 'Subscription Management',
    icon: 'material-symbols-light:id-card-outline',
    name: 'subscription',
    to: '/dashboard/subscriptions',
  },
  {
    title: 'Reports & Analytics',
    icon: 'carbon:analytics',
    name: 'reports',
    to: '/dashboard/report-analytics',
  },
]
const settings = [
  {
    title: 'Profile Settings',
    icon: 'ant-design:setting-twotone',
    name: 'profile',
    to: '/dashboard/profile-setting',
  },
  {
    title: 'Team Memebers',
    icon: 'ph:users-four-duotone',
    name: 'teams',
    to: '/dashboard/team-members',
  },
  {
    title: 'Subscription & Billing',
    icon: 'material-symbols-light:id-card-outline',
    name: 'subscription and billing',
    to: '/dashboard/subscription-detail',
  },
  {
    title: 'Logout',
    icon: 'solar:logout-bold-duotone',
    name: 'login',
    to: '/login',
  },
]
const settings_super = [
  {
    title: 'Profile Settings',
    icon: 'ant-design:setting-twotone',
    name: 'profile',
    to: '/dashboard/profile-setting',
  },
  {
    title: 'Team Memebers',
    icon: 'ph:users-four-duotone',
    name: 'teams',
    to: '/dashboard/team-members',
  },
  {
    title: 'Logout',
    icon: 'solar:logout-bold-duotone',
    name: 'login',
    to: '/login',
  },
]
</script>
