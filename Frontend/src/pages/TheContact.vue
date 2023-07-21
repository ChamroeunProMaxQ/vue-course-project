<template>
  <BaseContainer>
    <h2>Interested? Coach : {{ coach ? coach.name : "" }} </h2>
    <h3>Reach out now</h3>
    <form v-on:submit.prevent="onSubmit">
      <div>
        <label for="name">Your Email</label>
        <input type="email" id="name" v-model="email" required />
      </div>
      <div>
        <label for="message">Your Message</label>
        <textarea id="message" rows="5" v-model="message" required></textarea>
      </div>
      <BaseButton mode="#3d008d">Send Message</BaseButton>
    </form>
    <BaseDialog @toggle="setToggle" :isOpen="isOpen">
      <h1> {{ sendStatus }} </h1>
    </BaseDialog>
  </BaseContainer>
</template>

<script>
import BaseDialog from "../components/UI/BaseDialog.vue";
export default {
  components: { BaseDialog },
  data() {
    return {
      email: "",
      message: "",
      sendStatus: "success",
      isOpen: false,
    };
  },
  computed : {
    coach() {
      return this.$store.getters.getCoachById(this.$route.params.id);
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addRequestAction',{
          coachId : this.$route.params.id,
          email : this.email,
          message : this.message,
          id : Math.random().toString(),
      })
      this.sendStatus = "success";
      this.setToggle();
    },
    setToggle(isOpen) {
      this.isOpen = !isOpen
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border: solid gray 1.5px;
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 15px;
}

form div {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input,
textarea {
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.5rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #2c974b;
}
input[type="email"] {
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.5rem;
}

input[type="email"]:focus {
  outline: none;
  border-color: #2c974b;
}

input[type="email"]:invalid {
  border-color: #dc3545;
}

h1 {
  color: #2c974b;
  text-align: center;
}
</style>
