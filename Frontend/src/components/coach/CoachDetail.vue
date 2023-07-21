<template>
  <BaseContainer>
    <h2>Coach Detail</h2>
    <p>Name</p>
    <h3>{{ getCoachDetail.name }}</h3>
    <p>Skill</p>
    <BaseButton
      v-for="area in getCoachDetail.areas"
      :key="area"
      mode="#3d008d"
      style="margin: 0 0.3rem"
    >
      {{ getArea(area) }}
    </BaseButton>
    <p>Rate</p>
    <p>{{ getCoachDetail.price }}$/hour</p>
  </BaseContainer>
</template>

<script>
export default {
  computed: {
    getParam() {
      return this.$route.params.id;
    },
    getCoachDetail() {
      const id = this.$route.params.id;
      return this.$store.getters.getCoachById(id);
    },
  },
  methods: {
    getArea(id) {
      return this.$store.getters.getAreaById(id);
    },
  },
};
</script>

<style scoped>
p {
  padding: 0rem;
  margin: 0.4rem;
}
</style>
