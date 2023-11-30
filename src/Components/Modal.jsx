import './Modal.css'
const Modal=({setisModalVisible,modalData})=>{
    function removeModal(){
        setisModalVisible(false)
    }
    return( 
        <div className="modal">
            <div onClick={removeModal} className='removeModal'>X</div>
            <div className='modalImage'>
                <img src={modalData.image} alt="" />
            </div>
            <div className='about'>
                <span><span style={{color: 'red'}}>Name:</span> {modalData.name}</span>
                <p><span style={{color: 'red'}}>About:</span> {modalData.about}</p>
                <p><span style={{color: 'red'}}>Ingredients:</span> {modalData.ingredients}</p>
                <span><span style={{color: 'red'}}>Cooking Time:</span> {modalData.cookingTime}</span>
                <span><span style={{color: 'red'}}>Servings:</span> {modalData.servings}</span>
                <span><span style={{color: 'red'}}>Rating:</span> {modalData.rating}</span>
            </div>
        </div>
    )
}
export default Modal;