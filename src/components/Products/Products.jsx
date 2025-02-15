import "./Products.scss";
import productsList from "../../assets/data/products.json";
import Product from "../Product/Product";
import portfolio from "../../assets/images/portfolio.jpg";
import chart from "../../assets/images/chart.jpg";
import indicatorMarketplace from "../../assets/images/indicator-marketplace.jpg";
import blog from "../../assets/images/blog.jpg";

const images = [chart, portfolio, indicatorMarketplace, blog];

function Products() {
  return (
    <section className="products-container">
      <h2>Our Products</h2>
      <section className="products-list">
        {productsList.map((product, index) => (
          <Product key={product.id} product={product} src={images[index]} />
        ))}
      </section>
    </section>
  );
}

export default Products;
