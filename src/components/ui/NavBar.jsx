import Button from "./Button"

export default function NavBar(){
    return(
        <header>
                <nav>
                    <Button label={'Back'} className={'btn-ghost'}/>
                </nav>
        
                <h2>Create Shop</h2>
        </header>
    )
}