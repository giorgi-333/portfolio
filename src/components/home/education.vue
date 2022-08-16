<template lang="pug">
.edu-lang
  .line
  .education
    h2 educations
    span.years 2018 - 2022
    .text
      div Georgian Technical University
      span Informatics and Management Systems
  .languages
    h2 languages
    .lang(v-for='lang in languages')
      h5 {{ lang.title }}
      .circles
        .circle(v-for='i in 8' :class="{'active': i <= lang.level}")
        span {{ lang.levelText }}
</template>

<script>
export default {
  name: "education",
  data() {
    return {
      languages: [
        {
          title: 'Georgian',
          level: 8,
          levelText: 'native'
        },
        {
          title: 'English',
          level: 4,
          levelText: 'intermediate'
        }
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.edu-lang {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  padding-top: 25px;

  .line {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
    height: 1px;
    background-color: rgb(75, 82, 91);
  }

  h2 {
    margin-bottom: 20px;
  }

  .education {
    .years {
      padding: 4px 12px;
      font-size: 12px;
      border: 1px solid #4b525b80;
      border-radius: 4px;
    }

    .text {
      padding-top: 8px;
      padding-right: 30px;

      line-height: 24px;

      div {
        font-size: 18px;
      }

      span {
        font-size: 16px;
      }
    }
  }

  .languages {
    .lang {
      padding-bottom: 10px;

      h5 {
        margin-bottom: 2px;
      }

      .circles {
        display: flex;
        align-items: center;

        .circle {
          margin-right: 10px;
          width: 20px;
          height: 20px;
          border: 1px solid #a0c3d7;
          border-radius: 50%;

          &.active {
            background-color: #a0c3d7;
          }
        }

        span {
          color: rgb(75, 82, 91);
          font-size: 16px;
        }
      }
    }
  }
}
</style>