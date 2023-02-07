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
    <h1>Star Wars API</h1>
    <table>
      <thead>
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

<style scoped></style>
