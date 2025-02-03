import { LOGO_URL } from "../utils/constants";

const Header =() =>{                           //2
    return(
        <div className="header">
            <div className="image-conatiner">
                <img className="logo"
                 src={LOGO_URL} />
            </div>
            <div className="navigation-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;