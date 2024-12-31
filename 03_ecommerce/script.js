document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach(product=>{
    const prodiv=document.createElement('div')
    prodiv.classList.add('product')
    prodiv.innerHTML= `
      <span>${product.name} - ${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(prodiv);
  })
  productList.addEventListener('click',(e)=>{
    if(e.target.tagName==='BUTTON'){
      const productid=parseInt(e.target.getAttribute("data-id"));
      const product=products.find(p=>p.id===productid)
      addtocart(product);
    }
  })
  function addtocart(product){
    cart.push(product);
    console.log(cart);
    rendercart();
  }
  function rendercart(){
    cartItems.innerText="";
    let totalprice=0;
    if (cart.length>0){
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item,index)=>{
        totalprice+=item.price;
        const cartitem =document.createElement('div');
        cartitem.innerHTML=`
          ${item.name} - $${item.price.toFixed(2)}
          <button pro-id="${index}">remove</button>
        `
        cartItems.appendChild(cartitem);
        totalPriceDisplay.textContent=`${totalprice.toFixed(2)}`
      })
      cartItems.addEventListener('click',(e)=>{
        
        if(e.target.tagName==='BUTTON'){
          cartItems.innerHTML="";
           let newtotal=0;
          const id=parseInt(e.target.getAttribute("pro-id"));
          cart=cart.filter((product,index)=>index!==id);
          console.log(cart);
          cart.forEach((item,index)=>{
            newtotal+=item.price;
            const cartitem =document.createElement('div');
            cartitem.innerHTML=`
              ${item.name} - $${item.price.toFixed(2)}
              <button pro-id="${index}">remove</button>
            `
            cartItems.appendChild(cartitem);
            totalPriceDisplay.textContent=`${newtotal.toFixed(2)}`
          })
          totalPriceDisplay.textContent=`${newtotal.toFixed(2)}`

        }
      })
    }
    else{
      emptyCartMessage.classList.remove("hidden");
    }
  }
  checkOutBtn.addEventListener('click',()=>{
    totalPriceDisplay.textContent=0;
    cart.length=0;
    alert("check out successfully");
    rendercart();
  })

})