<script setup>
import TheHeader from "./components/layout/header/TheHeader.vue";

components: {
  TheHeader;
}
</script>

<template>
  <div>
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <Transition name="fade-router" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script>

export default {
  computed: {
  },
  computed : {
    isLogged() {
      return !!this.$store.getters.getUserAuth;
    }
  },
  created() {
    if(!this.isLogged) {
      this.$router.push({name: 'login'});
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.fade-router-enter-from {
  opacity: 0;
}
.fade-router-leave-to {
  opacity: 0;
  translate: 100px;
}
.fade-router-enter-active {
  transition: all 0.5s ease-out;
}
.fade-router-enter-to,
.router-leave-from {
  opacity: 1;
  translate: 00px;
}

.fade-router-leave-active {
  transition: opacity 0.5s ease-in;
}
</style>
