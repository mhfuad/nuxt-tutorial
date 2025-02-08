<script setup>
    const userStore = useUserStore();

    const deleteUser = async (user_id) => {
        try{
            await userStore.deleteUser(user_id);
        } catch (error){
            console.log()
        }
    }

    onMounted( async ()=>{
        await userStore.getUsers();
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
                <div v-for="user in userStore.users" :key="user.id" class="col-lg-6">
                    <div class="info-box card position-relative">
                        <!-- Delete Button -->
                        <button @click="deleteUser(user.id)" class="btn btn-danger delete-btn position-absolute">
                            <IconsTrash /> Delete 
                        </button>
                        
                        <i class="bi bi-geo-alt"></i>
                        <h3>{{ user.name }}</h3>
                        <p>A108 Adam Street,<br>New York, NY 535022</p>
                    </div>
                </div>
            </div>
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


