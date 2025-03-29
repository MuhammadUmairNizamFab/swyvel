<template>
  <div class="q-gutter-y-lg">
    <div>
      <div class="text-h4 text-bold">Subscription & Billing</div>
      <div class="text-grey-6 q-mt-sm">
        Manage your plan, payments, and billing details seamlessly.
      </div>
    </div>
    <div>
      <q-card flat class="border rounded-20 q-pa-md">
        <q-card-section>
          <div class="text-h6 text-grey-7 font-weight-meium">Current Plan</div>
          <div class="row justify-between items-center">
            <div>
              <div class="text-center text-h3 text-bold">
                {{ plan.price }}
              </div>
              <div class="text-center text-subtitle1 text-bold text-black">
                {{ plan.plan_type }}
              </div>
              <div class="text-center text-grey-7 q-mt-xs">
                {{ plan.planDuration }}
              </div>
            </div>
            <div>
              <q-list>
                <q-item
                  dense
                  class="gap-12 flex items-start"
                  v-for="(offer, index) in plan.offers"
                  :key="index"
                >
                  <img src="~assets/landing-page/greencheck.svg" alt="loading" />

                  <div class="text-grey-7">
                    {{ offer }}
                  </div>
                </q-item>
              </q-list>
            </div>
            <div class=" q-gutter-y-md">
              <q-btn
                unelevated
                no-caps
                color="primary"
                class="full-width rounded-12 text-bold"
                padding="md"
                >Upgrade Plan</q-btn>
              <q-btn
                unelevated
                no-caps
                class="full-width border rounded-12 text-bold"
                padding="md"
                >Cancel Subscription</q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <BaseTable title="Billing History" tableFor="bill-history" :columns="columns" :rows="rows" :pagination = "true"  />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseTable from 'src/components/common/BaseTable.vue'

const plan = ref({
  price: '$40/mth',
  plan_type: 'Enterprise Plan',
  planDuration: 'Billed Anually',
  offers: [
    'Unlimited social accounts',
    'AI-powered misinformation & threat detection',
    'Custom workflows & automation',
    'Dedicated account manager & premium support',
  ],
})

const columns = [
  { name: 'invoiceId', label: 'Invoice ID', field: 'invoiceId', align: 'left', sortable: true },
  { name: 'date', label: 'Date', field: 'date', align: 'left', sortable: true },
  { name: 'amount', label: 'Amount', field: 'amount', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left', sortable: true },
  { name: 'action', label: 'Action', field: 'action', align: 'left' },
]

const rows = [
  {
    invoiceId: 'INV-001234	',
    date: 'Feb 25, 2025	',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    invoiceId: 'INV-001234	',
    date: 'Feb 25, 2025	',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    invoiceId: 'INV-001234	',
    date: 'Feb 25, 2025	',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    invoiceId: 'INV-001234	',
    date: 'Feb 25, 2025	',
    amount: '$49.00',
    status: 'Paid',
  },
  {
    invoiceId: 'INV-001234	',
    date: 'Feb 25, 2025	',
    amount: '$49.00',
    status: 'Paid',
  },

]
</script>
