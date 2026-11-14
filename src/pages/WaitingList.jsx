import Button from "../components/ui/Button"
import HowItWorks from "../components/ui/HowitWorks"
import ShopDemo from "../components/ui/ShopDemo"
import WaitingListForm from '../components/ui/WaitingListForm'
import TopBar from "../components/ui/TopBar"


const demo_shop = [
    {
        id:'1',
        item_image:'',
        item_name:'item name',
        item_price:'18,000'
    },
    {
        id:'2',
        item_image:'',
        item_name:'item name',
        item_price:'18,000'
    },
    {
        id:'3',
        item_image:'',
        item_name:'item name',
        item_price:'18,000'
    },
    {
        id:'4',
        item_image:'',
        item_name:'item name',
        item_price:'18,000'
    },
]

export default function WaitingList(){
    return(
        <>
            <TopBar className=''>
                <Button to={'#join'} label={'Join'} className={'border border-line p-2 rounded-control font-medium min-h-tap md:min-h-control'}/>
            </TopBar>


            <main className="p-5">
                <div className="hero">

                    <div>
                        <section className="extrem-small sm:small md:big lg:large">
                            <h1 className="text-h1">Your business deserves its own online shop.</h1>
                            <p className="text-muted  text-lg tracking-tighter">
                                A simpler way to showcase your products 
                                and establish your business online. 
                                Join the waitlist to be one of the 
                                first sellers on iShop.</p>
                        </section>

                        <section className="extrem-small sm:small md:big lg:large">
                        {/* Form */}
                            <WaitingListForm/>
                        </section>
                    </div>


                    <div>
                        <section>
                            <ShopDemo className={'border border-line rounded-control p-4'}>
                                <h1 className="font-semibold">Ada's Thrift Corner</h1>
                                <hr  className="text-line"/>

                                <div className="grid grid-cols-2 gap-5 my-5">
                                    {demo_shop.map(data => (
                                        <div key={data.id} className="">
                                            <div className="">
                                                <div className="bg-line p-10 text-muted text-center rounded-control">

                                                    {!data.item_image ? 'Photo' : data.item_image}
                                                </div>
                                                <div>
                                                    <h3 className="">{data.item_name}</h3>
                                                    <p className="font-bold">{data.item_price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <Button className={'btn  w-full cursor-pointer'} label={'Message on WhatsApp'} onEvent={() => alert('Thanks for testing!. When live this button will lead to your WhatsApp DMs.')}/>
                                
                            </ShopDemo>
                        </section>

                    </div>
                </div>

                <div>
                    <section>
                        <h2>HOW IT WORKS</h2>
                        <HowItWorks/>
                    </section>
                </div>
            </main>
        </>    
        )
}