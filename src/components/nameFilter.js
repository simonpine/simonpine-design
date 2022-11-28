import { Context3 } from '../context/nameContext'
function FilterByName(props){
    const changeValue = ( evt ) => {
        props.otherName(evt.target.value)
    }
    return(
        <Context3.Consumer>               
        {({ name }) => {
            return(
                <input className="search" type='text' onChange={changeValue} placeholder='Search' value={name}></input>
            )
        }}
        </Context3.Consumer>
    )
}
export default FilterByName;
