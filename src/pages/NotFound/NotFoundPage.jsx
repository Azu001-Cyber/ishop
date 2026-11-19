import {WrenchOff as Fix} from 'lucide-react'

export default function NotfoundPage(){
    return(
        <>
            <main className="min-h-screen justify-center items-center flex flex-col">
                <div>{<Fix/>}</div>
                <h1>Not Found</h1>
            </main>
        </>
    )
}