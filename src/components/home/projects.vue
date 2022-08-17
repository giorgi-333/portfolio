<template lang="pug">
.projects
  h1 Projects
    img(src='@/assets/icons/info.png')
  .tabs
    .tab(v-for="item in tabs" :class="{'active': item.id === tab}" @click="tab=item.id")
      | {{ item.text }}

</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      tabs: [
        {
          id: 0,
          text: 'all'
        },
        {
          id: 1,
          text: 'front end'
        },
        {
          id: 2,
          text: 'full stack'
        }
      ],
      tab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.projects {
  h1 {
    margin-bottom: 20px;
    img {
      width: 25px;
      margin-left: 5px;
    }
  }
  .tabs {
    display: flex;
    .tab {
      cursor: pointer;
      color: #595f64;
      font-weight: bold;
      padding: 5px 15px;
      &.active {
        color: black;
      }
    }
  }
}
</style>