import {Link} from 'react-router-dom'
function CategoryFilter({ main }){
    const one = {}
    const two = {}
    const tree = {}
    if(main == 1){
        one.opacity = "1"
        one.backgroundSize = "50% 2px"
    }
    else if (main == 2){
        two.opacity = "1"
        two.backgroundSize = "50% 2px"
    }
    else{
        tree.opacity = "1"
        tree.backgroundSize = "50% 2px"
    }
    return(
    <div>
        <ul className="categoryFilter">
            <li>
                <h2 className='b2'>Filter by:</h2>
            </li>
            <li>
                <Link className='b' 
                to={{
                    pathname:"/Store/Category/combos",
                }} style={one}
                >
                    Combos                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store/Category/individual",
                }} style={two}
                >
                    Individual                        
                </Link>
            </li>
            <li>
                <Link className='b'
                to={{
                    pathname:"/Store",
                }} style={tree}
                >
                    All                        
                </Link>
            </li>
        </ul>
    </div>
    )
}
export default CategoryFilter;