<template lang="pug">
.contact
    h1 Contact
    .links
        a(href="https://github.com/giorgi-333", target="_blank")
            img(src="@/assets/icons/github.svg")
        a(href="https://www.fiverr.com/giorgi33", target="_blank")
            img(src="@/assets/icons/fiver.png")
        a(
            href="https://www.upwork.com/freelancers/~013470838569f6afc0",
            target="_blank"
        )
            img(src="@/assets/icons/upwork.png")
        a(
            href="https://www.linkedin.com/in/giorgi-enuqidze-610942248/",
            target="_blank"
        )
            img(src="@/assets/icons/linkedin.png")
</template>

<script>
export default {
    name: "contact",
};
</script>

<style lang="scss" scoped>
.links {
    padding-top: 20px;

    a {
        display: inline-block;
        margin-right: 10px;

        img {
            width: 50px;
            transition: 0.4s;
            border-radius: 50%;

            &:hover {
                transform: translateY(-10px);
            }
        }
    }
}
</style>