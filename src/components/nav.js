import Cart from './cart.js';
import logo from '../img/logo1.svg';
import insta from '../img/insta.png';
import twi from '../img/twitter.png';
import git from '../img/facebook.png';
function Nav({ ite }) {
    return(
        <nav className="nav">
                <ul className="tig">
                    <li>
                        <a href="https://twitter.com/SimonPine2" target="_blank">
                            <img src={twi} alt="twitter logo" className='socialMedia'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/simonpine" target="_blank">
                            <img src={git} alt="facebook logo" className='socialMedia'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/simonpineda0521/" target="_blank">
                            <img src={insta} alt="instagram logo" className='socialMedia'/>
                        </a>
                    </li>
                    <li>
                        <img src={logo} alt="instagram logo" className='socialMedia'/>
                    </li>
                </ul>
                <ul className="has">
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Store</span>
                    </li>
                </ul>
                <Cart numItem={ite} />
        </nav>
    );
}




export default Nav;