import './Basket.css'
const Basket=({basketItems,setisBasketVisible})=>{
    function basketRemove(){
        setisBasketVisible(false)
    }
    return(
        <div className="basket">
            <div onClick={basketRemove} className='removeBasket'>X</div>
            {basketItems.map((item,index)=>{
               return <div className="card">
                <div className='imageBox'>
                    <div className='image'>
                    <i class="fa-solid fa-basket-shopping"></i>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='match'>{item.match}</div>
                </div>
                <div className='description'>
                <span>{item.name}</span>
                </div>
            </div>
            })}
        </div>
    )
}
export default Basket;