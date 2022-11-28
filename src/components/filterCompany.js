import { Context } from '../context/companyContext'
function FilterByCompany(props){
    const changeValue = ( evt ) => {
        props.otherCompany(evt.target.value)
    }
    return(
<Context.Consumer>               
{({ theCompany }) => {
    return(
    <select id="company" className='companysContainer' onChange={changeValue} value={theCompany}>
        <option className='companys' value="all">all</option>
        <option className='companys' value="marcos">marcos</option>
        <option className='companys' value="liddy">liddy</option>
        <option className='companys' value="ikea">ikea</option>
        <option className='companys' value="caressa">caressa</option>
    </select>
    )
}}
</Context.Consumer>
    )
}
export default FilterByCompany;
