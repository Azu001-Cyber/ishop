

export default function TopBar({textElement, className, linkElement}){
    return(
        <>
            <div className={className}>
                <div>{textElement}</div>
                <div>{linkElement}</div>
            </div>
        </>
    )
}