<template lang="pug">
.projects
  h1 Projects
    img(src='@/assets/icons/info.png')
  .tabs
    .tab(v-for="item in tabs" :class="{'active': item.id === tab}" @click="tab=item.id")
      | {{ item.text }}
  .list
    .project(v-for="item in projects" :class="{'animation':animation}" @click="project = item; showModal = true")
      img(:src="requireImg(item.img)")
      .overlay
        h2 {{ item.name }}
        button read more
  modal(v-if="showModal" :project="project" @close="showModal = false")
</template>

<script>
import projectsList from "@/data/projects";
import modal from "@/components/general/modal";
//
export default {
  name: "projects",
  components: {
    modal
  },
  data() {
    return {
      animation: true,
      project: null,
      showModal: false,
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
      tab: null
    }
  },
  computed: {
    projects() {
      return projectsList.filter((item) => {
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
    grid-auto-rows: 250px; /* is it ok? */
    gap: 20px;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }

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
        text-align: center;


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