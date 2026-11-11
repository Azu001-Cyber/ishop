import CreateShop from "../components/CreateShop"
import Button from "../components/ui/Button"
import TopBar from "../components/ui/TopBar"
export default function CreateShopPage(){
    return(
        <div>
            <TopBar/>
            <main>
                <CreateShop/>
            </main>
            <div className="justify-self-center border-t border-line">
                <Button label={'Create Shop'} className={'btn'}/>
            </div>
        </div>
    )
}