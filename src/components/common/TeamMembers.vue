<template>
  <div class="q-gutter-y-lg">
    <div class="flex justify-between items-start">
      <div>
        <div class="text-h4 text-bold">Team Members</div>
        <div class="text-grey-6 q-mt-sm">
          Manage your team, assign roles, and collaborate seamlessly.
        </div>
      </div>
      <q-btn
        icon="add"
        unelevated
        no-caps
        color="primary"
        label="Add New Member"
        class="rounded-8"
        style="height: 40px"
        @click="openDialog('add')"
      />
    </div>
    <BaseTable title="Team Members" tableFor="teams" :columns="columns" :rows="rows" :pagination = "true"  />
  </div>

  <NewMemberDialog ref="addMemeberDialog" />
</template>

<script setup>
import { ref } from 'vue'
import BaseTable from 'src/components/common/BaseTable.vue'
import NewMemberDialog from 'src/components/common/dialogs/NewMemberDialog.vue'

const addMemeberDialog = ref(null)
const openDialog = (type) => {
  addMemeberDialog.value.showDialog(type)
}

const columns = [
  { name: 'userName', label: 'Member Name', field: 'userName', align: 'left', sortable: true },
  { name: 'email', label: 'Email Address', field: 'email', align: 'left', sortable: true },
  { name: 'role', label: 'Role', field: 'role', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
  { name: 'action', label: 'Action', field: 'action', align: 'left' },
]

const rows = [
  {
    userName: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar5.jpg',
    role: 'Product Designer',
    status: 'Active',
  },
  {
    userName: 'Phoenix Baker',
    email: 'phoenix@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    role: 'Product Manager',
    status: 'In Active',
  },
  {
    userName: 'Lana Steiner',
    email: 'lana@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar3.jpg',
    role: 'Frontend Developer',
    status: 'Active',
  },
  {
    userName: 'Demi Wilkinson',
    email: 'demi@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    role: 'Full Stack Developer',
    status: 'Active',
  },
  {
    userName: 'Natali Craig',
    email: 'natali@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    role: 'Backend Developer',
    status: 'In Active',
  },
  {
    userName: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar1.jpg',
    role: 'Sales Manager',
    status: 'Active',
  },
  {
    userName: 'Phoenix Baker',
    email: 'phoenix@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar2.jpg',
    role: 'Team Lead',
    status: 'Active',
  },
  {
    userName: 'Lana Steiner',
    email: 'lana@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar3.jpg',
    role: 'Frontend Developer',
    status: 'Active',
  },
  {
    userName: 'Demi Wilkinson',
    email: 'demi@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar4.jpg',
    role: 'Frontend Developer',
    status: 'Active',
  },
  {
    userName: 'Natali Craig',
    email: 'natali@untitledui.com',
    img: 'https://cdn.quasar.dev/img/avatar6.jpg',
    role: 'UI /UX Designer',
    status: 'Active',
  },
]
</script>
