import { createContext } from 'react'
import {Link} from 'react-router-dom'
import FilterByCompany from './filterCompany.js'
import FilterByPrice from './priceFilter.js'
import { Context } from '../context/companyContext'
import { Context2 } from '../context/priceContext'

function CategoryFilter({ main }){
    const one = {}
    const two = {}
    const tree = {}
    const four = {}
    const five = {}
    const six = {}
    const seven = {}
    if(main == 1){
        one.opacity = "1"
        one.backgroundSize = "50% 2px"
    }
    else if (main == 2){
        two.opacity = "1"
        two.backgroundSize = "50% 2px"
    }
    else if (main == 3){
        tree.opacity = "1"
        tree.backgroundSize = "50% 2px"
    }
    else if (main == 4){
        four.opacity = "1"
        four.backgroundSize = "50% 2px"
    }
    else if (main == 5){
        five.opacity = "1"
        five.backgroundSize = "50% 2px"
    }
    else if (main == 6){
        six.opacity = "1"
        six.backgroundSize = "50% 2px"
    }
    else{
        seven.opacity = "1"
        seven.backgroundSize = "50% 2px"
    }
    return(
    <div>
        <ul className="categoryFilter">
            <li>
                <h2 className='b2'>Category:</h2>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/All",
                }} style={seven}
                >
                    All                        
                </Link>
            </li>
            <li>
                <Link className='b' 
                to={{
                    pathname:"/Store/Office",
                }} style={one}
                >
                    Office                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/Living Room",
                }} style={two}
                >
                    Living Room                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/Kitchen",
                }} style={tree}
                >
                    Kitchen                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/Bedroom",
                }} style={four}
                >
                    Bedroom                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/Dining",
                }} style={five}
                >
                    Dining                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/Kids",
                }} style={six}
                >
                    Kids                        
                </Link>
            </li>
            <Context.Consumer>
                {({ setTheCompany }) => {

                    function otherCompany(com){
                        setTheCompany(com)
                    }

                return(
                    <li>
                        <h2 className='b2'>company:</h2>
                        <FilterByCompany otherCompany={otherCompany}/>
                    </li>
                    )
                }}
            </Context.Consumer>
            <Context2.Consumer>
                {({ setmaxprice, maxprice }) => {

                function otherPrice(com){
                    setmaxprice(com)
                }

                return(
                    <li>
                        <h2 className='b2'>max price:</h2>
                        <h2 className='b3'>${maxprice}</h2>
                        <FilterByPrice otherPrice={otherPrice}/>
                    </li>
                    )
                }}
            </Context2.Consumer>
        </ul>
    </div>
    )
}
export default CategoryFilter;