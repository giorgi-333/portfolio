<template lang="pug">
.modal(@click="close")
  .modal-content(@click.stop)
    p text text text
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.55);

  .modal-content {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    padding: 15px;
    position: relative;

  }
}
</style>