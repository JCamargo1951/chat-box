<script lang="ts" setup>
import ContactList from './ContactList.vue';
import SidebarHeader from './SidebarHeader.vue';

</script>

<template>
  <div class="w-1/4 bg-white border-r border-gray-300">
    <!-- Sidebar Header -->
    <SidebarHeader></SidebarHeader>    

    <!-- Contact List -->
    <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
        <ContactList></ContactList>
    </div>
  </div>
</template>
