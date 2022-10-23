document.getElementById("header").innerHTML = `
<div>
            <div class="head" id="menu-big">
                <div>
                    <div class="icon col-2 col-m-2">
                        <a href="index.html"><img src="./imagenes/tree2.jpg" alt="icon"></a>
                        
                    </div>
                    <div class="col-8 col-m-8">
                        <h1 id="jar1">Jardineria</h1>
                    </div>
                    
                    
                </div>
                <div class="menugrid-bg col-12">
                    <div class="col-2 col-s-5 boton"><a href="index.html">Inicio</a></div>
                    <div class="col-2 col-s-5 boton"><a href="armarjardin.html">Tips Para Jardines</a></div>
                    <div class="col-2 col-s-5 boton"><a href="tienda.html">Tienda</a></div>
                    <div class="col-2 col-s-5 boton"><a href="contacto.html">Contacto</a></div>
                    <div class="col-2 col-s-5 boton"><a href="sobrenosotros.html">Sobre Nosotros</a></div>
                </div>
            </div>
            <div id="menu-drop">
                <div class="dropdown col-s-2">
                    <button class="dropbtn"><img src="./imagenes/tree3.jpg" width="100px" alt="tree2"></button>
                    <div class="dropdown-content">
                        <div class="menugrid">
                            <div class="item1"><a href="index.html">Home</a></div>
                            <div class="item2"><a href="armarjardin.html">Tips Para Jardines</a></div>
                            <div class="item3"><a href="tienda.html">Tienda</a></div>
                            <div class="item4"><a href="contacto.html">Contacto</a></div>
                            <div class="item5"><a href="sobrenosotros.html">Sobre Nosotros</a></div>
                            <div class="item6"><img src="./imagenes/root2.jpg" height="200px" alt="root"></div>
                        </div>
                    </div>
                </div>
                <div class="col-s-10">
                    <h1 id="jar2">Jardineria</h1>
                </div>
                <div class="head-s col-s-12"></div>
            </div>
        </div> 
`
document.getElementById("footer").innerHTML = `
<a target="_blank" href="https://www.facebook.com/"><img width="25px" src="./imagenes/facebook.png"
                alt="Facebook"></a>
        <a target="_blank" href="https://wa.me/+5491112345678?text=Hello,%20please%20send%20me%20info"> <img
                width="25px" src="./imagenes/whatsapp.png" alt="whatsapp"> </a>
        <a target="_blank" href="mailto:codojardines@plantas.com"><img width="25px"
                src="./imagenes/correo-electronico.png" alt="Mail"></a>
        <a target="_blank" href="https://www.instagram.com/"><img width="25px" src="./imagenes/instagram.png"
                alt="Instagram"></a>
        <p>Pagina creada para el TP </p>
`

app = new Vue({
    el: "#app",
    data: {
        productos: [
            {
                codigo: "1",
                nombre: "Dimorphoteca",
                imagen: "./imagenes/Plantadeexterior. Dimorphoteca.jpg",
                precio: "400",
                descripción: "",
            },
            {
                codigo: "2",
                nombre: "Aphelandra squarrosa",
                imagen: "imagenes/Plantadeinterior APHELANDRA SQUARROSA.jpg",
                precio: "500",
                descripción: "",
            },
            {
                codigo: "3",
                nombre: "Clotonpreta",
                imagen: "imagenes/Plantadeinterior.clotonpreta.jpg",
                precio: "600",
                descripción: "",
            },
            {
                codigo: "4",
                nombre: "Cretona",
                imagen: "imagenes/Plantadeinterior.cretona.jpg",
                precio: "1200",
                descripción: "",
            },
            {
                codigo: "5",
                nombre: "Estrella Federal",
                imagen: "imagenes/Plantadeinterior.estrellafederal.jpg",
                precio: "2500",
                descripción: "",
            },
            {
                codigo: "6",
                nombre: "Monstera deliciosa",
                imagen: "imagenes/Plantadeinterior.Monsteradeliciosa.jpg",
                precio: "600",
                descripción: "",
            },
            {
                codigo: "7",
                nombre: "Rhoeodiscolor",
                imagen: "imagenes/Plantadeinterior.Rhoeodiscolor.jpg",
                precio: "600",
                descripción: "",
            },
            {
                codigo: "8",
                nombre: "Aspidrista",
                imagen: "imagenes/Plantainterior.aspidrista.jpg",
                precio: "200",
                descripción: "",
            }

        ]
    }
})

function ocultar() {
    document.getElementById('obj1').style.display = 'none';
}
function mostrar() {
    document.getElementById('obj1').style.display = 'block';
}
function ocultar() {
    document.getElementById('obj2').style.display = 'none';
}
function mostrar() {
    document.getElementById('obj2').style.display = 'block';
}
function ocultar() {
    document.getElementById('obj3').style.display = 'none';
}
function mostrar() {
    document.getElementById('obj3').style.display = 'block';
}