<script setup>
import moment from 'moment'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter title" />
      <small id="emailHelp" class="form-text text-muted">This must not be empty.</small>
    </div>
    <div class="form-group mt-3">
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
    </div>
    <div class="d-flex justify-content-between mx-2 mt-3">
      <p class="text-muted">Last updated {{ moment(Date.now()).fromNow() }}</p>
      <p class="text-muted">{{ 353 }} Words</p>
    </div>
    <hr class="my-0" />
    <div class="d-flex justify-content-end mt-3">
      <button type="button" class="btn btn-outline-secondary mr-2">DELETE NOTE</button>
      <button type="button" class="btn btn-outline-success">SAVE CHANGES</button>
    </div>
  </div>
</template>
