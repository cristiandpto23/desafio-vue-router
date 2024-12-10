<template>
    <Card :productos="productos" />
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            productos: [
                {
                    id: 1,
                    nombre: 'Bebidas',
                    descripcion: 'Bebidas de todo tipo',
                    subdescripcionUno: 'Gasesosas, aguas, jugos',
                    subdescripcionDos: 'Para tres personas',
                    imagen: require('@/assets/img/bebidas.jpg'),
                },
                {
                    id: 2,
                    nombre: 'Comidas',
                    descripcion: 'Todo para satisfacer tu hambre',
                    subdescripcionUno: 'Desayunos, almuerzos, cenas',
                    subdescripcionDos: 'Porciones para una persona',
                    imagen: require('@/assets/img/colaciones.jpg'),
                },
                {
                    id: 3,
                    nombre: 'Postres',
                    descripcion: 'Dulces de todo tipo',
                    subdescripcionUno: 'Tortas, helados, galletas',
                    subdescripcionDos: 'Para uno o compartir',
                    imagen: require('@/assets/img/dulces.jpg'),
                },

                // ... más productos
            ],
        };
    },
};
</script>
