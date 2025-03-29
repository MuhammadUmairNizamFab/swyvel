<template>
  <q-card flat class="rounded-8 border">
    <q-table
      flat
      :rows="tableProps.rows"
      :columns="tableProps.columns"
      row-key="id"
      :hide-bottom="true"
      :rows-per-page-options="[10]"
      class="rounded-8 border"
      table-header-class="text-grey-6"
      table-class="stripe-table"
      :selection="selection"
      v-model:selected="selected"
    >
      <template v-slot:top-left>
        <div class="text-weight-medium font-16px">
          {{ tableProps.title }}
          <span v-if="tableProps.tableFor !== 'bill-history'"  class="q-ml-sm q-px-sm q-pa-xs bg-indigo-1 text-primary rounded-12 font-12px">
            {{ rows.length }} records
          </span>
        </div>
      </template>

      <template v-slot:body-cell-userName="props">
        <q-td>
          <div class="flex items-center">
            <q-avatar size="40px">
              <img :src="props.row.img" />
            </q-avatar>
            <span class="q-pl-sm text-weight-medium text-black">{{ props.row.userName }}</span>
          </div>
        </q-td>
      </template>

      <template v-slot:body-cell-status="props">
        <q-td>
          <StatusBadges :status="props.row.status" />
        </q-td>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td>
          <div v-if="tableProps.tableFor === 'bill-history'" class="text-grey-7">
            <IconComp
              class="cursor-pointer"
              icon="solar:download-linear"
              width="24"
              height="24"
            />
          </div>
          <div v-else class="flex q-gutter-md items-center text-grey-7">
            <IconComp
              @click="openDeleteDialog"
              class="cursor-pointer"
              icon="ph:trash"
              width="24"
              height="24"
            />
            <IconComp
              v-if="tableProps.tableFor !== 'billings'"
              @click="(tableFor === 'users' || tableFor === 'teams') ? openEditDialog('edit', props.row) : ''"
              class="cursor-pointer"
              icon="garden:pencil-stroke-16"
              width="20"
              height="20"
            />
          </div>

        </q-td>
      </template>
    </q-table>
    <TablesPagination v-if="tableProps.pagination" />
  </q-card>

  <NewMember ref="EditMemberDialog" />
  <DeleteDialog ref="deleteDialog" />
</template>

<script setup>
import { ref } from 'vue'
import StatusBadges from 'src/components/common/StatusBadges.vue'
import NewMember from 'src/components/common/dialogs/NewMemberDialog.vue'
import DeleteDialog from 'src/components/common/dialogs/DeleteDialog.vue'
import TablesPagination from 'src/components/common/TablesPagination.vue'

const tableProps = defineProps({
  title: { type: String, required: true },
  tableFor: { type: String, required: true },
  columns: { type: Array, required: true },
  rows: { type: Array, required: true },
  pagination: { type: Boolean, required: true },
})
const selected = ref([])

const EditMemberDialog = ref(null)
const deleteDialog = ref(null)

const openEditDialog = (type, data) => {
  EditMemberDialog.value.showDialog(type, data)
}
const openDeleteDialog = () => {
  deleteDialog.value.showDialog()
}
</script>

<style scoped></style>
