<template>
  <div class="plant-group-collapse">
    <b-button v-b-toggle="'collapse-2'" class="m-1 w-100">{{
      group.name
    }}</b-button>
    <b-collapse id="collapse-2" v-for="item in group.plants" :key="item.id">
      <PlantBadge
        :name="item.name"
        :icons="item.icons"
        :variant="item.variant"
      />
    </b-collapse>
  </div>
</template>

<script>
import PlantBadge from "./PlantBadge";

export default {
  name: "PlantGroupList",
  data() {
    return {
      visible: false,
    };
  },
  components: {
    PlantBadge,
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>