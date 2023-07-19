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
  }
};
</script>

<style lang="scss" scoped></style>
