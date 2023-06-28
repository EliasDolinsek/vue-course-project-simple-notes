<script setup>
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <TheNavbar />
  <!--TODO: 1. Ersete div durch router-view-->
  <div class="todo-box">Insert Router View</div>
</template>

<style>
.todo-box {
  background-color: green;
  text-align: center;
  color: white;
  font-weight: 500;
  height: 100%;
  width: 100%;
}
</style>