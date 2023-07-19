<script setup>
import BaseButton from "../components/UI/BaseButton.vue";
import CoachFilter from "../components/coach/CoachFilter.vue";
import BaseContainer from "../components/UI/BaseContainer.vue";
import CoachItemContainer from "../components/coach/CoachItemContainer.vue";
</script>

<template>
  <div>
    <CoachFilter @filter="setFilter" />
    <BaseContainer>
      <BaseButton mode="gray">Refresh</BaseButton>
      <CoachItemContainer
        v-for="coach in coaches"
        :key="coach.id"
        :coach="coach"
      />
    </BaseContainer>
  </div>
</template>

<script>
export default {
  components: { BaseContainer, CoachItemContainer, BaseButton },
  data() {
    return {
      filterdSkill: [],
    }
  },
  computed: {
    coaches() {
      const all = this.$store.getters.getCoaches;
      if(this.filterdSkill.length === 0) {
        return all;
      }
      return all.filter((coach) => {
        return coach.areas.some((area) => {
          return this.filterdSkill.includes(area);
        });
      })
    },
    filterdSkill() {
      return this.filterdSkill;
    }
  },
  methods: {
    setFilter(selectedSkills) {
      this.filterdSkill = [...selectedSkills]
    },
  },
};
</script>

<style scoped></style>
