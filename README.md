# Desafío Vue - Router

💡 Realizado [cristiandpto23](https://github.com/cristiandpto23) con HTML y JS<br>
➡ Front-End G17 - Desafío Latam<br>
🔗 Desplegado en Vercel [aquí](https://desafio-vue-router-sigma.vercel.app/)<br>

En este desafío validaremos nuestros conocimientos de Vue Router, implementando la navegación de una interfaz web utilizando Vue Router para dar solución a un requerimiento.

## Descripción

Aplicando los conocimientos adquiridos hasta el momento, te solicitamos realizar el siguiente desafío que consiste en hacer funcionar un menú de navegación de una interfaz web utilizando Vue Router para dar solución a una problemática.

### Indicaciones generales.

1. Usa el código base original para la solución.
2. Descárgalo, abre la carpeta con el editor de código y corre el comando npm install.
3. Aplica el uso de Vue Router para **hacer funcionar únicamente la barra de navegación**.
4. Crear las vistas correspondientes a los ítems que posee la barra de navegación.

Para lograrlo nos entregan una vista parcial del código base:

<div align="center"><img src="./src/assets/img/image.png"></div>

A partir de estas indicaciones generales, deberás tomar en cuenta que el código base ya posee una estructura distribuida de la siguiente manera:

-   Existe componente para el Navbar, otro para Card, Footer y Medios de pago.
-   Todo está distribuido en componentes en el código base.

## Requerimientos

1. Modificar el código del menú de navegación en sus ítems e integrar el <router-link>.
2. Generar las rutas que se requieran según los ítems ya establecidos en el menú de navegación. Estas rutas van a cargar los componentes a través de carga controlada o lazy load.
3. Generar las vistas en su respectivo directorio para que las rutas definidas tengan funcionalidad y muestren información.
4. En la vista Productos y Contacto deberá haber un enlace de redirección al inicio del sitio.
5. En la vista de Produtos.vue se recibirán props enviados desde la definición de la ruta logrando la siguiente visualización:

<div align="center"><img src="./src/assets/img/image-1.png"></div>

Nota: las props a enviar pueden ser nombre, descripción, precio y cantidad.

## Tecnologías usadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![VueJS](https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

-   _incluye Vue-Router_
