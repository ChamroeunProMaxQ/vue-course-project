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
  components: { BaseContainer, CoachItemContainer, BaseButton },
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
    filterdSkill() {
      return this.filterdSkill;
    },
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
