import { Context } from '../context/companyContext'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
function FilterByCompany(props){
    const [options, setOptions] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsColection = collection(db, 'company')
        getDocs(itemsColection).then((snap) => {
            const prov = []
            snap.docs.map((c) => {
                prov.push(c.data().name)
            })
            setOptions(prov)
        })
    }, [])
    const changeValue = ( evt ) => {
        props.otherCompany(evt.target.value)
    }
    return(
<Context.Consumer>               
{({ theCompany }) => {
    return(
    <select id="company" className='companysContainer' onChange={changeValue} value={theCompany}>
         <option className='companys' value="all">all</option>
        {options.map(option => {
            return(
                <option key={`company${option}`} className='companys'>{option}</option>
            )
        })}
    </select>
    )
}}
</Context.Consumer>
    )
}
export default FilterByCompany;
