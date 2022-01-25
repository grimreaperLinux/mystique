import './HomepageCard.css'
import { useNavigate } from "react-router-dom";

function HomepageCard({ toroute, img, title}) {

    let route = toroute
    let navigate = useNavigate();
    function changeroute(route){
        console.log(route)
        navigate(""+route+"");
    }

    return <>
        <div className="col-md-4">
            <div className="card damn" onClick={()=>{changeroute(route)}}>
                <div className='scaled'><img className="card-img damnn" src={img} alt="Hello"></img></div>
                <div className="card-img-overlay">
                    <h5 className="card-title-2">{title}</h5>
                </div>
            </div>
        </div>
    </>
}

export default HomepageCard