import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import bebidas from '@/assets/img/bebidas.jpg';
import colaciones from '@/assets/img/colaciones.jpg';
import desayunos from '@/assets/img/desayunos.jpg';
import dulces from '@/assets/img/dulces.jpg';
import empanadas from '@/assets/img/empanadas.jpg';
import ensaladas from '@/assets/img/verduras.jpg';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/productos',
        name: 'productos',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue'),
        props: () => ({
            productos: [
                {
                    id: 1,
                    nombre: 'Bebidas',
                    descripcion: 'Bebidas de todo tipo, tamaño familiar',
                    precio: 1500,
                    cantidad: 'Para tres personas',
                    imagen: bebidas,
                },
                {
                    id: 2,
                    nombre: 'Colaciones',
                    descripcion: 'Colaciones de todo tipo',
                    precio: 4500,
                    cantidad: 'Para una persona',
                    imagen: colaciones,
                },
                {
                    id: 3,
                    nombre: 'Desayunos',
                    descripcion: 'Desayunos nutritivos y deliciosos',
                    precio: 2000,
                    cantidad: 'Para dos personas',
                    imagen: desayunos,
                },
                {
                    id: 4,
                    nombre: 'Dulces',
                    descripcion: 'Dulces de todo tipo',
                    precio: 2000,
                    cantidad: 'Para una persona',
                    imagen: dulces,
                },
                {
                    id: 5,
                    nombre: 'Empanadas',
                    descripcion: 'Jugosas empanadas para disfrutar',
                    precio: 2200,
                    cantidad: 'Para una persona',
                    imagen: empanadas,
                },
                {
                    id: 6,
                    nombre: 'Ensaladas',
                    descripcion: 'Ensaladas frescas y deliciosas',
                    precio: 2500,
                    cantidad: 'Para una persona',
                    imagen: ensaladas,
                },
            ],
        }),
    },
    {
        path: '/contacto',
        name: 'contacto',
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
