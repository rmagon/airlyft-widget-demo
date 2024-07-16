<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>HOME PAGE</h1>
  {{ route.path }}
</template>
