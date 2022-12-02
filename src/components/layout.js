import Nav from "./nav";
import {CustomProvider} from '../context/cartContext'
function Layout({a, b, children}){
    return(
        <CustomProvider>
        <main className="App">
            <Nav ite={b} main={a} />
            { children }
        </main>
        </CustomProvider>
    )
}
export default Layout;