<script setup>
import BaseContainer from "../UI/BaseContainer.vue";
</script>

<template>
  <BaseContainer>
    <BaseButton mode="gray">Refresh</BaseButton>
    <CoachItemContainer v-for="coach in coaches" :key="coach.id" :coach="coach" />
  </BaseContainer>
</template>

<script>
import CoachItemContainer from "./CoachItemContainer.vue";

export default {
  components: { BaseContainer, CoachItemContainer },
  computed : {
    coaches () {
      const coach = this.$store.getters.getCoaches;
      return coach;
    }
  },

};
</script>

<style scoped></style>
