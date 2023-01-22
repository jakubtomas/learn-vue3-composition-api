<template>
  <div>
    <h3>
      Sending data from parent to child , using props, ref values in parent
    </h3>

    <div class="container">
      <div class="row">
        <div class="col-4 border">
          <CardComponent
            :cardTitle="cardTitle"
            cardText="BMW x5 is good car"
            cardFooter="BMW x5 Footer text mock text"
          />
        </div>
        <div class="col-4 border">
          <CardComponent
            :cardTitle="cardTitle"
            cardText="BMW x5 is good car"
            cardFooter="BMW x5 Footer text mock text"
          />
        </div>
      </div>
      <!-- next row -->
      <div class="row">
        <div class="col-12">
          <pre></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from "@/views/ParentChildCommunication/ChildComponent.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    CardComponent,
    //  HelloWorld,
  },
  setup() {
    const cardTitle = ref("Bmw id good card");

    return {
      cardTitle,
    };
  },
};
</script>

<style scoped>
.border {
  border: 1px solid green;
}
</style>
