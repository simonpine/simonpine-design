import { Context2 } from '../context/priceContext'
function FilterByPrice(props){
    const changeValue = ( evt ) => {
        props.otherPrice(evt.target.value)
    }
    return(
        <Context2.Consumer>               
            {({ maxprice }) => {
                return(
                    <input type="range" id="volume" name="volume" className='range'
                    min="0" max="3100" value={maxprice}
                    onChange={changeValue}
                    />
                )
            }}
        </Context2.Consumer>
    )
}
export default FilterByPrice;