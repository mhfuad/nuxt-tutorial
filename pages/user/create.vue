<template>
    <div>
        <!-- Page Title -->
        <div class="pagetitle d-flex align-items-center">
            <div>
                <h1>Users</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li class="breadcrumb-item active">User Create</li>
                    </ol>
                </nav>
            </div>
            <NuxtLink to="/user" class="btn btn-primary ms-auto d-flex align-items-center">
                <IconsUserGroup /> User List
            </NuxtLink>
        </div>
        <!-- End Page Title -->

        <section class="section">
            <div class="row">
                <div class="col-lg-6">

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">User Form</h5>

                            <form @submit.prevent="submitForm">
                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-2 col-form-label">Name</label>
                                    <div class="col-sm-10">
                                        <input name="name" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Age</label>
                                    <div class="col-sm-10">
                                        <input name="age" type="number" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputNumber" class="col-sm-2 col-form-label">Marital Status</label>
                                    <div class="col-sm-10">
                                        <select name="marital_status" class="form-select" aria-label="Default select example">
                                            <option selected="">Select menu</option>
                                            <option value="1">Marrid</option>
                                            <option value="2">Unmarrid</option>
                                            <option value="3">Divorced</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputNumber" class="col-sm-2 col-form-label">Present Address</label>
                                    <div class="col-sm-10">
                                        <textarea name="present_address" class="form-control" style="height: 100px"></textarea>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputDate" class="col-sm-2 col-form-label">Phone Numbeer</label>
                                    <div class="col-sm-10">
                                        <input name="number" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputTime" class="col-sm-2 col-form-label">Owener of this Phone number</label>
                                    <div class="col-sm-10">
                                        <input name="owener_of_number" type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputColor" class="col-sm-2 col-form-label">NID</label>
                                    <div class="col-sm-10">
                                        <input name="owener_of_number" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Date of Birth</label>
                                    <div class="col-sm-10">
                                        <input name="date_of_birth" type="date" class="form-control">
                                    </div>
                                </div>
                                <fieldset class="row mb-3">
                                    <legend class="col-form-label col-sm-2 pt-0">Physical Condition</legend>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" >
                                            <label class="form-check-label" for="gridRadios1">
                                                Sceny
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                            <label class="form-check-label" for="gridRadios2">
                                                Healthy
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>

                                <div class="row mb-3">
                                    <label for="inputTime" class="col-sm-2 col-form-label">Height</label>
                                    <div class="col-sm-10">
                                        <input name="height" type="text" class="form-control">
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Screen Color</label>
                                    <div class="col-sm-10">
                                        <select class="form-select" aria-label="Default select example">
                                        <option selected="">Select menu</option>
                                        <option value="1">Black</option>
                                        <option value="2">White</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputEmail" class="col-sm-2 col-form-label">Age</label>
                                    <div class="col-sm-10">
                                        <input name="age" type="number" class="form-control">
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Submit Button</label>
                                    <div class="col-sm-10">
                                        <button type="submit" class="btn btn-primary">Submit Form</button>
                                    </div>
                                </div>

                            </form>
                            <!-- End General Form Elements -->

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const formData = ref({
        name: '',
        age: null,
        marital_status: '',
        present_address: '',
        number: '',
        owner_of_number: '',
        nid: '',
        date_of_birth: '',
        physical_condition: '',
        height: '',
        screen_color: '',
    })

    const submitForm = async () => {
        try {
            const response = await $fetch('https://64a3ffc3c3b509573b56e5f8.mockapi.io/api/v1/users', {
                method: 'POST',
                body: formData.value,
            });
            console.log('Form submitted successfully:', response);
            // Reset the form
            formData.value = {
                name: '',
                age: null,
                marital_status: '',
                present_address: '',
                number: '',
                owner_of_number: '',
                nid: '',
                date_of_birth: '',
                physical_condition: '',
                height: '',
                screen_color: '',
            };
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
</script>