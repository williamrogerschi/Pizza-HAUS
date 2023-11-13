import React, { useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BASE_URL } from '../global'
import axios from 'axios';
import './hiddenDivFunc.css'



function Description(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [menu, setMenu] = useState([])

  useEffect(() => {
    const getPizzaDescription = async () => {
        let pizza = (await axios.get(`${BASE_URL}menus`)).data
        // console.log(pizza)
        setMenu(pizza)
    }
    getPizzaDescription()
  }, [])

  const itemId = props.itemId


  const fetchUpdatedUserData = async () => {
    try {

      const updatedUserData = await axios.get(`${BASE_URL}users/${props.userData._id}`)
      console.log('Updated user data:', updatedUserData.data)
  
      return updatedUserData.data
    } catch (error) {
      console.error('Error fetching updated user data:', error)
      throw error
    }
  }


    const putCart = async () => {
      try {

      const updatedUserData = await fetchUpdatedUserData()
      const currentOrderId = updatedUserData.cart.current_order._id 
      console.log('currentOrderId:', currentOrderId)

      const currentOrderData = await axios.get(`${BASE_URL}orders/${currentOrderId}`)

      const newMenuItems = itemId
      const currentMenuItems = currentOrderData.data.menu_item
      console.log('current menu items', currentMenuItems)
      console.log('new menu items',newMenuItems)
      
      const menuItem = [...currentMenuItems, newMenuItems]
      console.log(menuItem)

      const body = {menu_item: menuItem}
      await axios.put(`${BASE_URL}orders/${currentOrderId}`, body)
    } catch (error) {
      console.error('Error updating cart:', error)
    }
  }

  const addToCart =  async () => {
    try {
    let user = props.userData
      await putCart().then(() => {
      props.setUpdateUser(Math.random());
    })
    } catch (error) {
      console.error('Error adding Signature Pizza to the cart', error)
    }
  }


  return (
    <React.StrictMode>
      <Button className='see-btn' color="grey" onClick={toggle} style={{ marginBottom: '1rem' }}>
        See Pizza
        <img src='https://www.wisedecor.com/wp-content/uploads/2017/12/Arrow-Thirteen-Pointing-up-Lettering-Art-17-o-600x560.jpg' className='button'/>
      </Button>
      <Collapse isOpen={isOpen}> 
      {/* {...props} */}
        <Card>
          <CardBody>
            {/* {menu.map((des, index) => (
                <div className='item-description'>{des.description}</div>
            ))} */}
            <div className='item-description'>{props.description}</div>
            <Button className='pizza-btn' block onClick={() => addToCart()}>
              Add to Cart
            </Button>
            {/* <AddToCart itemId = {props.itemId} /> */}
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default Description