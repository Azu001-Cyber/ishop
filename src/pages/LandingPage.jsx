import Button from "../components/ui/Button";
import TopBar from "../components/ui/TopBar";
import Caption from "../components/ui/Caption";


export default function Page() {
    return (
        <div className="bg-bg text-ink">
            <TopBar />

            <main className="max-w-sm px-5 flex flex-col max-h-96 space-y-5">

                <div className="space-y-5">
                    <h1 className="text-h1">Your products. One link. <br /> Your own online shop.</h1>
                    <p className="text-muted">Create a simple online store front, list your products, and share it with customers on WhatsApp and anywhere else.</p>
                </div>

                <div className="flex flex-col gap-5">
                    <Button to={'/create-shop'} className={'btn min-h-control'} label={'Create your shop'}
                    />
                    <Button className={'btn-ghost min-h-control'} label={'See how it works'}/>
                </div>


            </main>

            <div className="border-t border-line px-5 mt-60">
                <Caption text={"Customers don't need an account."}/>
                <Caption text={"Orders happen in your WhatsApp chat."}/>
            </div>

        </div>
    );
}