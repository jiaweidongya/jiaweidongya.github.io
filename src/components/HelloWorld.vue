<script setup>
import { onMounted, ref } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(true);
});
const themsList = ref([
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
]);
</script>

<template>
  <div>
    <button class="btn">Button</button>
    <button class="btn btn-primary">Button</button>
    <button class="btn btn-secondary">Button</button>
    <button class="btn btn-accent">Button</button>
    <button class="btn btn-ghost">Button</button>
    <button class="btn btn-link">Button</button>
    <select data-choose-theme>
      <option v-for="items in themsList" :key="items" :value="items">
        {{ items }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
