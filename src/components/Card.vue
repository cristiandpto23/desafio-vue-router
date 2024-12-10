<template>
    <!-- cartas -->
    <section class="container" id="productos">
        <h1 class="text-center">Nuestros Productos</h1>
        <div class="row">
            <!-- primera -->
            <div v-for="producto in productos" :key="producto.id" class="col-sm-4 col-12 px-5 mb-4">
                <div class="card">
                    <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
                        <p class="card-text">{{ producto.descripcion }}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{ producto.subdescripcionUno }}</li>
                        <li class="list-group-item">{{ producto.subdescripcionDos }}</li>
                    </ul>
                    <div class="card-body">
                        <router-link :to="{ name: 'productos' }" class="card-link">Ver más</router-link>
                        <a href="#" class="card-link">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        productos: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style></style>
