import Vue from 'vue'
import VueRouter from 'vue-router'

// mengaktifkan vue router
Vue.use(VueRouter);

import dashboard from '../pages/dashboard.vue'
// kelas
import index_kelas from '../pages/kelas/index.vue'
import create_kelas from '../pages/kelas/create.vue'
import edit_kelas from '../pages/kelas/edit.vue'
// siswa
import index_siswa from '../pages/siswa/index.vue'
import create_siswa from '../pages/siswa/create.vue'
import edit_siswa from '../pages/siswa/edit.vue'

// users
import index_tuser from '../pages/tuser/index.vue'
import create_tuser from '../pages/tuser/create.vue'
import edit_tuser from '../pages/tuser/edit.vue'

const routes = [

    {
        name: 'siswa',
        path: '/siswa',
        meta: 'Siswa',
        component: index_siswa,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta //sebelum masuk ubah title + meta di route
            next() // lanjutkan
        },
    },
    {
        name: 'create_siswa',
        path: '/siswa/create',
        meta: 'Tambah Siswa',
        component: create_siswa,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'edit_siswa',
        path: '/siswa/:id',
        meta: 'Edit Siswa',
        component: edit_siswa,
        props: true,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'kelas',
        path: '/kelas',
        meta: 'Kelas',
        component: index_kelas,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'create_kelas',
        path: '/kelas/create',
        meta: 'Tambah Kelas',
        component: create_kelas,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'edit_kelas',
        path: '/kelas/:id',
        meta: 'Edit Kelas',
        component: edit_kelas,
        props: true,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'tuser',
        path: '/tuser',
        meta: 'TUsers',
        component: index_tuser,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'create_tuser',
        path: '/tuser/create',
        meta: 'Create TUser',
        component: create_tuser,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'edit_tuser',
        path: '/tuser/:id',
        meta: 'Edit TUser',
        component: edit_tuser,
        props: true,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        },
    },
    {
        name: 'dashboard',
        path: '*',
        meta: 'TUsers',
        component: index_tuser,
        beforeEnter: (to, from, next) => {
            document.title = "Voler - " + to.meta
            next()
        }
    },
]

const router = new VueRouter({
    LinkaAtiveClass: 'active',
    mode: 'history',
    routes
})


export default router
