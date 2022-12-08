import {Link} from 'react-router-dom'
function ShoppingEndCard ({ delivery, total, orderCode, see }){
    return(
        <div className='endCard' style={see}>
            <h2>{total}</h2>
        </div>
    )
}
export default ShoppingEndCard;