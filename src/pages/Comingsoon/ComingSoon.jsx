import TopBar from "../../components/ui/TopBar"

export default function ComingSoon(){
    return(
        <>
            <TopBar/>
            <main className="flex justify-center items-center min-h-screen flex-col">
                    <div className="border-t-accent border-3 border-accent/50 animate-spin p-1 rounded-full w-10 h-10"></div>
                    <p className="text-muted text-xl font-medium">Coming Soon...</p>
            </main>
        </>
    )
}