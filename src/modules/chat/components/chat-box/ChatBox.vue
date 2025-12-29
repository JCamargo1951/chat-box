<template>
  <div class="flex-1">
    <!-- Chat Header -->
    <ChatHeader :typing></ChatHeader>

    <!-- Chat Messages -->
    <div class="h-screen overflow-y-auto p-4 pb-36" ref="chatRef">
      <ChatMessageBox>
        <ChatBubble v-for="message in messages" :key="message.id" v-bind="message"></ChatBubble>
      </ChatMessageBox>
    </div>

    <!-- Chat Input -->
    <ChatInput @send-message="onMessage($event)"></ChatInput>
  </div>
</template>

<script lang="ts" setup>
import ChatInput from './ChatInput.vue'
import ChatMessageBox from './ChatMessage.vue'
import ChatHeader from './ChatHeader.vue'
import ChatBubble from './ChatBubble.vue'
import { useChat } from '@/modules/chat/composables/useChat'
import { nextTick, ref, watchEffect } from 'vue'
import { sleep } from '@/helpers/sleep'

const { messages, onMessage, typing } = useChat()

const chatRef = ref<HTMLDivElement | null>(null)

watchEffect(async () => {
  messages.value.length
  await nextTick()

  await sleep(0.05)
  chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth',
  })
})
</script>
