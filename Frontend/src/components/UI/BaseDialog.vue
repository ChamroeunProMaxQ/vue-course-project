<template>
  <Teleport to="body">
    <dialog v-if="isOpen" >
      <div>
        <h3>Alert </h3>
        <h2 @click="setIsOpen">x</h2>
        <slot ></slot>
      </div>
    </dialog>
  </Teleport>
</template>

<script>
export default {
  emits: ["toggle"],
  //emit to open and close
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    setIsOpen() {
      this.$emit("toggle", (this.isOpen = !this.isOpen));
    },
  },
};
</script>

<style scoped>
dialog {
  display: block;
  position: fixed;
  top: 38%;
  margin: auto;
}

dialog div h2 {
  color: red;
  cursor: pointer;
  float: right;
  position: absolute;
  top: -25px;
  right: 0;
}

dialog h3 {
  padding: .4rem 0rem;
  margin: 0;
}

dialog::backdrop {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
}
</style>
