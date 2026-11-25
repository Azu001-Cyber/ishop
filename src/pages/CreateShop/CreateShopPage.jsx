import CreateShop from "../../components/form/CreateShop";
import Button from "../../components/ui/Button";
import NavBar from "../../components/layout/NavBar";
import { Link } from "react-router-dom";
import Caption from "../../components/ui/Caption";

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateShopPage(){
    const formRef = useRef()
    const navigate = useNavigate()

    // Set component state
    const [shopdata, Setshopdata] = useState({
        shop_name: "",
        shop_email:"",
        shop_description: "",
        shop_phonenumber: ""
    })

    // Set error component state
    const [error, setError] = useState({
        name_error: "",
        email_error: "",
        description_error: "",
        phonenumber_error: ""
    })


    // 
    // const handleShopName = (e) =>{
    //     console.log('Setting shop name')

    //         const setShopName = {
    //             ...shopdata,
    //             shop_name: e.target.value.trim()
    //         }
    //         Setshopdata(setShopName)

    //     console.log('after setting shop data:',shopdata)
    // }

    // const handleShopEmail = (e) =>{
    //     console.log('Setting shop email')

    //     const setShopEmail = {
    //         ...shopdata,
    //         shop_email: e.target.value
    //     }

    //     Setshopdata(setShopEmail)
    //     console.log('after setting shop data:', shopdata)
    // }

    // const handleShopDescription = (e) =>{
    //     console.log('Setting shop description')
        
    //     const setShopDescription = {
    //         ...shopdata,
    //         shop_description: e.target.value
    //     }

    //     Setshopdata(setShopDescription)
    //     console.log('after setting shop data:', shopdata)
    // }

    // const handleShopNumber = (e) =>{
    //     console.log('Setting shop number')
        
    //     const setShopNumber = {
    //         ...shopdata,
    //         shop_phonenumber: e.target.value
    //     }

    //     Setshopdata(setShopNumber)
    //     console.log('after setting shop data:', shopdata)
    // }


    const handleShopChange = (e) => {
        const {name, value} = e.target

        Setshopdata(prev => ({
        ...prev,
        [name]:value
        }))
    }

    // Handle form inputs and return message object
    // containing errors based on conditional evalutation 
    const validateShopData = () => {
        // initailize a message object
        const message = {}

        // validation logic for shop name
        if(shopdata.shop_name === '' || shopdata.shop_name === null){
            message.name_error = 'shop name is required'
        }else if(shopdata.shop_name.length > 50){
            message.name_error = 'shop name must be at most 50 characters'
        }

        // validation logic for shop email
        if(shopdata.shop_email === ''){
            message.email_error = 'shop email is required'
        }else if(shopdata.shop_email){
            return
        }

        // validation logic for shop description
        if(shopdata.shop_description === ''){
            message.description_error = "shop description can't be empty"
        }else if(shopdata.shop_description.length > 500){
            message.description_error = "shop description must be a maximum of 500 characters"
        }

        // validation logic shop phonenumber
        if(shopdata.shop_phonenumber === ''){
            message.phonenumber_error = 'phone number is required'
        }else if(shopdata.shop_phonenumber.length < 11){
            message.phonenumber_error = 'phone number is not valid'
        }

        return message
    }


    const handleCreateShop = (event) => {
        event.preventDefault()
        // console.log(event.target)
        // console.log("form submitted...")
        const validationErrors = validateShopData
        
        setError(validationErrors)
        console.log(error)
        // navigate('/')
        
        if(Object.keys(validationErrors).length > 0){
            console.log('form not submitted')
            return
        }




    }
        useEffect(()=>{
                setTimeout( () => {
                console.log(error)
                console.log(shopdata)
        }, 1000)
        },)

    return(
        <div className="">
            <NavBar className={"max-w-full w-full flex gap-10 h-14 px-5 border-b border-line items-center justify-center"}>
                
                    <Link to={'/'} className="max-h-tap underline font-bold"
                    >Back</Link>
                    <h2 className="text-[1rem] font-bold mx-auto">Create your shop</h2>
                
            </NavBar>

            <main className="flex flex-col gap-10">
                <CreateShop className={"space-y-5 py-5 px-5"} onEvent={handleCreateShop} ref={formRef}>
                        <div className="flex flex-col">

                            <label htmlFor="shop_name" 
                            className="font-bold" 
                            >
                                Shop name
                            </label>

                            <input type="text" 
                            id="shop_name" 
                            name="shop_name"  
                            placeholder="Ada's Thirft Corner" 
                            className={error?.name_error ?
                                'focus-visible:outline-danger outline-danger outline-2  outline-offset-2 border  p-4 rounded-control w-full':
                                'border border-line p-4 rounded-control w-full'}
                            onChange={(e) => handleShopChange(e)}
                            // onBlur={validateShopData}
    
                            />
                            {/*error message is shown based on boolean state as well as the style implementation  */}
                            {error?.name_error && (<p className={`${error.name_error && "error"}`}>{error.name_error}</p>)}
                        </div>

                        <div className="flex flex-col">

                            <label htmlFor="shop_email" 
                            className="font-bold" 
                            onSubmit={handleCreateShop}>
                                Shop email
                            </label>

                            <input type="email" 
                            id="shop_email" 
                            name="shop_email"  
                            placeholder="Enter Email" 
                            className={error?.email_error ? 
                                "focus-visible:outline-danger outline-danger outline-2  outline-offset-2 border  p-4 rounded-control w-full" 
                                : "border border-line p-4 rounded-control w-full" }
                            value={shopdata.shop_email} 
                            onChange={(e) => handleShopChange(e)}
    
                            />
                             {/*error message is shown based on boolean state as well as the style implementation  */}
                            {error?.email_error && (<p className={`${error.email_error && "error"}`}>{error.email_error}</p>)}
                        </div>

                        <div>
                            <label 
                            htmlFor="shop_description" 
                            className="font-bold">
                                Shop description
                            </label>
                            <textarea 
                            name="shop_description" 
                            id="shop_description" 
                            placeholder="What do you sell?" 
                            className={error?.description_error ? 
                                "focus-visible:outline-danger outline-danger outline-2  outline-offset-2 border  p-4 rounded-control w-full" 
                                : "border border-line p-4 rounded-control w-full" }
                            value={shopdata.shop_description} 
                            onChange={(e) => handleShopChange(e)}
    
                            ></textarea>
                            
                            {error?.description_error && (<p className={`${error.description_error && "error"}`}>{error.description_error}</p>)}
                        </div>

                        <div>
                            <label htmlFor="shop_phonenumber" className="font-bold">
                                WhatsApp number
                            </label>
                            <input type="text" 
                            id="shop_phonenumber" 
                            name="shop_phonenumber"  
                            placeholder="0801 234 5678" 
                            className={ error?.phonenumber_error ?
                                "focus-visible:outline-danger outline-danger outline-2  outline-offset-2 border  p-4 rounded-control w-full" 
                                : "border border-line p-4 rounded-control w-full" }
                            value={shopdata.shop_phonenumber} 
                            onChange={(e) => handleShopChange(e)}
    
                            />
                            <Caption text={"Buyers will message this number."}/>
                             {/*error message is shown based on boolean state as well as the style implementation  */}
                            {error?.phonenumber_error && (<p className={`${error.phonenumber_error && "error"}`}>{error.phonenumber_error}</p>)}
                        </div>
                </CreateShop>
                
                <div className=" border-t border-line p-5 h-14">
                    <Button label={'Create Shop'} className={'btn min-h-control w-full'} onEvent={() => {formRef.current.requestSubmit()}}/>
                </div>
            </main>

        </div>
    )
}