<script setup lang="ts">
import MessageList from "@/components/list/MessageList.vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import {reactive} from "vue";
const messageList = reactive([
  {id:1},
  {id:2}
])
</script>

<template>
  <MessageList :message-list="messageList"></MessageList>
 <FooterTabbar></FooterTabbar>
</template>


<style>

</style>