<template>
    <div class="card">
        <!-- <div class="card-header">
                            <h4 class="card-title">Basic Inputs</h4>
                        </div> -->

        <div class="card-body">
            <div class="row">

                <div class="col-md-12">
                    <form @submit.prevent="StoreForm()" action="/tuser" method="POST">
                        <div class="form-group">
                            <label for="basicInput">Gender</label>
                            <input type="text" class="form-control " id="basicInput" placeholder="Input gender"
                                v-model="form.gender" v-bind:class="{ 'is-invalid': err.gender }">
                            <div v-if="err.gender" class="invalid-feedback">
                                {{ err.gender[0]  }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="helpInputTop">Name</label>
                            <input type="text" class="form-control" id="helpInputTop" placeholder="Input name"
                                v-model="form.name" v-bind:class="{ 'is-invalid': err.name }">
                            <div v-if="err.name" class="invalid-feedback">
                                {{ err.name[0]  }}
                            </div>
                        </div>

                         <div class="form-group">
                            <label for="helperText">Location</label>
                            <input type="text" id="helperText" class="form-control" placeholder="Input location"
                                v-model="form.location" v-bind:class="{ 'is-invalid': err.location }">
                            <div v-if="err.location" class="invalid-feedback">
                                {{ err.location[0]  }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="helperText">EMail</label><br>
                            <input type="text" id="helperText" class="form-control" placeholder="Input email"
                                v-model="form.email" v-bind:class="{ 'is-invalid': err.email }">
                            <div v-if="err.email" class="invalid-feedback">
                                {{ err.email[0]  }}
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="helperText">Phone</label><br>
                            <input type="text" id="helperText" class="form-control" placeholder="Input phone number"
                                v-model="form.phone" v-bind:class="{ 'is-invalid': err.phone }">
                            <div v-if="err.phone" class="invalid-feedback">
                                {{ err.phone[0]  }}
                            </div>
                        </div>
                    
                        <router-link to="/tuser" class="btn btn-danger">Cancel</router-link>
                        <button type="submit" class="btn btn-success">Submit</button>

                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    gender: ' ',
                    name: ' ',
                    location: ' ',
                    email: ' ',
                    phone: ' ',
                },
                option: [],
                err: [],
                data: {}
            }
        },
        methods: {
            StoreForm() {
                axios.post('/api/tuser', this.form).then((response) => {
                    if (response.data.status) {
                        // console.log(response.data.message);
                        this.$noty.success(response.data.message);
                        this.$router.push({
                            name: 'tuser',
                        });
                    }
                }).catch((err) => {
                    // console.log(erorr.response.data.errors);
                    this.err = err.response.data.errors
                })
            }
        },
        mounted() {
        },
    }

</script>
