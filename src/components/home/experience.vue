<template lang="pug">
.experience
  h1 Work experience
  .exp-cont
      .date 2022 - Present
      .exp-text
        h2 Front-end developer
        div Your brand is the core of your marketing, the central theme around your products and services. Your brand is not your Logo or your Company Name
      .date 2021 - Present
      .exp-text
        h2 Collage teacher
        div Collage theme around your products and services. products and services. Your brand is not your Logo or your Company Name r products and services. Your brand is not your Logo or your Company Name
      .date 2021 - 2022
      .exp-text
        h2 Front-end developer
        div Your brand is the core of your marketing, the central theme around your products and services. Your brand is not your Logo or your Company Name
</template>

<script>
export default {
  name: "experience"
}
</script>

<style lang="scss" scoped>
.exp-cont {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 160px auto;
  column-gap: 40px;

  .date {
    position: relative;
    background-color: #c0e3e7;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;

    &::after {
      border-color: #c0e3e7 !important;
      content: "";
      top: 0;
      left: 100%;
      width: 0;
      height: 0;
      position: absolute;
      border-top: 15.2px solid transparent !important;
      border-bottom: 15.2px solid transparent !important;
      border-right: 10px solid transparent !important;
      border-left: 10px solid transparent;
    }
  }

  .exp-text {
    padding-bottom: 30px;
    position: relative;


    &::before {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      top: 15px;
      left: -20px;
      background-color: #c0e3e7;
    }

    &:last-child::before {
      background-color: unset !important;
    }

    &::after {
      content: '';
      width: 4px;
      height: 4px;
      position: absolute;
      top: 14px;
      left: -21.5px;
      background-color: black;
      border-radius: 50%;
    }

    h2 {
      margin-bottom: 10px;
      color: black;
      font-weight: bold;
      font-size: 20px;
    }

    div {
      max-width: 450px;
      font-size: 16px;
    }

  }
}
</style>