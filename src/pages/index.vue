<template>
  <div>
    <a @click="go">Calendar</a>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const go = () => {
      router.push(`/widgets/calendar`)
    }
    return { go }
  }
}
</script>