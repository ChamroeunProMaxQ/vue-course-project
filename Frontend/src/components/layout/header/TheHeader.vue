<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <h1>Find Coach</h1>
      <ul>
        <li>
          <RouterLink to="/coach">Coaches</RouterLink>
        </li>
        <li style="position: relative">
          <RouterLink to="/request">Request</RouterLink>
          <p class="req-num">{{ requestNumber }}</p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    requestNumber() {
      return this.$store.getters.getRequests.length;
    },
  },
};
</script>

<style scoped>
.req-num {
  position: absolute;
  top: -15px;
  right: 0px;
  background-color: #f391e3;
  color: white;
  padding: 0.4rem;
}

header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
  color: white;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
