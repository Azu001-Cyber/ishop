import Button from "../../components/ui/Button"
import HowItWorks from "../Waitlist/HowitWorks"
import ShopDemo from "../Waitlist/ShopDemo"
import WaitingListForm from '../../pages/Waitlist/WaitingListForm'
import TopBar from "../../components/layout/TopBar"
import Benefits from "../Waitlist/Benefits"
import Question from "../Waitlist/Question"
// import Notification from "../../components/ui/Notification"
import WaitlistProgress from "../Waitlist/WaitlistProgress"

import { useEffect, useState } from "react"

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
    const [count, setCount] = useState(0);
    const [shown, setShown] = useState(0);
    const cap = 500
    const percent = Math.min(100, Math.round((count/cap) * 100));

    // useEffect( () => {
    //     setShown(percent);
    // }, [percent])

    useEffect(() => {
        setShown(percent)
        fetch('path')
        .then( r => r.json())
        .then( d => setCount(d.count))
        .catch( () => setCount(0));

    }, [percent])


    return(
        <>
            <TopBar className=''>
                <Button label={'Join'} className={'border border-line p-2 rounded-control font-medium min-h-tap md:min-h-control'}/>
            </TopBar>


            <main className="p-5 gap-10">
            
                        <section className="block">
                            <h1 className="text-h1">Your business deserves its own online shop.</h1>
                            <p className="text-muted  text-lg tracking-tighter">
                                A simpler way to showcase your products 
                                and establish your business online. 
                                Join the waitlist to be one of the 
                                first sellers on iShop.</p>
                        </section>

                        <section>
                            <WaitlistProgress count={count} cap={cap}>
                                <div className="my-5">
                                        <div className="flex items-baseline justify-between">
                                            <p>
                                                <span className="text-3xl font-bold tracking-tight">{count}</span>{" "}
                                                <span className="text-muted">Qualified sellers on the list</span>
                                            </p>
                                            <span className="text-caption text-muted">{cap} founding spots</span>
                                        </div>

                                        {/* The track */}
                                    
                                        <div role="progressbar"
                                            aria-valuemin={0}
                                            aria-valuemax={cap}
                                            aria-valuenow={count}
                                            aria-label="Founding spots taken"
                                            className="mt-2 h-1.5 w-full max-w-full overflow-hidden rounded-full bg-surface">
                                                
                                        {/* the fill */}
                                        <div className="h-full rounded-full bg-accent transition-[width] duration-700 ease-out" style={{width: `${shown}`}}/>
                                        </div>
                                </div>
                            </WaitlistProgress>
                        </section>

                    <div className="md:flex md:justify-around">

                        <section className="">
                        {/* Form */}
                            <WaitingListForm/>
                        </section>

                        <section>
                            <ShopDemo className={'border border-line rounded-sheet p-4'}>
                                <h1 className="font-semibold">Ada's Thrift Corner</h1>
                                <hr  className="text-line"/>

                                <div className="grid grid-cols-2 gap-5 my-5">
                                    {demo_shop.map(data => (
                                        <div key={data.id} className="">
                                            <div className="">
                                                <div className="bg-line p-10 text-muted text-center rounded-box">
                                                    {data.item_image ? data.item_image : "Photo"}
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
            

            
                <section>
                    <h2 className="text-xs text-muted font-bold">HOW IT WORKS</h2>
                    <HowItWorks/>
                </section>
                
                <section className="md:bg-line md:flex md:justify-between md:items-center ">
                    <div>
                        <Benefits>
                            <span className="text-xs text-muted font-bold">FOUNDING SELLERS GET</span>
                            <h2 className="text-h2">Join early, shape the product.</h2>
                            <ul>
                                <li>Early access before the public launch</li>
                                <li>Free help setting up your first shop</li>
                                <li>A say in what we build next</li>
                            </ul>
                        </Benefits>
                    </div>
                    <div>
                        <span className="text-xs text-muted font-bold">QUESTIONS</span>
                        <Question/>
                    </div>            
                </section>

                <section>
                    {/* Form */}
                    <WaitingListForm/>
                </section>
            </main>
        </>    
        )
}