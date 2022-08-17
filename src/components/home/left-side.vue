<template lang="pug">
.left-side
  .my-info.avatar-info
    img(src='@/assets/img/itsme.jpg')
    div
      h1 Giorgi Enuqidze
      div Web Developer
  .my-info.menu-cont
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
</template>

<script>
export default {
  name: "left-side"
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
}

.my-info {
  width: 270px;
  padding: 30px 20px;
  //background-color: #c0e3e7;
  background-color: #a0c3d7;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

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

  h3 {
    text-align: center;
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

</style>
