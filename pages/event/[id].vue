<script setup>
const route = useRoute();
console.log(route.params.id);
</script>

<template>
    <div>Event id :  {{$route.params.id}}</div>
</template>