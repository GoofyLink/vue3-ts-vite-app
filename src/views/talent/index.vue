<script setup lang="ts">
import TalentList from "@/components/list/TalentList.vue";
import FooterTabbar from "@/components/FooterTabbar.vue";
import {reactive} from "vue";
const talentList = reactive([
  {id:1},
  {id:2},
])
</script>

<template>
  <TalentList :talent-list="talentList"></TalentList>
  <FooterTabbar></FooterTabbar>
</template>


<style>

</style>