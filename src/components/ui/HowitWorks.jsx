

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
                {
                    details.map((detail, index) => (
                        <div key={index}>
                            <div>{detail.id}</div>
                            <div>
                                <h3>{detail.title}</h3>
                                <p>{detail.description}</p>
                            </div>
                        </div>
                    ))
                }
        </>
    )
}