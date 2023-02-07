<script setup>
import axios from "axios";
import { ref } from "vue";

const data = ref();
const config = {
  method: "get",
  url: "https://swapi.dev/api/people",
  headers: {},
};

axios(config)
  .then(function (response) {
    data.value = response.data.results;
    console.log(data.value);
  })
  .catch(function (error) {
    console.log(error);
  });
</script>

<template>
  <div class="container">
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/header-starwars-mobile_07afc302.jpeg?region=0,0,640,400"
      alt=""
    />
    <h1>Star Wars API</h1>

    <table>
      <thead align="left">
        <th>Name</th>
        <th>Birth_year</th>
        <th>Gender</th>
        <th>Hair color</th>
        <th>Eye color</th>
      </thead>
      <tbody>
        <tr v-for="(people, index) in data" :key="index">
          <td>{{ people.name }}</td>

          <td>{{ people.birth_year }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.hair_color }}</td>
          <td>{{ people.eye_color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  margin-top: 20px;
  border: 1px solid black;
  width: 80%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
}
</style>
