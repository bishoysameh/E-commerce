
import { Link } from 'react-router-dom';




// import { useNavigate } from './Mobiles';
// const navigate = useNavigate();

const MobileDetails = ({ mobile }) => {
    if (mobile.productTybe === 'labtob')
 {
    return(
        

                <div className="contaa" >
                {/* {filteredMobiles.map((mobile) => ( */}
                    <div key={mobile._id} className="col hp">
                    <div className="card h-100 shadow-sm">
                        <Link to={`/Mobiledetails/${mobile._id}`}>
                        <img
                            src={mobile.productPhoto}
                            className="card-img-top"
                            alt={mobile.productName}
                        />
                        </Link>

                        <div className="card-body">
                        <div className="clearfix mb-3">
                            <span className="float-start badge rounded-pill bg-success">
                            {mobile.productPrice}
                            </span>
                        </div>
                        <h5 className="card-title">{mobile.productName}</h5>
                        {mobile.toggledetails && <p>{mobile.productDetails}</p>}
                        <div className="d-grid gap-2 my-4">

                        </div>
                        
                        </div>
                    </div>
                    </div>
                {/* ))} */}


                </div>
           

);
        }
    
 }

export default MobileDetails;
