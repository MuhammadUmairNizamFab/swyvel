<template>
  <q-badge
    v-if="badgeStyle"
    class="q-py-sm q-px-md"
    style="border-radius: 20px;"
    :class="[badgeStyle.bg, badgeStyle.text]"
  >
    <div
      v-if="['active', 'paid'].includes(props.status?.toLowerCase())"
      style="width: 7px; height: 7px; border-radius: 50%"
      class="q-mr-sm bg-positive"
    ></div>
    <div
      v-else
      style="width: 7px; height: 7px; border-radius: 50%"
      class="q-mr-sm bg-negative"
    ></div>
    {{ props.status }}
  </q-badge>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  status: String
});

const statusStyles = {
  active: { bg: "bg-green-1", text: "text-green" },
  "in active": { bg: "bg-red-2", text: "text-negative" },
  paid: { bg: "bg-green-1", text: "text-green" },
  unpaid: { bg: "bg-red-2", text: "text-negative" },
};

const badgeStyle = computed(() => statusStyles[props.status?.toLowerCase()] || null);
</script>
