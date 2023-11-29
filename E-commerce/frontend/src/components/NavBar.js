import { Link } from "react-router-dom";


const NavBar = () => {
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
                <div className="contact">
                    <Link to = '/favoriteProducts'> 
                      <h3>favorite</h3>
                    </Link>
                </div>

                <div className="games"><h3>purchase</h3></div>

                <div className="buy"><h3>labtobs</h3></div>
                
                <div className="support"><h3>mobiles</h3></div>
            </div>


     
      </header>

     );
}
 
export default NavBar;