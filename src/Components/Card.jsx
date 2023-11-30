import './Card.css'
import { useState } from 'react'
const Card =({about, basketItems ,cookingTime, id, image, ingredients, match, name, rating, servings,setisModalVisible,setModalData,addToBasket})=>{
    const [cardCount,setCardCount] = useState(null);
    function cardClickFunc(){
        setisModalVisible(true)
        setModalData({about, cookingTime, image, ingredients, match, name, rating, servings});
    }
    
    function addBasket(){
        if (!isItemBasket()) {
            addToBasket({ about, cookingTime, image, ingredients, match, name, rating, servings, id });
          }
          setCardCount(cardCount+1)
    }
    function isItemBasket() {
        return basketItems.find(item => item.id === id);
      }
    return(
        <div className="card">
            <div className='imageBox'>
                <div className='image'>
                <i onClick={addBasket} class="fa-solid fa-basket-shopping">
                    <div className='count'>{cardCount}</div>
                </i>
                    <img onClick={cardClickFunc} src={image} alt="" />
                </div>
                <div className='match'>{match}</div>
            </div>
            <div className='description'>
            <span>{name}</span>
            </div>
        </div>
    )
}
export default Card;