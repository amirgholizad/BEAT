import { Link } from "react-router-dom";
import "./Product.scss";

function Product({ product, src }) {
  return (
    <div key={product.id} className="product-container">
      <img
        src={src}
        alt={`product ${product.title} image`}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <Link to={`/${product.name}`}>
        <button className="button-green">
          <h3>Try!</h3>
        </button>
      </Link>
    </div>
  );
}

export default Product;
