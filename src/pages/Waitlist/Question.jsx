
const content = [
    {
        id:'1',
        question:'Is it free to join the waitlist?',
        answer:'Yes. Joining only needs your email.'
    },
    {
        id:'2',
        question:'Do my customers need an account?',
        answer:'No. They open your link and message you on WhatsApp about your product.'
    },
    {
        id:'3',
        question:'When does iShop lunch?',
        answer:'Soon. Waitlist members hear first, by email.'
    }
]

export default function Question(){
    return(
        <>
            <div className="">
            {content.map( (data) => (
                <div key={data.id} className="border-b- mb-5">
                    <h3 className="font-bold">{data.question}</h3>
                    <p className="text-muted">{data.answer}</p>
                </div>
                
            ))}
            </div>
        </>
    )
}