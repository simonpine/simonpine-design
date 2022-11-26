import {useState} from 'react'
function FilterByCompany(props){
    function changeValue(){
        props.hola(company.value)
    }
    return(
        <select id="company" className='companysContainer' onChange={changeValue}>
            <option className='companys' value="all">all</option>
            <option className='companys' value="marcos">marcos</option>
            <option className='companys' value="liddy">liddy</option>
            <option className='companys' value="ikea">ikea</option>
            <option className='companys' value="caressa">caressa</option>
        </select>
    )
}
export default FilterByCompany;