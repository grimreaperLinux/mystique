import ProductCard from "./ProductCard";
import "./productDisplay.css";

export default function ProductList({ title }) {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <div className="row">
          <ProductCard img="/images/1.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/2.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/3.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/4.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/5.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/6.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/7.jpeg" price="Rs 125"></ProductCard>
          <ProductCard img="/images/8.png" price="Rs 125"></ProductCard>
        </div>
      </div>
      <div className="row fixed-bottom just-bottom pt-2 pb-2">
        <div className="col-6 bottom-fragger" style={{ textAlign: "center" }}>
          <a href="tel:7463846967">Number: 7463846967</a>
        </div>
        <div className="col-6 bottom-fragger" style={{ textAlign: "center" }}>
          <a href="milto: ani9431619703@gmail.com">
            Email: ani9431619703@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
