import Cart from './cart';
import logo from '../img/logo1.svg';
import insta from '../img/insta.png';
import twi from '../img/twitter.png';
import git from '../img/facebook.png';
import {Link} from 'react-router-dom'
function Nav({ ite, main }) {
    const one = {}
    const two = {}
    const tree = {}
    const four = {}
    if(main == 1){
        one.opacity = "1"
        one.backgroundSize = "50% 2px"
    }
    else if (main == 2){
        two.opacity = "1"
        two.backgroundSize = "50% 2px"
    }
    else if (main == 4){
        four.opacity = "1"
    }
    else{
        tree.opacity = "1"
        tree.backgroundSize = "50% 2px"
    }
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
                        <a href="https://simonpine.com/" target="_blank">
                            <img src={logo} alt="instagram logo" className='socialMedia'/>
                        </a>
                    </li>
                </ul>
                <ul className="has">
                    <li>
                        <Link className="a"  to={{
                            pathname:"/",
                        }}  style={one} >Home</Link>
                    </li>
                    <li>
                        <Link className="a" to={{
                            pathname:"/About",
                        }}  style={two} >About</Link>
                    </li>
                    <li>
                        <Link className="a" to={{
                            pathname:"/Store/All",
                        }}  style={tree} >Store</Link>
                    </li>
                </ul>
                <Cart numItem={ite} main={four}/>
        </nav>
    );
}




export default Nav;