import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";


const NavBar = () => {


  const { logout } = useLogout()
  const { user } = useAuthContext();

        const handleLogout=()=>{
          logout()
        }

    return ( 
    <header>
        <div className="container">
        <Link to="/">
          <h1>E-commerce</h1>
        </Link>
        </div>
         

        {/* <div class="left">
                <p class="sing-in">sing in</p>
                <p class="sing-up">sing up</p>
            </div> */}

            <div className="right">
             {user && ( <div>
                 <span>{user.email}</span>
                 <button onClick={handleLogout}>logOut</button>
              </div> )}
                <div className="contact">
                    <Link to = '/favoriteProducts'> 
                      <h3>favorite</h3>
                    </Link>
                </div>

                <div className="games"><Link to = '/Cart'> <h3>Cart</h3></Link></div>

                {!user && (
                  <div>
                      <div className="buy">
                      <Link to = '/Login'><h3>login</h3></Link></div>

                      <div className="buy">
                      <Link to = '/SignUp'><h3>signUp</h3></Link></div>
                  </div>        
                )}
                
                <div className="support">
                <Link to = '/mobiles'> 
                  <h3>mobiles</h3>
                  </Link>
                  </div>
                  
            </div>


     
      </header>

     );
}
 
export default NavBar;