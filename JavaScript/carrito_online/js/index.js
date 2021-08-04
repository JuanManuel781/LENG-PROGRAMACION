const CAR_PRODUCTOS = "cartProductsId";

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    loadProductCart();
});

function increaseQuantity(idProduct){
    const  idProductCart= localStorage.getItem(CAR_PRODUCTOS);
    const  arrayIdProductsCart= idProductCart.split(",");
    arrayIdProductsCart.push(idProduct);

    let count=0;
    let idsString="";
    arrayIdProductsCart.forEach(id =>{
        count++;
        if(count<arrayIdProductsCart.length){
            idsString +=id+",";
        }else{
            idsString +=id;
        }
    });
    localStorage.setItem(CAR_PRODUCTOS, idsString);
    loadProductCart();
}

function decreeQuantity(idProduct){
    const idProductCart= localStorage.getItem(CAR_PRODUCTOS);
    const arrayIdProductsCart= idProductCart.split(",");
    const deleteItem= idProduct.toString();
    let index= arrayIdProductsCart.indexOf(deleteItem);

    if(index>-1){
        arrayIdProductsCart.splice(index,1);
    }


    let count=0;
    let idsString="";

    arrayIdProductsCart.forEach(id=>{
        count++;
        if(count<arrayIdProductsCart.length){
            idsString +=id+",";
        }else{
            idsString +=id;
        }
    });
    localStorage.setItem(CAR_PRODUCTOS, idsString);
    loadProductCart();
}

// ********* Funcion para sacar los productos de dbproducts.json *****************
function getProductsDb() {
    const url = "../dbProducts.json";

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        console.log(err);
    });
}
// ******** Funcion asicronica se imprime todo los products de la base de datos dbproducts.js *****************
async function loadProducts() {
    const products = await getProductsDb();
    let html = '';
    products.forEach(product => {
        html += `
            <div class="col-3 product-container">
                <div class="card product">
                    <img
                        src="${product.image}"
                        class="card-img-top"
                        alt="${product.name}"
                    />
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.extraInfo}</p>
                        <p class="card-text">${product.price} Є / Unidad </p>
                        <button type="button" class="btn btn-primary btn-cart" onClick=(addProductCart(${product.id}))>Añadir al carrito</button>
                    </div>
                </div>
            </div>
        `
    });
    document.getElementsByClassName("products")[0].innerHTML = html;
}

function openCloseCart() {
    const containerCart = document.getElementsByClassName("cart-products")[0];

    containerCart.classList.forEach(item => {
        if (item === "hidden") {
            containerCart.classList.remove("hidden");
            containerCart.classList.add('active');
        }

        if (item === "active") {
            containerCart.classList.remove("active");
            containerCart.classList.add("hidden");
        }
    });
}

function addProductCart(idProduct) {
    let arrayProductsId = [];
    let localStorageItems = localStorage.getItem(CAR_PRODUCTOS);

    if (localStorageItems === null) {
        arrayProductsId.push(idProduct);
        localStorage.setItem(CAR_PRODUCTOS, arrayProductsId);
    } else {
        let productId = localStorage.getItem(CAR_PRODUCTOS);

        if (productId.length > 0) {
            productId += "," + idProduct;
        } else {
            productId = productId;
        }
        localStorage.setItem(CAR_PRODUCTOS, productId);
    }

    loadProductCart();
}

async function loadProductCart() {
    const product = await getProductsDb();

    // covertimos el resultado del localStorage en un array 

    const localStorageItems = localStorage.getItem(CAR_PRODUCTOS);
    let htm = "";
    if (!localStorageItems) {
        htm = `
            <div class="cart-product empty">
                <p>Carrito vacio.</p>
            </div>
        `;
    } else {
        const idProductSplit = localStorageItems.split(',');

        // Eliminamos los id duplicados 

        const idProductsCart = Array.from(new Set(idProductSplit));

        idProductsCart.forEach(id => {
            product.forEach(product => {
                if (id == product.id) {
                    const quantity = countDuplicatesID(id, idProductSplit);
                    const totalPrice = product.price * quantity;
                    htm += `
                    <div class= "cart-product">
                        <img src= "${product.image}" alt="${product.name}" />
                        <div class="cart-product-info">
                            <span class="quantity">${quantity}</span>
                            <p>${product.name}</p>
                            <p>${totalPrice.toFixed(2)}</p>
                            <p class="change-quantity">
                                <button onClick=(decreeQuantity(${product.id}))>-</button>
                                <button onClick=(increaseQuantity(${product.id  }))>+</button
                            </p>
                            <p class="cart-product-delete">
                                <button onClick=(deleteProductCart(${product.id}))>Eliminar</button>
                            </p>
                        </div>
                    </div>
                `
                }
            });
        });
    }


    document.getElementsByClassName('cart-products')[0].innerHTML = htm;
}

function  deleteProductCart(idProduct){
    const idProductsCart= localStorage.getItem(CAR_PRODUCTOS);
    const arrayIdProductsCart= idProductsCart.split(',');
    const resultIdDelete= deleteAllIds(idProduct, arrayIdProductsCart);
    
    if(resultIdDelete){
        let count= 0;
        let idsString="";
        resultIdDelete.forEach(id =>{
            count++;
            if(count<resultIdDelete.length){
                idsString +=id+',';
            }else{
                idsString += id;
            }
        });
        localStorage.setItem(CAR_PRODUCTOS, idsString);
    }

    const idslocalStorage= localStorage.getItem(CAR_PRODUCTOS);
    if(!idslocalStorage){
        localStorage.removeItem(CAR_PRODUCTOS);
    }
    loadProductCart();  
}
function countDuplicatesID(value, arrayIds) {
    let count = 0;
    arrayIds.forEach(id => {
        if (value == id) {
            count++;
        }
    });
    return count;
}

function deleteAllIds(id, arrayIds){
    return arrayIds.filter(itemId =>{
        return itemId != id;
    });
}

