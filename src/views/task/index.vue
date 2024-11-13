<script setup lang="ts">
import {reactive} from "vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import TaskList from "@/components/list/TaskList.vue";
import ContractList from "@/components/list/ContractList.vue";
const taskList = reactive([
  {id:1},
  {id:2}
])
</script>

<template>
  <ContractList></ContractList>
  <TaskList :task-list="taskList"/>
  <FooterTabbar/>
</template>

<style scoped>
body {
  background: #f5f5f5;
}
</style>