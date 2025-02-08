<script setup>

  const authStore = useAuthStore();
  authStore.token = localStorage.getItem("token") || null;
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

