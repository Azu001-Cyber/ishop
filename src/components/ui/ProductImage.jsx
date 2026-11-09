

export default function ProductImage({productImage, productName, className}){
    return(
        <>
            <img src={productImage} alt={productName} className={className} />
        </>
    )
}