import { Outlet } from "react-router-dom"

export default function NavBar({children, className}){
    return(
        <>
            <header>
                <nav className={className}>
                    {children}
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}