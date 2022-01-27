import './ProductCard.css'

export default function ProductCard({img, price}) {
    return <>
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card hello h-90">
                <div className='bestseller'>bestseller</div>
                <div className='cardDiv'><img className="card-img card-img-yo" src={img} alt="Vans" /></div>
                <div className="card-body">
                    <h4 className="card-title" style={{margin:'10px 0'}}>Vans Sk8-Hi MTE Shoes</h4>
                    <h6 className="card-subtitle mb-2 text-muted" style={{margin:'10px 0'}}>Style: VA33TXRJ5</h6>
                    <p className="card-text" style={{margin:'10px 0'}}>
                        The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.</p>
                    <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 class="mt-4">Price: {price}</h5></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}