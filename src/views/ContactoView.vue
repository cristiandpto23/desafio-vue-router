<template>
    <div class="container my-5 pt-4">
        <h1 class="text-center mt-5">Contáctanos</h1>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" v-model="form.nombre" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="form.email" required />
                            </div>
                            <div class="mb-3">
                                <label for="mensaje" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="mensaje" v-model="form.mensaje" required></textarea>
                            </div>
                            <div class="d-flex justify-content-between">
                                <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
                                <button @click="enviar" type="submit" class="btn btn-success" :disabled="!isFormValid">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactoView',
    data() {
        return {
            form: {
                nombre: '',
                email: '',
                mensaje: '',
            },
        };
    },
    computed: {
        isFormValid() {
            return this.form.nombre.trim() !== '' && this.form.email.trim() !== '' && this.form.mensaje.trim() !== '';
        },
    },
    methods: {
        enviar() {
            if (this.isFormValid) {
                alert('Formulario enviado. Te contactaremos próximamente <3');
                this.form.nombre = '';
                this.form.email = '';
                this.form.mensaje = '';
            }
        },
    },
};
</script>

<style scoped>
.card {
    background-color: #fff;
}
</style>
