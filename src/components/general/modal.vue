<template lang="pug">
.modal(@click="close")
  .modal-content(@click.stop)
    //- img(:src="requireImg(project.img)")
    slider
    .modal-info
      h1 {{ project.name }}
      p text text text
</template>

<script>
import Slider from './slider.vue';

export default {
  name: "modal",
  components: {
    Slider
  },
  props: ["project"],
  methods: {
    close() {
      this.$emit('close')
    },
    requireImg(img) {
      return require(`@/assets/projects/${img}`)
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
    min-width: 400px;
    min-height: 300px;
    background-color: #fff;
    border-radius: 4px;
    padding: 40px 25px;
    position: relative;
    display: grid;
    grid-template-columns: 3fr 2fr;

    img {
      width: 100%;
      max-width: 600px;
      box-shadow: 2px 2px 8px #333;
      border-radius: 4px;
    }

    .modal-info {
      padding: 0 30px;
      h1 {
        font-weight: bold;
        color: black;
        font-size: 24px;
        font-family: 'Itim', sans-serif;
        margin-bottom: 10px;
      }
    }
  }
}
</style>