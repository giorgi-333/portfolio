<template lang="pug">
div
    h1
        | My skills
    .container
        .tabs
            .btn(
                v-for="item in tabs",
                :class="{ active: item === tab }",
                @click="selectTab(item)"
            )
                | {{ item }}
        .contents
            .content(
                v-for="content in contents",
                :class="{ active: tab === content.key }"
            )
                .skills-images
                    div(v-for="item in content.list")
                        img(:src="requireImg(item.img)")
                        span {{ item.text }}
</template>

<script>
export default {
    name: "skills",
    data() {
        return {
            tabs: ["Proficient", "Competent", "Beginner"],
            tab: "Proficient",
            contents: [
                {
                    key: "Proficient",
                    list: [
                        {
                            img: "html-5.png",
                            text: "HTML & Pug",
                        },
                        {
                            img: "css.png",
                            text: "CSS & Sass",
                        },
                        {
                            img: "js.png",
                            text: "Javascript",
                        },
                        {
                            img: "jquery.png",
                            text: "Jquery",
                        },
                        {
                            img: "bootstrap.svg",
                            text: "Bootstrap",
                        },
                        {
                            img: "vue.png",
                            text: "Vue & Nuxt",
                        },
                        {
                            img: "vuetify.svg",
                            text: "Vuetify",
                        },
                        {
                            img: "git.png",
                            text: "git",
                        },
                        {
                            img: "wordpress.png",
                            text: "Wordpress",
                        },
                    ],
                },
                {
                    key: "Competent",
                    list: [
                        {
                            img: "php.png",
                            text: "PHP & MySQL",
                        },
                        {
                            img: "laravel.svg",
                            text: "Laravel",
                        },
                        {
                            img: "react.png",
                            text: "React",
                        },
                    ],
                },
                {
                    key: "Beginner",
                    list: [
                        {
                            img: "c-plus.png",
                            text: "C++",
                        },
                        {
                            img: "c-sharp.png",
                            text: "C#",
                        },
                        {
                            img: "react.png",
                            text: "React Native",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        selectTab(tab) {
            this.tab = tab;
        },
        requireImg(img) {
            return require(`@/assets/icons/${img}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 130px auto;
    font-family: "Nunito", sans-serif;

    @media (max-width: 768px) {
        grid-template-columns: auto;
    }

    .tabs {
        @media (max-width: 768px) {
            display: flex;
            margin-bottom: 10px;
        }

        .btn {
            cursor: pointer;
            margin: 5px 0;
            padding: 5px 20px;
            border-radius: 6px;

            @media (max-width: 480px) {
              padding: 5px 10px;
            }

            &.active {
                background-color: #c0e3e7;
                color: #003273;
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
            animation: showMe 0.8s forwards;
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

            @media (max-width: 480px) {
                grid-template-columns: repeat(2, auto);
                justify-content: space-between;
                gap: 8px;
                padding: 0 12px;
            }

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
