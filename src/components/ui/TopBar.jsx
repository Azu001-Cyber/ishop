import { Link } from "react-router-dom";


export default function TopBar({ title = "iShop" }) {
    return (
        <>
            <header className="sticky top-0 z-5 border-b border-line bg-bg">
            <div className="flex h-14 max-w-shop items-center px-5">
                <span className="text-lg font-bold tracking-tight">
                <Link to={'/'}>
                {title}<span className="text-accent">.</span>
                </Link>
                </span>
            </div>
            </header>
        </>
    );
}