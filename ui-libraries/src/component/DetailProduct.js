import React from "react";

function DetailProduct() {
  return (
    <div>
      <section className="section mt-5">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <figure class="image is4by3">
                <img src="https://picsum.photos/800/600" alt="product" />
              </figure>
            </div>
            <div class="column">
              <div class="content">
                <div class="title">Product Name</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem possimus temporibus corrupti nam officia quia saepe
                  fugiat debitis hic blanditiis earum, dicta ullam ab alias eum
                  voluptas quod facilis impedit!
                </p>
                <p>
                  <strong>Price : </strong> Rp 1.000.000,-
                </p>
                <p>Stock</p>
                <div class="field p-5">
                  <button className="button is-primary is-fullwidth has-text-white mb-3">
                    Add to cart
                  </button>
                  <button className="button is-primary is-outlined is-fullwidth">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailProduct;
