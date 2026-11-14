
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
        question:'When does iShop lunch',
        answer:'Soon. Waitlist members hear first, by email.'
    }
]

export default function Question(){
    return(
        <>
            {content.map( (data) => (
                <div key={data.id}>
                    <h3>{data.question}</h3>
                    <p>{data.answer}</p>
                </div>
                
            ))}
            <hr />
        </>
    )
}