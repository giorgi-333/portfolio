<template>
    <div class="home" id="aboutMe">
        <left-side />
        <div class="right-side">
            <div class="cont">
                <h1>Hello, I am giorgi</h1>
                <div>
                    I am web developer, I Have working experience with front-end
                    but i also know back-end. My goal is create modern and
                    responsive websites. I have graduated from Georgian
                    Technical University of Informatics and Management Systems.
                    As you will see below I am also professional teacher of
                    college.
                    <a href=""></a>
                </div>
                <education />
            </div>
            <div class="cont" id="skills">
                <skills />
            </div>
            <div class="cont" id="experience">
                <experience />
            </div>
            <div class="cont" id="projects">
                <projects />
            </div>
            <div class="cont" id="contact">
                <contact />
            </div>
        </div>
        <img
            src="@/assets/icons/arrow-top.png"
            class="scroll-top"
            v-if="showScrollTop"
            @click="scrollToTop"
        />
    </div>
</template>

<script>
import LeftSide from "@/components/home/left-side";
import Skills from "@/components/home/skills";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import Contact from "@/components/home/contact";
import Projects from "@/components/home/projects";
import Slider from "../components/general/slider.vue";

export default {
    name: "Home",
    components: {
        Projects,
        Contact,
        Experience,
        Education,
        Skills,
        LeftSide,
        Slider,
    },
    data() {
        return {
            showScrollTop: false,
        };
    },
    methods: {
        handleScroll() {
            if (!this.showScrollTop && window.scrollY > 100) {
                this.showScrollTop = true;
            } else if (window.scrollY <= 100) {
                this.showScrollTop = false;
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0 });
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style lang="scss" scoped>
/*  */
.home {
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    padding: 50px 30px;
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 40px;

    @media(max-width: 1030px) {
        grid-template-columns: auto;
        padding: 0;
    }
}

/* right side */

.right-side {
    padding: 40px;
    background: rgb(255, 255, 255);
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    font-family: "Nunito", sans-serif;
    border-radius: 4px;

    @media(max-width: 1030px) {
        padding: 10px;
    }
}

.right-side .cont {
    position: relative;
    padding-top: 20px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgb(164, 160, 158);

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
}

.right-side .cont > div {
    margin-top: 20px;
    font-size: 18px;
    line-height: 28px;
}

/* */
.scroll-top {
    cursor: pointer;
    width: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 1;
}
</style>
