<script setup>
import { defineAsyncComponent } from 'vue'
const CoachFilter = defineAsyncComponent(() => import("../components/coach/CoachFilter.vue"));
const CoachItemContainer = defineAsyncComponent(() => import("../components/coach/CoachItemContainer.vue"));
</script>

<template>
  <div>
    <CoachFilter @filter="setFilter" />
    <BaseContainer>
      <div class="top-list">
        <BaseButton mode="gray" @click="laodCoach">Refresh</BaseButton>
        <BaseButton mode="#3d008d" @click="$router.push({'name' : 'coach-register'})" v-if="!isRegister">Register as a coach</BaseButton>
        <BaseButton mode="#3d008d" @click="$router.push(`/coach/${userId}`)" v-else>View you detail as coach</BaseButton>
      </div>
      
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
  data() {
    return {
      filterdSkill: [],
    };
  },
  computed: {
    coaches() {
      const all = this.$store.getters.getCoaches;
      if (this.filterdSkill.length === 0) {
        return all;
      }
      return all.filter((coach) => {
        return coach.areas.some((area) => {
          return this.filterdSkill.includes(area);
        });
      });
    },
    // filterdSkills() {
    //   return this.filterdSkill;
    // },
    isRegister() {
      return this.$store.getters.getIsRegistered;
    },
    userId() {
      return localStorage.getItem("userId");
    }
  },

  created () {
    this.laodCoach();
  },
  methods: {
    setFilter(selectedSkills) {
      this.filterdSkill = [...selectedSkills];
    },
    laodCoach() {
      this.$store.dispatch("getCoachAction");
    }
  },
};
</script>

<style scoped>

.top-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
