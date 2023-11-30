import './App.css';
import { meals } from './Components/meals';
import Card from './Components/Card';
import Modal from './Components/Modal';
import { useState } from 'react'
import Basket from './Components/Basket';
import { Button } from 'antd';
function App() {
  const [isModalVisible,setisModalVisible] = useState(false)
  const [modalData, setModalData] = useState();
  const [isBasketVisible,setisBasketVisible] = useState(false)
  const [size, setSize] = useState('large');
  const [basketItems, setBasketItems] = useState([]);
  
  function basketBtn(){
    setisBasketVisible(true)
  }
  function addToBasket(item) {
    setBasketItems([...basketItems, item]);
  }
  console.log(basketItems.length);
  return (
    <div className='app'>
      {isBasketVisible && <Basket basketItems={basketItems} setisBasketVisible={setisBasketVisible}/>}
      {isModalVisible && <Modal meals={meals} modalData={modalData} setisModalVisible={setisModalVisible}/>}
    <div className='btn'>
       <Button onClick={basketBtn} type="primary" size={size}>Basket</Button>
      </div>
    <div className="cards">
      {
        meals.map((meal)=>{
          return <Card 
          about={meal.about}
          cookingTime={meal.cookingTime}
          image={meal.image}
          ingredients={meal.ingredients}
          id={meal.id}
          key={meal.id}
          match={meal.match}
          name={meal.name}
          rating={meal.rating}
          servings={meal.servings}
          setisModalVisible={setisModalVisible}
          setModalData={setModalData}
          setisBasketVisible={setisBasketVisible}
          addToBasket={addToBasket}
          basketItems={basketItems}
          />
        })
      }
    </div>
      </div>
  );
}

export default App;
