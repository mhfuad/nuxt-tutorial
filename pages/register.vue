<script setup>
    definePageMeta({
        layout: "auth"
    })

    const firstName = ref("")
    const lastName = ref("")
    const phoneNumber = ref("")
    const gender = ref(true)
    const username = ref("")
    const password = ref("")

    const loading = ref(false)

    const authStore = useAuthStore()

    const handleSubmit = async () => {
      loading.value = true;
      try{
        await authStore.register({
          firstName : firstName.value,
          lastName : lastName.value,
          phoneNumber : phoneNumber.value,
          gender: gender.value,
          username : username.value,
          password : password.value
        });
        await navigateTo('/')
      } catch (error) {
        errorMessage.value = "Invalid username or password!";
      } finally {
        loading.value = false;
      }
    }

    const handleGenderChange = (event) => {
      gender.value = event.target.value === 'true'; // Convert string to boolean
    };
</script>

<template>
    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="" class="logo d-flex align-items-center w-auto">
                  <!-- <img src="assets/img/logo.png" alt=""> -->
                  <span class="d-none d-lg-block">IMDB</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form @submit.prevent="handleSubmit" class="row g-3 needs-validation" novalidate>
                    <div class="col-12">
                      <label for="yourName" class="form-label">First Name</label>
                      <input type="text" v-model="firstName" class="form-control" id="yourName" required>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="lastName" class="form-label">Last Name</label>
                      <input type="text" v-model="lastName" class="form-control" id="lastName" required>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>
                    
                    <div class="col-12">
                      <label class="form-label">Gender</label>
                      <select class="form-select" @change="handleGenderChange" v-model="gender" aria-label="Default select example">
                          <option value="true">Male</option>
                          <option value="false">Female</option>
                      </select>
                    </div>

                    <div class="col-12">
                      <label for="phoneNumber" class="form-label">Phone Number</label>
                      <input type="text" v-model="phoneNumber" class="form-control" id="phoneNumber" required>
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" v-model="username" class="form-control" id="yourUsername" required>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" v-model="password" class="form-control" id="yourPassword" required>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>
                    
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Create Account</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? <NuxtLink to="login">Log in</NuxtLink></p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

    </section>
</template>