import React from 'react'
import { createBrowserRouter, Link, redirect } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Karyawan from '../pages/Karyawan'
import Operator from '../pages/Operator'
import Jabatan from '../pages/Jabatan'
import Department from '../pages/Department'
import AddEditKaryawan from '../pages/AddEditKaryawan'
import AddEditOperator from '../pages/AddEditOperator'
import AddJabatan from '../pages/AddJabatan'
import AddDepartment from '../pages/AddDepartment'


const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            { path: '/', element: <Login /> },
            {
                path: '/home', element:
                    <Home />
            },
            {
                path: '/karyawan',
                element: <Karyawan />,
            },
            {
                path: '/operator',
                element: <Operator />,
            },
            {
                path: '/add-edit-operator/:id',
                element: <AddEditOperator />
            },
            {
                path: '/add-edit-karyawan',
                element: <AddEditKaryawan />
            },
            {
                path: '/add-edit-karyawan/:id',
                element: <AddEditKaryawan />
            },
            { path: '/jabatan', element: <Jabatan /> },
            { path: '/add-jabatan', element: <AddJabatan /> },
            { path: '/department', element: <Department /> },
            { path: '/add-department', element: <AddDepartment /> },
            { path: '*', element: redirect('/404') },
        ],
    }
])

export default router