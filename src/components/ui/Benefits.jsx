
const benefits = [
    'Early access before the public launch',
    'Free help setting up your first shop',
    'A say in what we build next'
]

export default function Benefits(){
    return(
        <>
            <div className="bg-line rounded-control p-4">
                <h2>FOUNDING SELLERS GET</h2>
                {
                    benefits.map((data, index) => (
                        <ul key={index}>
                            <li>{data[index]}</li>
                            <li>{data[index]}</li>
                            <li>{data[index]}</li>
                        </ul>
                    )) 
                }
            </div>
        </>
    )
}