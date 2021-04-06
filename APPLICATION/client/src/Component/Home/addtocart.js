
function Home() {

  



  return (
    

<div>
  <main className="cd-main container margin-top-xxl">
    <div className="text-component text-center">
      <h1>Add to Cart Interaction</h1>
      <p className="flex flex-wrap flex-center flex-gap-xxs">
        <a className="cd-article-link" href="https://codyhouse.co/gem/add-to-cart-interaction">📝 View Tutorial</a>
        <a href="#0" className="cd-add-to-cart js-cd-add-to-cart" data-price="25.99">Add To Cart</a>
      </p>
    </div>
  </main>
  <div className="cd-cart cd-cart--empty js-cd-cart">
    <a href="#0" className="cd-cart__trigger text-replace">
      Cart
      <ul className="cd-cart__count"> {/* cart items count */}
        <li>0</li>
        <li>0</li>
      </ul> {/* .cd-cart__count */}
    </a>
    <div className="cd-cart__content">
      <div className="cd-cart__layout">
        <header className="cd-cart__header">
          <h2>Cart</h2>
          <span className="cd-cart__undo">Item removed. <a href="#0">Undo</a></span>
        </header>
        <div className="cd-cart__body">
          <ul>
            {/* products added to the cart will be inserted here using JavaScript */}
          </ul>
        </div>
        <footer className="cd-cart__footer">
          <a href="#0" className="cd-cart__checkout">
            <em>Checkout - $<span>0</span>
              <svg className="icon icon--sm" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><line strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" x1={3} y1={12} x2={21} y2={12} /><polyline strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" points="15,6 21,12 15,18 " /></g>
              </svg>
            </em>
          </a>
        </footer>
      </div>
    </div> {/* .cd-cart__content */}
  </div> {/* cd-cart */}
</div>


  );
}

export default Home;
