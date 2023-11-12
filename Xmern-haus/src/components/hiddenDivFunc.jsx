import React, { useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BASE_URL } from '../global'
import axios from 'axios';
import AddToCart from './addToCartButton';
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
  }, []);

  const itemId = props.itemId

  const putCart = () => {
    const putCartCall = async () => {
      console.log('itemID',itemId)
      const new_menu_items = itemId
    

      const current_menu_items = (await axios.get(`${BASE_URL}orders/${props.userData.cart.current_order._id}`)).data.menu_item
      console.log('current menu items',current_menu_items)
      console.log('new menu itemss',new_menu_items)
      console.log(props.userData)
      
      const menu_item = [...current_menu_items, new_menu_items]
      console.log(menu_item)

      const body = {menu_item: menu_item}
      const response = (await axios.put(`${BASE_URL}orders/${props.userData.cart.current_order._id}`, body)).data
    }
    putCartCall()
  }

  const addToCart = () => {
    // console.log(props.userData)
    let user = props.userData
    putCart()
  }


  return (
    <React.StrictMode>
      <Button color="grey" onClick={toggle} style={{ marginBottom: '1rem' }}>
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
            <Button block onClick={() => addToCart()}>
              Add to Cart
            </Button>
            {/* <AddToCart itemId = {props.itemId} /> */}
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default Description;