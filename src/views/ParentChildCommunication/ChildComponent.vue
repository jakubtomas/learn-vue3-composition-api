<template>
  <div>
    <div class="card text-center">
      <div class="card-header">{{ cardTitle }} s</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    //  HelloWorld,
  },

  props: {
    cardTitle: String,
  },
  setup(props) {
    console.log(props.title);
  },
};
</script>
