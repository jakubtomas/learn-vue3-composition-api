<template>
  <h1>filter list by input</h1>
  <div>
    <input v-model="inputValue" placeholder="Search" />
    <p>INput is :{{ inputValue }}</p>

    <div class="col-4">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(person, index) in filteredList"
          :key="index"
        >
          {{ person.id }} {{ person.name }} {{ person.age }}
          {{ person.city }}
        </li>
      </ul>
    </div>
    <ul></ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const list = ref([
      { id: 1, name: "Harry Potter" },
      { id: 2, name: "janko", age: 45, city: "Bratislava" },
      { id: 3, name: "adam", age: 20, city: "Košice" },
      { id: 4, name: "Peter", age: 55, city: "Trnava" },
      { id: 5, name: "Janka", age: 66, city: "Trnava" },
      { name: "Janka", age: 19, city: "Trnava", id: 6 },
    ]);
    const inputValue = ref("");

    // const filteredList = computed(() => {
    //   return list.value.filter((item) =>
    //     Object.values(item).some((val) =>
    //       val.toString().toLowerCase().includes(inputValue.value.toLowerCase())
    //     )
    //   );
    // });

    // is working but deleting ID
    // const filteredList = computed(() => {
    //   return list.value.filter((item) => {
    //     if ("id" in item) {
    //       delete item.id;
    //     }
    //     return Object.values(item).some((val) =>
    //       val.toString().toLowerCase().includes(inputValue.value.toLowerCase())
    //     );
    //   });
    // });

    //this code is okey WHO CARE ABOUT COMPARE id
    // is working but using also ID
    const filteredList = computed(() => {
      return list.value.filter((item) => {
        const values = Object.values(item);
        values.shift();
        return values.some((val) =>
          val.toString().toLowerCase().includes(inputValue.value.toLowerCase())
        );
      });
    });

    // const filteredList = computed(() => {
    //   return list.value.filter((item) =>
    //     Object.values(item).some((val) =>
    //       val.toString().toLowerCase().includes(inputValue.value.toLowerCase())
    //     )
    //   );
    // });

    // const filteredList = computed(() => {
    //   return list.value.filter((item) => item.name.includes(inputValue.value));
    // });

    return {
      list,
      filteredList,
      inputValue,
    };
  },
};
</script>
