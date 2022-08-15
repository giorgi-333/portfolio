<template>
  <div class="content" id="a">
    <left-side/>
    <div class="right-side">
      <div class="cont">
        <h1>Hello, I am giorgi</h1>
        <div>
          I am web developer, I Have working experience with front-end but i also know back-end. My goal is create modern and responsive websites.
          I have graduated from Georgian Technical University of Informatics and Management
          Systems. As you will see below I am also professional teacher of college.
        </div>
      </div>
      <div class="cont" id="b">
<!--        <home-skills/>-->
      </div>
      <div class="cont" style="height: 150vh;" id="c">
        <h1>text yes</h1>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "@/components/home/left-side";

export default {
  name: "Home",
  components: {LeftSide}
}
</script>

<style scoped>
/*  */
.content {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 50px 0;
  display: grid;
  grid-template-columns: max-content auto;
  column-gap: 40px;
}


/* right side */

.right-side {
  padding: 40px;
  background: rgb(255, 255, 255);
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  font-family: 'Nunito', sans-serif;
}

.right-side .cont {
  position: relative;
  padding-top: 20px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(164, 160, 158);
}

.right-side .cont > div {
  margin-top: 20px;
  font-size: 18px;
  line-height: 28px;
}


</style>
