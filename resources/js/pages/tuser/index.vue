<template>
    <div class="card">
        <div class="card-body">
            <!-- button atas -->
            <template>
                <v-toolbar flat>
                    <v-toolbar-title>TUsers</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click.prevent="registerRoute()" dark class="mb-2">
                        Create TUser
                    </v-btn>
                    <v-btn color="primary" @click.prevent="csvExport(csvData)" dark class="mb-2 ml-4">
                        Export CSV
                    </v-btn>
                </v-toolbar>

            </template>
            <!-- end button atas -->
            <!-- header -->
            <!-- <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-card-title> -->
            <!-- end header -->
            <!-- table -->
            <!-- data table yang ini jadi make v-data-table jangan lupa iimport nya di app -->
            <!-- :header untuk header , : items untuk data , :search untuk search dan perpage untuk pagination -->
            <v-data-table :headers="headers" :items="data" :items-per-page="5" class="elevation-2">
                <!-- header table -->

                <!--  action icon di json nya -->
                <template v-slot:item.action="{ item }">
                    <!-- icon menggunaka  v icon -->
                    <v-icon @click="editItem(item)">mdi-pencil</v-icon>
                    <v-icon color="error" @click="deleteItem(item)"> mdi-delete</v-icon>
                </template>
                <!-- end -->
            </v-data-table>
        </div>

    </div>

</template>


<script>
    export default {
        data() {
            return {
                headers: [{
                        text: 'Gender', 
                        value: 'gender' 
                    },
                    {
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        text: 'Location',
                        value: 'location' 
                    },
                    {
                        text: 'eMail',
                        value: 'email' 
                    },
                    {
                        text: 'Phone Number',
                        value: 'phone'
                    },
                    {
                        text: 'Picture',
                        value: 'picture'
                    },
                    {
                        text: 'Actions',
                        value: 'action',
                        sortable: false,
                        align: 'center'
                    },
                ],
                data: [], // isi data yang ada du databse
                search: '',
                modelDelete: false
            }
        },
        computed: {
            csvData() {
                return this.data.map(item => ({
                    ...item,
                }));
            }
        },
        methods: {
            GetData() {
                axios.get('/api/tuser').then((response) => {
                    this.data = response.data
                    console.log(response.data); // data
                }).catch((err) => {
                    console.log(err);
                })
            },
            registerRoute() {
                this.$router.push('/tuser/create')
            },
            deleteItem(item) {
                // item = collection or {}
                console.log(item.id);
                Swal.fire({
                    title: 'Really delete ?',
                    // text: "Jika sudah di hapus anda tidak bisa mengembalikanya!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete('/api/tuser/' + item.id).then((response) => {
                            //  item = collection 
                            // idx ini buat hapus tanpa reload jadi data nya di hapus make splice
                            const idx = this.data.indexOf(item)
                            this.data.splice(idx, 1)

                            Swal.fire(
                                'Deleted!',
                                'data has been deleted.',
                                'success'
                            )
                        })

                    }
                })

            },
            editItem(item) {
                this.$router.push('/tuser/' + item.id);
            },
            csvExport(arrData) {
                let csvContent = "data:text/csv;charset=utf-8,";
                csvContent += [
                    Object.keys(arrData[0]).join(";"),
                    ...arrData.map(item => Object.values(item).join(";"))
                ]
                    .join("\n")
                    .replace(/(^\[)|(\]$)/gm, "");

                const data = encodeURI(csvContent);
                const link = document.createElement("a");
                link.setAttribute("href", data);
                link.setAttribute("download", "export.csv");
                link.click();
            }
        },

        mounted() {
            // this.Table(),
            this.GetData()
        },
    }

</script>
