<template>
  <div>
    <BaseContainer>
      <h1>Register as Coach</h1>
      <p>Register</p>
      <form @submit.prevent="submitCoach">
        <div class="form-control">
          <label for="name">Name as a coach</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <!-- check box with 3 choice -->
        <label for="">Skill</label>
        <div class="checkbox-label" v-for="skill in coachSkill" :key="skill.id">
          <input
            type="checkbox"
            :value="skill.id"
            :id="skill.name"
            v-model="areas"
          />
          <label :for="skill.name" >{{ skill.name }}</label>
        </div>

        <div class="form-control">
          <label for="price">Price as a coach</label>
          <input type="number" id="price" v-model="price" required/>
        </div>
        <div class="submit-container">
          <BaseButton mode="#3d008d">Submit</BaseButton>
        </div>
      </form>
    </BaseContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areas: [],
      name: "",
      price: "",
      open: false,
      message: null,
    };
  },
  watch: {},
  computed: {
    coachSkill() {
      return this.$store.getters.getAreas;
    },
    isOpen() {
      return this.open;
    },
  },
  created() {
    this.loadArea();
  },
  methods: {
    async loadArea() {
      this.$store.dispatch("getAreaAction");
    },
    submitCoach() {
      try {
        const coachData = {
          name: this.name,
          price: this.price,
          areas: this.areas,
        };
        this.$store.dispatch("submitCoachAction", coachData);
        this.$router.push("/coach");
      } catch (err) {
        const err_string = JSON.parse(err.message);
        this.message = err_string.message;
        this.open = true;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

.checkbox-label {
  display: flex;
  justify-content: start;
  margin: 0.5rem 0;
}
d .submit-container {
  display: flex;
  justify-content: end;
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  border-radius: 10px;
  padding: 0.5rem 0.25rem;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
