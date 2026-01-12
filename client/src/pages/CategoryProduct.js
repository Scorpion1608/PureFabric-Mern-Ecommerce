import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import toast from "react-hot-toast"; // optional if you use toast

const allProducts = [
  { _id: "1", name: "Men T-Shirt", category: "men", price: 799, image: "/images/Tshirt.png" },
  { _id: "2", name: "Men Jacket", category: "men", price: 1499, image: "/images/Jacket.png" },
  { _id: "3", name: "Kids Shoes", category: "kids", price: 999, image: "/images/Kidshoes.png" },
  { _id: "4", name: "Women Handbag", category: "women", price: 1299, image: "/images/product5.png" },
];

const CategoryProduct = () => {
  const { slug } = useParams();

  const products = allProducts.filter((p) => p.category === slug);

  // ADD TO CART HANDLER
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = existingCart.findIndex((item) => item._id === product._id);

    if (index >= 0) {
      existingCart[index].quantity = (existingCart[index].quantity || 1) + 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    // toast.success("Item added to cart"); // if using react-hot-toast
  };

  return (
    <Layout title={`${slug.toUpperCase()} Collection`}>
      <div className="container mt-4">
        <h2 className="text-center mb-4">
          {slug.toUpperCase()} Collection
        </h2>

        <div className="row">
          {products.length === 0 ? (
            <p className="text-center">No products found</p>
          ) : (
            products.map((p) => (
              <div className="col-md-4 mb-4" key={p._id}>
                <div className="card p-3 text-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      height: "220px",
                      objectFit: "contain",
                    }}
                  />
                  <h5 className="mt-3">{p.name}</h5>
                  <p>₹{p.price}</p>

                  {/* ADD TO CART BUTTON */}
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleAddToCart(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
