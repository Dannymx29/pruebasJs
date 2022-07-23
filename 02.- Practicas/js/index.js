/*Asignacion de constantes para HTML*/

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobielMenu = document.querySelector(".mobiel-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-card");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector("#product-detail-close");


/*declaramos el evento que esperamos de la constante*/
menuEmail.addEventListener("click", toggleDesktopMenu);

menuHamIcon.addEventListener("click", toggleMobilepMenu);

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/*funciones para menus ocultar cuando otros solan y no se sobre pongan los menus*/
function toggleDesktopMenu()
{
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobilepMenu()
{

    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside ();
    
    mobielMenu.classList.toggle("inactive");

}

function toggleCarritoAside()
{
    const isMobileMenuClosed = mobielMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobielMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside ()
{
    shoppingCartContainer.classList.add("inactive");


    productDetailContainer.classList.remove("inactive");

}

function closeProductDetailAside ()
{
    productDetailContainer.classList.add("inactive");
}

/*Array de productos*/
const productList = [];
productList.push
({
    name:"Bike",
    price: 120.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"Bike",
    price: 120.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"Bike",
    price: 120.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"Bike",
    price: 120.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"Bike",
    price: 120.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"Bike",
    price: 120.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"pantalla",
    price: 220.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push
({
    name:"titulo",
    price: 1200.00,
    imagen: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

/* Esta es la forma del codigo html que mandamos a construir directamente desde Js
<div class="product-card">
    <img src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-">
    <div class="product-info">
        <div>
            <p>
                $120.00
            </p>
            <p>
                Bike
            </p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> -->*/

function renderProducts(arr){
    for (product of productList)
    {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card")

        const productimg = document.createElement("img");
        productimg.setAttribute("src", product.imagen);
        productimg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productimg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
/*La funcion es para mandarla a llamar en caso de que se tengan que hacer diferentes catalogos de productos esta imagen nos ayuda a contruir el catalogo sin importar el numero de productos.*/ 

renderProducts(productList);
/*sirve para llamar la funcion del array que nos crostruye la seccion de imagenes esta referencia a una base de datos que nos permite hacer mas facil el proceso de creacion de productos para un catalogo de articulos.*/
