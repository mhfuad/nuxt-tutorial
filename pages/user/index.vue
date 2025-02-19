<script setup>
    const userStore = useUserStore();
    const router = useRouter();
    const route = useRoute();

    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalUsers = ref(0);
    const pageSize = ref(20);

    // Fetch users with pagination
    const fetchUsers = async (page = 1) => {
        try {
            await userStore.getUsers(page);
            
            // Extract pagination details from response
            currentPage.value = userStore.users.page.number + 1;
            totalPages.value = userStore.users.page.totalPages;
            totalUsers.value = userStore.users.page.totalElements;
            pageSize.value = userStore.users.page.size;
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Delete User
    const deleteUser = async (user_id) => {
        try {
            await userStore.deleteUser(user_id);
            fetchUsers(currentPage.value);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    // Handle page change
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages.value) {
            router.push({ query: { page } });
            fetchUsers(page);
        }
    };

    onMounted( async ()=>{
        const page = parseInt(route.query.page) || 1;
        await fetchUsers(page);
    } ) 
</script>

<template>
    <div>
        <!-- Page Title -->
        <div class="pagetitle d-flex align-items-center">
            <div>
                <h1>Users</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="breadcrumb-item active">User</li>
                    </ol>
                </nav>
            </div>
            <NuxtLink to="user/create" class="btn btn-primary ms-auto d-flex align-items-center">
                <IconsPlus /> Create
            </NuxtLink>
        </div>
        <!-- End Page Title -->

        <!-- Section -->
        <section class="section contact">
            
            <div class="row gy-2">
                <div v-for="user in userStore.users._embedded?.userList" :key="user.id" class="col-lg-6">
                    <div class="info-box card position-relative">
                        <!-- Delete Button -->
                        <button @click="deleteUser(user.id)" class="btn btn-danger delete-btn position-absolute">
                            <IconsTrash /> Delete 
                        </button>
                        
                        <i class="bi bi-geo-alt"></i>
                        <h3>{{ user.firstName+" "+user.lastName }}</h3>
                        <p>{{ user.phoneNumber }}</p>
                    </div>
                </div>
            </div>
            <!-- Pagination -->
            <nav aria-label="User pagination">
                <ul class="pagination justify-content-center mt-4">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="goToPage(1)">First</button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button class="page-link" @click="goToPage(currentPage - 1)">Prev</button>
                </li>

                <!-- Page Numbers -->
                <li
                    v-for="page in totalPages"
                    :key="page"
                    class="page-item"
                    :class="{ active: page === currentPage }"
                >
                    <button class="page-link" @click="goToPage(page)">{{ page }}</button>
                </li>

                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="goToPage(currentPage + 1)">Next</button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="goToPage(totalPages)">Last</button>
                </li>
                </ul>
            </nav>
            <p class="text-center mt-2">
                Showing page {{ currentPage }} of {{ totalPages }} (Total Users: {{ totalUsers }})
            </p>
        </section>
    </div>
</template>



<style scoped>
    /* Positioning the delete button */
    .delete-btn {
        top: 10px;
        right: 10px;
        z-index: 1; /* Ensure it is above other elements */
    }
    .info-box {
        position: relative; /* Ensures positioning for the delete button */
    }
</style>


