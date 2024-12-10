<template>
    <div class="container my-5 pt-4">
        <h1 class="text-center mt-5">Productos</h1>
        <div class="row">
            <div v-for="producto in productos" :key="producto.id" class="col-sm-4 col-12 px-5 mb-4">
                <div class="card shadow-sm">
                    <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" />
                    <div class="card-body d-flex flex-column">
                        <h2 class="card-title">{{ producto.nombre }}</h2>
                        <p class="card-text">{{ producto.descripcion }}</p>
                        <p class="card-text"><strong>Precio:</strong> ${{ producto.precio }}</p>
                        <p class="card-text"><strong>Cantidad:</strong> {{ producto.cantidad }}</p>
                        <router-link to="/" class="btn btn-primary mt-auto">Volver al inicio</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductosView',
    props: {
        productos: {
            type: Array,
            default: () => [],
        },
    },
    created() {
        console.log('Productos recibidos:', this.productos);
    },
};
</script>

<style scoped>
.card {
    max-width: 22rem;
    height: 450px;
    margin: 0 auto;
}
</style>
