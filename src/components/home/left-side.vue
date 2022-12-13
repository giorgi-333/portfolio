<template lang="pug">
.left-side
  .my-info.avatar-info
    img(src='@/assets/img/itsme.jpg')
    div
      h1 Giorgi Enuqidze
      div Web Developer
  .my-info.menu-cont(:class="{'active': menuShow}")
    h3 Navigation
    .menu
      a(href='#aboutMe')
        img(src='@/assets/icons/profile.png')
        span About me
      a(href='#skills')
        img(src='@/assets/icons/file.png')
        span Skills
      a(href='#experience')
        img(src='@/assets/icons/work-time.png')
        span Experience
      a(href='#projects')
        img(src='@/assets/icons/portfolio.png')
        span Projects
      a(href='#contact')
        img(src='@/assets/icons/envelope.png')
        span Contact
  img.menu-icon(:src="menuIcon" @click="menuShow = !menuShow")
</template>

<script>
export default {
  name: "left-side",
  data() {
    return {
      menuShow: false
    }
  },
  computed: {
    menuIcon() {
      return require(`@/assets/icons/${this.menuShow ? 'close' : 'burger'}.png`) 
    }
  },
  methods: {
    goToScroll() {
      // this.$router.push({ hash })
      document.documentElement.style.overflow = 'auto'
    }
  },
  watch: {
    menuShow(val) {
      if(val) {
          document.documentElement.style.overflow = 'hidden'
      } else {
         document.documentElement.style.overflow = 'auto'
      }
    },
    // '$route.hash'(val) {
    //   if(this.menuShow) {
    //     this.menuShow = false
    //   }
    // }
  },
  mounted() {
    console.log(this.$route.hash)
    const links = document.querySelectorAll(".menu a")
    links.forEach( link => {
      link.addEventListener("click", () => {
        document.documentElement.style.overflow = 'auto'
        if(this.menuShow) {
          this.menuShow = false
        }
        return true
      })
    })
  }
}
</script>

<style lang="scss" scoped>

.left-side {
  height: calc(100vh - 100px);
  position: sticky;
  top: 50px;
  display: grid;
  grid-template-rows:  max-content auto;
  row-gap: 20px;

  
  @media(max-width: 1030px) {
        position: unset;
        grid-template-rows: auto;
        height: auto;
        // new proporties
        width: 100%;
        // margin-bottom: 15px;
  }
}

.my-info {
  width: 270px;
  padding: 30px 20px;
  //background-color: #c0e3e7;
  background-color: #a0c3d7;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media(max-width: 1030px) {
        width: 100%;
        box-shadow: none;
        border-radius: unset;
        padding: 30px 0;
  }

  &.avatar-info {
    font-family: 'Itim', sans-serif;
  }

  & > img {
    display: block;
    margin: 15px auto 0;
    width: 190px;
    height: 190px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.718);
  }

  & > div {
    margin-top: 20px;
    text-align: center;
  }
}

.my-info.avatar-info > div > div {
  font-size: 20px;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.83);
}

.menu-cont {
  background-color: #fff;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  border-radius: 30px;

  @media(max-width: 1030px) {
        // display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 270px;
        max-width: calc(100% - 65px);
        height: 100vh;
        border-radius: 0;
        z-index: 1;
        box-shadow: 2px 2px 8px #333;
        transition: .4s;
        transform: translateX(-100%);
        &.active {
          transform: translateX(0);
        }
  }

  h3 {
    text-align: center;

    @media(max-width: 1030px) {
        display: none;
    }
  }
}

.menu a {
  display: flex;
  align-items: center;
  text-align: left;
  margin: 12px 0;
  color: #000000;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  padding-bottom: 10px;

  img {
    width: 30px;
    margin-right: 5px;
  }
}

.menu-icon {
  cursor: pointer;
  width: 50px;
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  z-index: 1;

  @media(max-width: 1030px) {
      display: block;
  }
}
</style>
