import {useEffect} from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutsContext } from "../hooks/useCartContext"
import ProductDetails from '../components/ProductDetails';


const Cart = () => {

    const {user} = useAuthContext()
    const {workouts ,dispatch } = useWorkoutsContext();

    // const [cart ,setCart] = useState(null)


    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('/api/cart' , 
          {
            headers:  {'Authorization': `Bearer ${user.token}`}
          })
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_WORKOUTS', payload: json})

            // setCart(json)
          }
        }
       if(user){
        fetchProducts()
       }
      }, [user,dispatch])

      // console.log(`${cart.productName && cart.productName}` )
      //  console.log(cart.productName)
        console.log(workouts)



    return ( 
        <div> <h1> {workouts&&workouts.map(workout => (<ProductDetails product={workout} key={workout._id} /> ))} </h1>

  
        </div>

     );
}
 
export default Cart;