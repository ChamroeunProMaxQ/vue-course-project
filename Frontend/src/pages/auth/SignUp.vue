<template>
  <div>
    <BaseContainer>
      <h3>Sign Up Form</h3>
      <form @submit.prevent="signup">
        <input type="email" placeholder="Email" v-model="email" required />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <BaseButton mode="#3d008d"> Sign Up </BaseButton>
      </form>
    </BaseContainer>
    <BaseDialog @toggle="setToggle" :isOpen="isOpen">
      <p>{{ message }}</p>
    </BaseDialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      open: false,
      message: null,
    };
  },
  computed: {
    isOpen() {
      return this.open;
    },
  },
  methods: {
    async signup() {
      try {
        await this.$store.dispatch("getAuthAction", {
          email: this.email,
          password: this.password,
        });

        this.$router.push({ name: "coach" });
      } catch (err) {
        const err_string = JSON.parse(err.message);
        this.message = err_string.message;
        this.open = true;
      }
    },
    setToggle(isOpen) {
      this.open = !isOpen
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #f391e3;
}

input::placeholder {
  color: #ccc;
}
</style>
