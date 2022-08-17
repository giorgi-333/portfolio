<template>
  <div class="content" id="aboutMe">
    <left-side/>
    <div class="right-side">
      <div class="cont">
        <h1>Hello, I am giorgi</h1>
        <div>
          I am web developer, I Have working experience with front-end but i also know back-end. My goal is create
          modern and responsive websites.
          I have graduated from Georgian Technical University of Informatics and Management
          Systems. As you will see below I am also professional teacher of college.
          <a href=""></a>
        </div>
        <education/>
      </div>
      <div class="cont" id="skills">
        <skills/>
      </div>
      <div class="cont" id="experience">
        <experience/>
      </div>
      <div class="cont" id="projects">
       <projects/>
      </div>
      <div class="cont" id="contact">
        <contact/>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "@/components/home/left-side";
import Skills from "@/components/home/skills";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";

export default {
  name: "Home",
  components: {Projects, Contact, Experience, Education, Skills, LeftSide}
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
