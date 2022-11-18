import Nav from "./nav";
function Layout({a, b, children}){
    return(
        <main className="App">
            <Nav ite={b} main={a} />
            { children }
        </main>
    )
}
export default Layout;