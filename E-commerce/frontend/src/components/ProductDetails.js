  import { Link } from 'react-router-dom';

const ProductDetails = ({ product }) => {
 if (product.productTybe === 'laptop')
 {
  return(
   
<article className="card">
<Link to = {`./ProductBody/${product._id}`}>

        <div className="card__img">
            <img src={product.productPhoto} alt=""/>
        </div>
        <div className="card__name">
            <p>{product.productName}</p>
        </div>
        <div className="card__precis">
            <a href="./" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>
            
            <div>
                <span className="card__preci card__preci--now">price {product.productPrice}$</span>
            </div>
            <a href="./" className="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
        </div>
        </Link>

    </article>

    )
  }
}
  export default ProductDetails;
  