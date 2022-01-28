import ProductCard from "./ProductCard";
import "./productDisplay.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductList({ title }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/card";
    const fetchData = async () => {
      const result = await axios.get(url);
      console.log("fetch data;m", result.data);
      setItems(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <div className="row">
          {items.filter((item) => {return item.type === title}).map((item) => {
            return (
              <ProductCard
                img={item.image}
                price={item.price}
                name={item.name}
                description={item.description}
                code={item.code}
                outofstock={item.outofstock}
              ></ProductCard>
            );
          })}
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
