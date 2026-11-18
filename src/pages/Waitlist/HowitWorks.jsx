

const details = [
    {
        id:'1',
        title:'Create your shop',
        description:'Add a name and your WhatsApp number. It takes about a minute.'
    },
    {
        id:'2',
        title:'Manage your products',
        description:"Upload photos, set prices and mark items sold out when they're gone."
    },
    {
        id:'3',
        title:'Share one link',
        description:'Customers browse, tap a product and message you on WhatsApp. No account, No checkout, No cost fee.'
    }
]

export default function HowItWorks(){
    return(
        <>  
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    details.map((detail) => (
                        <div key={detail.id} className="flex space-x-3">
                            <div className="border border-line rounded-[50%] flex  items-center font-bold p-4 w-10 h-10 ">{detail.id}</div>
                            <div>
                                <h3 className="font-bold">{detail.title}</h3>
                                <p className="text-muted">{detail.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}