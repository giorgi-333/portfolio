<template>
  <div>
    <h1>
      My skills
    </h1>
    <div class="container">

      <div class="tabs">
        <div
          class="btn"
          v-for="item in tabs"
          :class="{ 'active': item === tab }"
          @click="selectTab(item)"
        >
          {{ item }}
        </div>
      </div>

      <div class="contents">

        <div class="content" v-for="content in contents" :class="{ 'active': tab === content.key}">
          <div class="skills-images">
            <div v-for="item in content.list">
              <img :src="requireImg(item.img)">
              <span> {{ item.text }} </span>
            </div>
          </div>
        </div>

      </div>
    </div> <!-- tab content-->


    <code class="text-secondary" style="position: absolute; bottom: 10px; right: 0;">
      (knowledge levels)
    </code>


  </div>
</template>

<script>
export default {
  name: "skills",
  data() {
    return {
      tabs: ['High', 'Middle', 'Basics'],
      tab: 'High',
      contents: [
        {
          key: "High",
          list: [
            {
              img: "html-5.png",
              text: "HTML"
            },
            {
              img: "css.png",
              text: "CSS"
            },
            {
              img: "js.png",
              text: "Javascript"
            },
            {
              img: "bootstrap.svg",
              text: "Bootstrap"
            },
            {
              img: "jquery.png",
              text: "Jquery"
            },
            {
              img: "vue.png",
              text: "Vue"
            },
            {
              img: "php.png",
              text: "PHP"
            },
            {
              img: "laravel.svg",
              text: "Laravel"
            }
          ]
        },
        {
          key: "Middle",
          list: [
            {
              img: "html-5.png",
              text: "HTML"
            },
            {
              img: "css.png",
              text: "CSS"
            },
            {
              img: "js.png",
              text: "Javascript"
            }
          ]
        },
        {
          key: "Basics",
          list: [
            {
              img: "bootstrap.svg",
              text: "Bootstrap"
            },
            {
              img: "jquery.png",
              text: "Jquery"
            },
            {
              img: "php.png",
              text: "PHP"
            },
            {
              img: "laravel.svg",
              text: "Laravel"
            }
          ]
        },
      ]

    }
  },
  methods: {
    selectTab(tab) {
      this.tab = tab
    },
    requireImg(img) {
      return require(`~/assets/icons/${img}`)
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 130px auto;
  font-family: 'Nunito', sans-serif;

  .tabs {
    .btn {
      cursor: pointer;
      margin: 5px 0;
      padding: 5px 20px;
      color: #003273;
      border-radius: 6px;

      &.active {
        background-color: #c0e3e7;
      }
    }
  }
}

.contents {
  .content {
    display: none;

    &.active {
      opacity: 0;
      display: unset;
      animation: showMe .8s forwards;
    }

    @keyframes showMe {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .skills-images {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: space-around;
      gap: 8px;

      div {
        display: flex;
        align-items: center;

        img {
          width: 40px;
          margin-right: 5px;
        }
      }
    }
  }
}


</style>
