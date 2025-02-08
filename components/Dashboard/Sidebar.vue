<script setup>

  onMounted(() => {
    // Utility function to select single or multiple elements
    const select = (selector, all = false) => {
      if (all) {
        return document.querySelectorAll(selector);
      }
      return document.querySelector(selector);
    };

    // Handle navbar links active state on scroll
    let navbarlinks = select("#sidebar-nav .nav-link", true);

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;

        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navbarlinksActive);
    window.addEventListener("scroll", navbarlinksActive);
  });
</script>
<template>
    <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <NuxtLink class="nav-link collapsed" to="/">
                    <i class="bi bi-grid"></i>
                    <span>Dashboard</span>
                </NuxtLink>
            </li>

            <li class="nav-item">
                <a class="nav-link collapsed" data-bs-target="#page-nav" data-bs-toggle="collapse" href="#">
                    <i class="bi bi-layout-text-window-reverse"></i><span>Pages</span><i class="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="page-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                    <li>
                      <NuxtLink to="/user" class="nav-link collapsed" >
                          <i class="bi bi-person"></i>
                          <span>User</span>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/event" class="nav-link collapsed" >
                          <i class="bi bi-person"></i>
                          <span>Event</span>
                      </NuxtLink>
                    </li>
                </ul>
            </li>

            <li class="nav-heading">Pages</li>
            <li class="nav-item">
                <NuxtLink to="/user" class="nav-link collapsed" >
                    <i class="bi bi-person"></i>
                    <span>User</span>
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/event" class="nav-link collapsed" >
                    <i class="bi bi-person"></i>
                    <span>Event</span>
                </NuxtLink>
            </li>
        </ul>
    </aside>
</template>