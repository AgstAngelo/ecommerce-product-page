const button = document.querySelector('#button');
const cart = document.querySelector('#cart');

let cartPopper = null;

button.addEventListener("click", (e) => {
  if(cart.hasAttribute('open-cart')){
    hidePopper();
  }
  else {
    showPopper();
  }
});

function showPopper () {
  cart.setAttribute('open-cart', "");
  let cartPopper = Popper.createPopper(button, cart, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        options: {
          rootBoundary: "viewport"
        }
      }
    ]
  });
}

function hidePopper () {
  cart.removeAttribute('open-cart');
  if(cartPopper) {
    cartPopper.destroy();
    cartPopper = null;
  }
}