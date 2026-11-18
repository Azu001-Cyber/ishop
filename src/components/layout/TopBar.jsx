import { Link } from "react-router-dom";


export default function TopBar({ title = "iShop", children}) {
    return (
        <>
            <header className="sticky top-0 z-5 border-b border-line bg-bg">
            <div className="flex h-14 max-w-shop items-center px-5 justify-between">
                <span className="text-lg font-bold tracking-tight">
                <Link to={'/'} role="navigation">
                {title}<span className="text-accent">.</span>
                </Link>
                </span>

                <div>
                    {children}
                </div>
            </div>
            </header>
        </>
    );
}