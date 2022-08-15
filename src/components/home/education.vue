<template>
  <div class="edu-lang">
    <div class="line"></div>
    <div class="education">
      <h2>educations</h2>
      <span class="years">2018 - 2022</span>
      <div class="text">
        <div>Georgian Technical University</div>
        <span>Informatics and Management Systems</span>
      </div>
    </div>
    <div class="langs">
      <h2>languages</h2>

      <div class="lang">
        <h5>Georgian</h5>
        <div class="circles">
          <div
              class="circle"
              v-for="i in 8"
              :class="{'active': i <= 8}"
          ></div>
          <span>native</span>
        </div>
      </div>

      <div class="lang">
        <h5>English</h5>
        <div class="circles">
          <div
              class="circle"
              v-for="i in 8"
              :class="{'active': i <= 4}"
          ></div>
          <span>intermediate</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "education"
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

  .langs {
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