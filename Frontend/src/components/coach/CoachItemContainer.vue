<template>
  <div class="container">
    <div>
      <h3>{{ coach.name }}</h3>
      <p>{{ coach.price }} $ / hour</p>

      <BaseButton v-for="area, i in coach.areas" :key="area" :mode="mode(i)">{{
        getArea(area)
      }}</BaseButton>
    </div>
    <div class="button-container">
      <BaseButton mode="gray" @click="goToContact">Contact</BaseButton>
      <BaseButton mode="#3d008d" @click="goToCoachDetail(coach.id)"
        >View Details</BaseButton
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["coach"],
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    goToContact() {
      this.$router.push(`/contact/${this.coach.id}`);
    },
    goToCoachDetail(id) {
      if (this.$route.params.id !== id) {
        this.$router.push(`/coach/${id}`)
      } else {
        this.$router.back();
      }
    },
    getArea(id) {
      return this.$store.getters.getAreaById(id); 
    },
    mode(i) {
      if(i % 2 == 0) {
        return "#3d008d";
      } else {
        return "#4f608d";
      }
    }

  },
};
</script>

<style scoped>
* {
  margin: 0.5rem;
  padding: 0;
}
.container {
  border: solid black 1px;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem 0;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 1rem;
}
</style>
