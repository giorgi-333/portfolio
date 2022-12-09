<template lang="pug">
.modal(@click="close")
    .modal-content(@click.stop ref="el")
        img(:src="requireImg(project.img)")
        //- slider
        .modal-info(@mousemove.stop)
            h1 {{ project.name }}
            .all-info 
                span Development Company:
                b Gray Ltd.
                span My Position:
                b Front-End
                span My Used Technologies:
                b Vue&Nuxt (Pug,Sass..)
</template>

<script>
import Slider from "./slider.vue";

export default {
    name: "modal",
    components: {
        Slider,
    },
    props: ["project"],
    data() {
      return {
        el: null,
        newPosX: 0,
        newPosY: 0,
        startPosX: 0,
        startPosY: 0
      }
    },
    mounted() {
      console.log(this.$refs.el);

        // when the user clicks down on the element
        this.$refs.el.addEventListener("mousedown", (e) => {
            e.preventDefault();

            // get the starting position of the cursor
            this.startPosX = e.clientX;
            this.startPosY = e.clientY;

            document.addEventListener("mousemove", this.mouseMove );

            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", this.mouseMove );
            });
        });
    },
    methods: {
        close() {
            this.$emit("close");
        },
        requireImg(img) {
            return require(`@/assets/projects/${img}`);
        },
        mouseMove(e) {
    // calculate the new position
    this.newPosX = this.startPosX - e.clientX;
    this.newPosY = this.startPosY - e.clientY;

    // with each move we also want to update the start X and Y
    this.startPosX = e.clientX;
    this.startPosY = e.clientY;
    
    // set the element's new position:
    this.$refs.el.style.top = (this.$refs.el.offsetTop - this.newPosY) + "px";
    this.$refs.el.style.left = (this.$refs.el.offsetLeft - this.newPosX) + "px";
}
    },
};
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    background-color: rgba(0, 0, 0, 0.55);

    .modal-content {
        cursor: move;
        min-width: 400px;
        min-height: 300px;
        background-color: #fff;
        border-radius: 4px;
        padding: 40px 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: grid;
        // grid-template-columns: 3fr 2fr;

        img {
            width: 100%;
            max-width: 600px;
            box-shadow: 2px 2px 8px #333;
            border-radius: 4px;
        }

        .modal-info {
            padding: 0 5px;
            padding-top: 20px;
            cursor: default;

            h1 {
                font-weight: bold;
                color: black;
                font-size: 24px;
                font-family: "Itim", sans-serif;
                margin-bottom: 10px;
            }

            .all-info {
                display: grid;
                grid-template-columns: minmax(50%, auto) 1fr;
                align-items: center;
                column-gap: 5px;
            }
        }
    }
}
</style>