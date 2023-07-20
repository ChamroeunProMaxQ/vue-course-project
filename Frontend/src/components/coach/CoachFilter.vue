<template>
  <BaseContainer>
    <h1>Find Your Coach</h1>
    <form>
      <div class="checkbox-label" v-for="skill in coachSkill" :key="skill.id">
        <input type="checkbox" :value="skill.id" :id="skill.name" name="filter" v-model="selectedSkills" />
        <label :for="skill.name">{{ skill.name }}</label>
      </div>
    </form>
  </BaseContainer>
</template>

<script>
export default {
  data() {
    return {
      selectedSkills: [],
    };
  },
  emits : ['filter'],
  computed : {
    coachSkill() {
      return this.$store.getters.getAreas;
    }
  },
  watch : {
    selectedSkills() {
      this.setFilter();
    }
  },
  created() {
    this.loadArea();
  },
  methods : {
    setFilter() {
      this.$emit('filter',this.selectedSkills);
    },
    loadArea() {
      this.$store.dispatch('getAreaAction');
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 1rem;
}
</style>
