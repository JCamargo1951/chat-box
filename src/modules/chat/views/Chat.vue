<template>
    <!-- component -->
<div class="flex h-screen overflow-hidden">
        <!-- Sidebar -->
        <Sidebar></Sidebar>
        <!-- Main Chat Area -->
        <ChatBox></ChatBox>
    </div>
</template>

<script setup lang="ts">
import ChatBox from '@/modules/chat/components/chat-box/ChatBox.vue';
import Sidebar from '@/modules/chat/components/sidebar/Sidebar.vue';
</script>