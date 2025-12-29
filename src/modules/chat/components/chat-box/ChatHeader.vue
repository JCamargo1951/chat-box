<template>
  <header class="bg-white p-4 text-gray-700">
    <h1 class="text-2xl font-semibold">
      Franquito
      <span v-if="typing" class="text-sm text-pink-700">escribiendo...</span>
    </h1>
  </header>
</template>

<script setup lang="ts">

defineProps<{typing: boolean}>()

</script>
