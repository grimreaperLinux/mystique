import './ProductCard.css'

export default function ProductCard({img, price, name, description, code, outofstock}) {
    return <>
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card hello h-90">
                {outofstock ? <div className='bestseller'>Out of Stock</div>: <></>}  
                <div className='cardDiv'><img className="card-img card-img-yo" src={img} alt="Vans" /></div>
                <div className="card-body">
                    <h4 className="card-title" style={{margin:'10px 0'}}>{name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted" style={{margin:'10px 0'}}>Style: {code}</h6>
                    <p className="card-text" style={{margin:'10px 0'}}>
                        {description}</p>
                    <div className="buy d-flex justify-content-between align-items-center">
                        <div className="price text-success"><h5 class="mt-4">Price: {price}</h5></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}