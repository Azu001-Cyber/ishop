
import Caption from '../ui/Caption' 
import Button from '../ui/Button'

export default function JoinList(){
    return (
        <>
            <form action="" className='flex flex-col gap-5'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='font-bold'>Full name</label>
                    <input type="text" name="name" id='name' placeholder="e.g. Ada Okafor" className='border border-line p-4 rounded-control'/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="number" className='font-bold'>WhatsApp number</label>
                    <input type="text" name="number" id="number" placeholder="0801 234 5678" className='border border-line p-4 rounded-control'/>
                    <Caption text={"We'll message you here."} className={'font-medium'}/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email" className='font-bold'>Email address</label>
                    <input type="email" name='email' id='email' placeholder='you@example.com' className='border border-line p-4 rounded-control'/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="select-platform" className='font-bold'>Are you currently selling on another platform?</label>
                    <select name="platform" id="select-platform" className='border border-line p-4 rounded-control'>
                        <option value="">Choose One</option>
                        <option value="non">No(I’m not selling online yet)</option>
                        <option value="whatsApp">WhatsApp only</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="jiji">Jiji</option>
                        <option value="jumia">Jumia</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='flex gap-5 p-5'>
                    <input type="checkbox" className='border border-line'/>
                    <p>Yes, i agree to receive iShop updates by email and WhatsApp. I can unsubscribe at any time.</p>
                </div>
                <div>
                    <Button label={'Join the waitlist'} className={'btn text-white'}/>
                    <Caption text={'We will only contact you about iShop updates and early access with your permission.'}/>
                </div>
            </form>
        </>
    )
}