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
  <v-app></v-app>
  <div class="container">
    <h1>Star Wars API</h1>
    <table>
      <thead>
        <th>Picture</th>
        <th>Name</th>
      </thead>
      <tbody>
        <tr v-for="(people, index) in data" :key="index">
          <td>{{ people.name }}</td>
          <td>{{ people.birth_year }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.name }}</td>
          <td>{{ people.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
