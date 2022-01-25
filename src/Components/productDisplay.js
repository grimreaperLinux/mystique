import ProductCard from './ProductCard'
import './productDisplay.css'
import Footer from './footer'

export default function ProductList({title}) {
    return <>
        <div className="container">
            <h2>{title}</h2>
            <div className="row">
                <ProductCard img='/images/1.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/2.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/3.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/4.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/5.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/6.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/7.jpeg' price='Rs 125'></ProductCard>
                <ProductCard img='/images/8.png' price='Rs 125'></ProductCard>
            </div>
            <Footer></Footer>
        </div>
    </>
}