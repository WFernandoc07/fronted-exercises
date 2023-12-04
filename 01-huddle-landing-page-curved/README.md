# Proyecto: huddle-landing-page

## Descripción
- Construcción de una "landing page" responsiva.
-


## Requerimientos


## Comensando   
1. Se debe tener instalado node.js y el gestor de librería npm.
2. [Instalar SASS](https://sass-lang.com/install/)
```bash
npm install -g sass
```                         
3. Ejecutar el comando para convertir de SASS a CSS.
```bash                     
sass sass/styles.scss css/styles.css
```                          
4. Ejecutar el comando que permite visualizar en tiempo real los cambios.
```bash                      
sass styles/sass/main.scss styles/css/main.css --watch
```
## Construido con
* HTML
* CSS
* SASS
* Desktop-first workflow

## Lecciones aprendidas
### Enfoques en el diseño y desarrollo de sitios web
#### Mobile First
Se inician por estructurar la información y las caraterísticas más importantes para dispositivos móviles, luego estas se irán adaptando para pantallas más grandes.
#### Desktop First
Se inician por estructurar la información y las características más importantes para dispositivos de escritorio, luego estas se irán adaptando para pantallas más pequeñas.

### Metodología BEM
* **Bloques:** Encapsula una entidad que tienes significado por si sola. Semánticamente son iguales, no hay precedencia ni jerarquian. Entidades holísticas sin representación DOM(como controladores o modelos) pueden ser bloques.
```scss
.block {color: #FFF;}
```
* **Elementos:** Partes de un bloque y no tienen significado independiente, un elemento se vincula semanticamente a su bloque.
```scss
.block__elem {color: #FFF;}
```
* **Modificadores:** Se usan para cambiar la apariencia, el comportamiento o el estado. El nombre se forma por el nombre del bloque o elemento más dos guiones.
```html
<div class="block block--mod">...</div>
<div class="block block--size-big block--shadow-yes">...</div>
```
* **Ejemplos:**
```css
.block {}
.block__elem1 {}
.block__elem2 {}
.block__elem3 {}
```
```html
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>
```
```html
<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'></div>
    </div>
    <div class='block__elem3'></div>
</div>
```

### Tamaño de pantallas
* 375px -> Pantallas xsm: (celulares)
* **576px -> pantallas sm (celulares)**
* 768px -> pantallas md (tablets y ceulares)
* 992px -> pantallas ld (Desktop)
* 1200px -> pantallas xl (Desktops, TVs)
* **1440px -> Pantallas xxl (Desktop, TVs)**

## Documentos recursos
* [Metodología BEM](https://getbem.com/)
* [css-color-filter-generator](https://angel-rs.github.io/css-color-filter-generator/)
* [colorhunt.co](https://colorhunt.co/)


## Autor