<template>
  <div class="plant-badge">
    <b-badge href="#" :variant="variant" class="w-100 p-3">
      <div class="d-flex">
        <span class="mr-3">
          {{ name }}
        </span>
        <span v-for="(item, index) in icons" :key="index">
          <i :class="[item, 'mr-2']"></i>
        </span>
      </div>
    </b-badge>
  </div>
</template>

<script>
export default {
  name: "PlantBadge",
  props: {
    name: {
      type: String,
      required: true,
    },
    icons: {
      type: Array,
      default: function () {
        return [];
      },
    },
    variant: {
      type: String,
      default: "success",
    },
  },
};
</script>

<style>
</style>