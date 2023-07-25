<template>
  <div>
    <RequestList />
  </div>
</template>

<script>
import RequestList from "../components/request/RequestList.vue";

export default {
  components: { RequestList },
  computed : {
    getRequests() {
        this.$store.getters.getRequests;
    }
  },
  async created() {
   await this.loadRequests();
  },
  methods : {
    async loadRequests() {
        this.$store.dispatch('getRequestAction');
    }
  }
};
</script>

<style lang="scss" scoped></style>
