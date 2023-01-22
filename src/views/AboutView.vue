<template>
  <div>playground vies</div>
  <div>
    <button class="btn btn-primary" @click="increaseCounter">
      Increase Counter
    </button>
    <button class="btn btn-primary" @click="increaseCounter2">
      Increase Counter2
    </button>
    <button class="btn btn-danger" @click="decreaseCounter">
      Decrease Counter
    </button>
    <p>Counter: {{ counter }}</p>

    <div class="card">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="username"
        />
      </div>
      <p>my username is {{ username }}</p>
    </div>

    h2
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import { ref } from "vue";

export default {
  //name: "HomeView",
  components: {
    //HelloWorld,
  },

  setup() {
    const counter = ref(0);
    const username = ref("");

    function increaseCounter() {
      counter.value++;
    }

    const increaseCounter2 = () => {
      counter.value++;
    };
    function decreaseCounter() {
      counter.value--;
    }

    return {
      username,
      counter,
      increaseCounter,
      increaseCounter2,
      decreaseCounter,
    };
  },
};
</script>
