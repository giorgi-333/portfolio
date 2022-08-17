<template lang="pug">
.projects
  h1 Projects
    img(src='@/assets/icons/info.png')
  .tabs
    .tab(v-for="item in tabs" :class="{'active': item.id === tab}" @click="tab=item.id")
      | {{ item.text }}
  .list
    .project(v-for="item in projects" :class="{'animation':animation}")
      img(:src="requireImg(item.img)")
      .overlay
        h2 {{ item.name }}
        button read more
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      animation: true,
      tabs: [
        {
          id: null,
          text: 'All'
        },
        {
          id: 1,
          text: 'At job'
        },
        {
          id: 2,
          text: 'Independently'
        }
      ],
      tab: null,
      projectsList: [
        {
          cat: 1,
          name: 'The contract chair company',
          img: '1.png'
        },
        {
          cat: 1,
          name: 'The contract chair company',
          img: '1.png'
        },
        {
          cat: 1,
          name: 'The contract chair company',
          img: '1.png'
        },
        {
          cat: 2,
          name: 'The contract chair company',
          img: '1.png'
        },
        {
          cat: 2,
          name: 'The contract chair company',
          img: '1.png'
        }
      ]
    }
  },
  computed: {
    projects() {
      return this.projectsList.filter((item) => {
        return !this.tab || this.tab === item.cat
      })
    }
  },
  methods: {
    requireImg(img) {
      return require(`@/assets/projects/${img}`)
    }
  },
  watch: {
    tab() {
      this.animation = false
      setTimeout(()=> {
        this.animation = true
      },1)
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
    margin-bottom: 10px;

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

  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 250px;
    gap: 20px;

    .project {
      position: relative;
      cursor: pointer;
      box-shadow: 2px 2px 4px 4px #0000001f;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(33, 37, 41, 0.80);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        transition: 1s;
        opacity: 0;


        h2 {
          color: white;
          font-weight: bold;
        }

        button {
          margin-top: 15px;
          padding: 5px 15px;
        }
      }

      &:hover .overlay {
        visibility: visible;
        opacity: 1;
      }

      &.animation {
        animation: project-animation .8s forwards;
      }

      @keyframes project-animation {
        0% {
          transform: scale(0.2) rotate(-40deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
    }
  }
}
</style>