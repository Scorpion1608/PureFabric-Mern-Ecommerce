import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/CategoryStyles.css";

const Categories = () => {
  const categories = [
    {
      name: "Men",
      image: "/images/men.png",
      slug: "men",
    },
    {
      name: "Women",
      image: "/images/women.png",
      slug: "women",
    },
    {
      name: "Kids",
      image: "/images/kids.png",
      slug: "kids",
    },
  ];

  return (
    <Layout title="Categories">
      <div className="container categories-page">
        <h1 className="text-center mb-4">Shop by Category</h1>

        <div className="row">
          {categories.map((cat) => (
            <div key={cat.slug} className="col-md-4 mb-4">
              <div className="category-card">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-img"
                />
                <h3 className="category-title">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
