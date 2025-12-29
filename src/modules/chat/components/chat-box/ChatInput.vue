<template>
  <footer class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
    <div class="flex items-center">
      <input
        @keyup.enter="emitMessage"
        v-model="message"
        type="text"
        placeholder="Type a message..."
        class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        @click="emitMessage"
        class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-indigo-600 cursor-pointer transition"
      >
        Send
      </button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emits = defineEmits<{
  sendMessage: [text: string]
}>();

const message = ref('')

const emitMessage = () => {
  if (!message.value) return
  emits('sendMessage', message.value);
  message.value = '';
}

</script>
