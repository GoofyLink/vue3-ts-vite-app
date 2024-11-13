<script setup lang="ts">
import {reactive} from 'vue'
import FooterTabbar from "@/components/FooterTabbar.vue";
import ContractList from "@/components/list/ContractList.vue";
const contractList = reactive([
  {id:1},
  {id:2},
])
</script>
<template>
  123
  <ContractList :contract-list="contractList"></ContractList>
  <FooterTabbar></FooterTabbar>
</template>

<style scoped>

</style>