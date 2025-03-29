<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Notifications</div>
      <div class="text-grey-6 q-mt-sm">
        Stay Updated with Your Latest Notifications
      </div>
    </div>
    <div class="text-grey-7">Today</div>
    <div class="q-gutter-y-lg">
      <div v-for="(noti, index) in notifications" :key="index" class="flex justify-between items-center">
        <div class="flex q-gutter-x-md items-center">
          <q-avatar size="50px">
            <img :src="noti.img" alt="">
          </q-avatar>
          <div>
            <div class="text-grey-8">
              <span class="text-weight-medium text-subtitle1 text-dark">{{ noti.name }}</span> buy Enterprise plan successfully
            </div>
            <div class="text-grey-8">{{ noti.date + ' | ' + noti.time }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-grey-7">Yesterday</div>
    <div class="q-gutter-y-lg">
      <div v-for="(noti, index) in notifications" :key="index" class="flex justify-between items-center">
        <div class="flex q-gutter-x-md items-center">
          <q-avatar size="50px">
            <img :src="noti.img" alt="">
          </q-avatar>
          <div>
            <div class="text-grey-8">
              <span class="text-weight-medium text-subtitle1 text-dark">{{ noti.name }}</span> buy Enterprise plan successfully
            </div>
            <div class="text-grey-8">{{ noti.date + ' | ' + noti.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  <script setup>
  import { ref } from 'vue';

  const notifications = ref([
    {name: 'David Elson', time: '9:00 AM', date:'July 16, 2024', img: 'https://cdn.quasar.dev/img/avatar3.jpg'},
    {name: 'David Elson', time: '12:00 PM', date:'July 16, 2024', img: 'https://cdn.quasar.dev/img/avatar6.jpg'},
    {name: 'David Elson', time: '9:00 PM', date:'July 16, 2024', img: 'https://cdn.quasar.dev/img/avatar4.jpg'},
    {name: 'David Elson', time: '7:00 AM', date:'July 16, 2024', img: 'https://cdn.quasar.dev/img/avatar2.jpg'},
  ])

  </script>
