<template>
  <template v-if="itsMine">
    <div class="flex justify-end mb-4 cursor-pointer">
      <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
        <p>{{ text }}</p>
      </div>
      <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
        <img
          src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
          alt="My Avatar"
          class="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  </template>

  <template v-else="itsMine">
    <div class="flex mb-4 cursor-pointer">
      <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
        <img
          src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
          alt="User Avatar"
          class="w-8 h-8 rounded-full"
        />
      </div>
      <div class="flex flex-col max-w-96 bg-white rounded-lg p-3 gap-3">
        <p class="text-gray-700">{{ text }}</p>

        <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/modules/chat/interfaces/chat-message-interface'

defineProps<ChatMessage>()
</script>
