<template>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>

<script setup>

  onMounted( () => {
    const select = (selector) => document.querySelector(selector);

    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };

      // Add scroll event listeners
      window.addEventListener("load", toggleBacktotop);
      window.addEventListener("scroll", toggleBacktotop); // Fixed `onscroll` usage
    }
  })
   
</script>
