<template>
    <form @submit.prevent="searchStore.getMovies(searchMovie)">
        <input type="text" class="search-input" placeholder="Input movie" v-model="searchMovie">
    </form>
    <div>
        <Movie v-for="movie in searchStore.movies" :key="movie.nameEn" :movie="movie" :isSearch="true"></Movie>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Movie from './Movie.vue'
import {useSearchStore} from '../stores/SearchStore';
const searchMovie = ref('')
const searchStore = useSearchStore();
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>