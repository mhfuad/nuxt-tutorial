<template>
    <div>
      <!-- ======= Header ======= -->
      <DashboardHeader />
      <!-- End Header -->

      <!-- ======= Sidebar ======= -->
      <DashboardSidebar />
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