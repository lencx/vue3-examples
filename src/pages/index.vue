<template>
  <div>
    <a @click="go">Calendar</a>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
export const go = () => {
  router.push(`/widgets/calendar`)
}
</script>