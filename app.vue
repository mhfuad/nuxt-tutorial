<script setup>

  const authStore = useAuthStore();
  if (process.client) {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const user = localStorage.getItem("user");
      const tokenExpire = localStorage.getItem("tokenExpire")

      console.log("token expire: "+tokenExpire)

      if (!accessToken || !refreshToken || !user || !tokenExpire) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("user")
        localStorage.removeItem("tokenExpire")
        
        await navigateTo('/login')
      } else {
        authStore.accessToken = accessToken;
        authStore.refreshToken = refreshToken;
        authStore.user = JSON.parse(user);
        authStore.tokenExpire = tokenExpire
      }
  }
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

