import Caption from "./ui/Caption";
import InputField from "./ui/InputField";
import TextAreaField from "./ui/textAreaField";


export default function CreateShop(){
    return(
        <div>
            <form action="" className="flex flex-col justify-self-center my-10">
                <div>
                    <InputField label={'Shop Name'} 
                    labelClassName={'font-small text-lg'}
                    name={'shop_name'} 
                    placeholder={"e.g. Ada's Thrift Corner"}
                    inputClassName={'border-line border rounded-control px-2 py-5'}/>
                </div>

                <div>
                    <TextAreaField 
                    labelClassName={'font-small text-lg text-ink'}
                    label={'Short Description'} 
                    name={'shop_description'}
                    placeholder={'What do you sell?'}
                    textAreaClassName={'border-line border rounded-control px-2 py-5'} />
                </div>

                <div>
                    <InputField
                    label={'WhatsApp number'} 
                    labelClassName={'font-small text-lg text-ink'}
                    name={'shop_name'} 
                    placeholder={"0801 234 5678"}
                    inputClassName={'border-line border rounded-control px-2 py-5'}/>
                    <Caption text={'Buyers will message this number.'}/>
                </div>
            </form>
        </div>
    )
}