<template>
  <div class="plant-group-collapse">
    <b-button v-b-toggle="'collapse-2'" class="m-1 w-100">
      {{ group.name }}
    </b-button>
    <b-collapse id="collapse-2" v-for="item in group.plants" :key="item.id">
      <PlantCard
        :name="item.name"
        :data="item.data"
        :icons="item.icons"
        :imgSrc="item.imgSrc"
        :nickName="item.nickName"
        :description="item.description"
      />
    </b-collapse>
  </div>
</template>

<script>
import PlantCard from "./PlantCard";

export default {
  name: "PlantCardList",
  data() {
    return {
      visible: false,
    };
  },
  components: {
    PlantCard,
  },
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
};
</script>
