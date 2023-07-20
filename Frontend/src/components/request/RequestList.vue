<template>
  <BaseContainer>
    <h2 class="center">Request Received</h2>
    <div v-if="getRequests.length !== 0">
      <RequestItemHolder
        v-for="req in getRequests"
        :key="req.id"
        :email="req.email"
        :message="req.message"
        :coachId="req.coachId"
      />
    </div>
    <h1 v-else>No Request</h1>
  </BaseContainer>
</template>

<script>
import RequestItemHolder from "./RequestItemHolder.vue";

export default {
  components: { RequestItemHolder },
  computed: {
    getRequests() {
      return this.$store.getters.getRequests;
    },
  },
};
</script>

<style scoped>
/** make h1 center the div
*/

h1 {
  text-align: center;
}
</style>
