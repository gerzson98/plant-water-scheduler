<template>
  <b-card class="plant-card" no-body :img-src="imgSrc" img-alt="Image" img-top>
    <template #header>
      <b-card-title v-if="nickName">
        {{ nickName }}
      </b-card-title>
      <b-card-sub-title>{{ name }}</b-card-sub-title>
    </template>

    <b-card-body>
      <b-card-text>
        {{ description }}
      </b-card-text>
    </b-card-body>

    <b-card-footer v-for="(icon, index) in icons" :key="index">
      <i :class="[icon, 'mr-3']" />
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "PlantCard",
  data() {
    return {};
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
    icons: {
      type: Array,
      default: function () {
        return ["fas fa-tint"];
      },
    },
  },
};
</script>

<style>
</style>