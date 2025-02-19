<script setup>
  const isSidebarVisible = ref(true);
</script>
<template>
    <div>
      <!-- ======= Header ======= -->
      <DashboardHeader @toggle-sidebar="isSidebarVisible = $event" />
      <!-- End Header -->

      <!-- ======= Sidebar ======= -->
      <DashboardSidebar :isSidebarVisible="isSidebarVisible" />
      <!-- End Sidebar-->

      <!-- =========== main ======== -->
      <main id="main" class="main">

        <slot />
        <DashboardBackToTop />
      </main>
      <!-- End #main -->

      <!-- ======= Footer ======= -->
      <DashboardFooter />
      <!-- End Footer -->
    </div>
</template>
