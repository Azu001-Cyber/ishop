import CreateShop from "../components/CreateShop";
import Button from "../components/ui/Button";
import NavBar from "../components/ui/NavBar";
import { Link } from "react-router-dom";
import Caption from "../components/ui/Caption";

import { useEffect, useState } from "react";

export default function CreateShopPage(){
    // const [input, Setinput] = useState("Ada's Thirft Corner")

    const [shopdata, Setshopdata] = useState({
        shop_name: "Ada's Thirft Corner",
        shop_description: 'What do you sell?',
        shop_phonenumber: '0801 234 5678'
    })

    useEffect(() => {
        console.log(shopdata)

        // fetch.get('http://localhost:3001/shopData')
        // .then(response => {
        //     console.log(response.data)
        // })
    })

    const handleCreateShop = (event) => {
        event.preventDefault()
        
        const NewShop = {
            shop_name:shopdata.shop_name, 
            shop_description:shopdata.shop_description,
            shop_phonenumber: shopdata.shop_phonenumber,
        }

        Setshopdata(NewShop)
    }
    return(
        <div>
            <NavBar>
                <div className="flex justify-between h-14 px-5 border-b border-line items-center">
                    <Link to={'/'} role="navigation" className="max-h-tap underline font-bold"
                    >Back</Link>
                    <h2 className="text-h2">Create your shop</h2>
                </div>
            </NavBar>
            <main className="px-5 flex flex-col">
                <CreateShop>
                    <form action="" className="flex flex-col gap-5 py-5">

                        <div className="flex flex-col">
                            <label htmlFor="shop_name" className="font-bold" onSubmit={handleCreateShop}>
                                Shop name
                            </label>
                            <input type="text" id="shop_name" name="shop_name"  placeholder="Ada's Thirft Corner" className="border border-line p-4 rounded-control w-full" value={shopdata.shop_name} onChange={(e) => Setshopdata(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor="shop_description" className="font-bold">
                                Shop description
                            </label>
                            <textarea name="shop_description" id="shop_decription" placeholder="What do you sell?" className="border border-line p-4 rounded-control w-full h-[20vh]" value={shopdata.shop_description} onChange={(e) => Setshopdata(e.target.value)}></textarea>
                        </div>

                        <div>
                            <label htmlFor="shop_phonenumber" className="font-bold">
                                WhatsApp number
                            </label>
                            <input type="text" id="shop_phonenumber" name="shop_phonenumber"  placeholder="0801 234 5678" className="border border-line p-4 rounded-control w-full" value={shopdata.shop_phonenumber} onChange={(e) => Setshopdata(e.target.value)} />
                            <Caption text={"Buyers will message this number."}/>
                        </div>
                        
                    </form>
                </CreateShop>
            </main>

            <div className=" border-t border-line mt-10">
                <Button label={'Create Shop'} className={'btn m-5 w-full'} to={'/'}/>
            </div>
        </div>
    )
}