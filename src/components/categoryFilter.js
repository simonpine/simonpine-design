import { createContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FilterByCompany from './filterCompany.js'
import FilterByPrice from './priceFilter.js'
import FilterByName from './nameFilter.js'
import close from '../img/close.png';
import fill from '../img/filter-filled-tool-symbol.png'
import { Context } from '../context/companyContext'
import { Context2 } from '../context/priceContext'
import { Context3 } from '../context/nameContext'
import { collection, getDocs, getFirestore } from "firebase/firestore"

function CategoryFilter({ main }) {
    const [cover, setCover] = useState('')
    const [nav, setNav] = useState('')
    function out() {
        setCover('')
        setNav('')
    }
    function inF() {
        setCover('left0')
        setNav('right0')
    }
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsColection = collection(db, 'category')
        getDocs(itemsColection).then((snap) => {
            const prov = []
            snap.docs.map((c) => {
                prov.push(c.data().name)
            })
            setCategorys(prov)
        })
    }, [])
    const seven = {}
    if (main === "All") {
        seven.opacity = "1"
        seven.backgroundSize = "50% 2px"
    }
    return (
        <>
            <div onClick={out} className={`cover ${cover}`}></div>
            <button onClick={inF} className={`filterButtomMobile`}><img src={fill}></img></button>
            <ul className={`categoryFilter ${nav}`}>
                <li className='closeButtonFilters'>
                    <button onClick={out} className='clolseButton'><img alt='close button' src={close}></img></button>
                </li>
                <Context3.Consumer>
                    {({ setName }) => {
                        return (
                            <li>
                                <FilterByName otherName={setName} />
                            </li>
                        )
                    }}
                </Context3.Consumer>
                <li>
                    <h2 className='b2'>Category:</h2>
                </li>
                <li>
                    <Link className='b'
                        to={{
                            pathname: "/Store/All",
                        }} style={seven}
                    >
                        All
                    </Link>
                </li>
                {categorys.map((category) => {
                    let one
                    if (main === category) one = {
                        opacity: "1",
                        backgroundSize: "50% 2px"
                    }
                    return (
                        <li key={`Category${category}`}>
                            <Link className='b'
                                to={{
                                    pathname: `/Store/${category}`,
                                }} style={one}
                            >
                                {category}
                            </Link>
                        </li>
                    )
                })}
                <Context.Consumer>
                    {({ setTheCompany }) => {
                        return (
                            <>
                                <li>
                                    <h2 className='b2'>company:</h2>
                                    <FilterByCompany otherCompany={setTheCompany} />
                                </li>
                                <Context2.Consumer>
                                    {({ setmaxprice, maxprice }) => {
                                        return (
                                            <>
                                                <li>
                                                    <h2 className='b2'>max price:</h2>
                                                    <h2 className='b3'>${maxprice}</h2>
                                                    <FilterByPrice otherPrice={setmaxprice} />
                                                </li>
                                                <Context3.Consumer>
                                                    {({ setName }) => {
                                                        const clearAll = (evt) => {
                                                            setTheCompany('all')
                                                            setmaxprice('3100')
                                                            setName('')
                                                        }
                                                        return (
                                                            <li>
                                                                <Link onClick={clearAll} className='b4'
                                                                    to={{
                                                                        pathname: "/Store/All",
                                                                    }}
                                                                >clear Filters</Link>
                                                            </li>
                                                        )
                                                    }}
                                                </Context3.Consumer>
                                            </>
                                        )
                                    }}
                                </Context2.Consumer>
                            </>
                        )
                    }}
                </Context.Consumer>
            </ul>
        </>
    )
}
export default CategoryFilter;