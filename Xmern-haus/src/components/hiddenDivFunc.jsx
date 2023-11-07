import React, { useEffect, useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BASE_URL } from '../global'
import axios from 'axios';

function Description({description}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const [menu, setMenu] = useState([])

  useEffect(() => {
    const getPizzaDescription = async () => {
        let pizza = (await axios.get(`${BASE_URL}menus`)).data
        console.log(pizza)
        setMenu(pizza)
    }
    getPizzaDescription()
  }, []);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}> 
      {/* {...props} */}
        <Card>
          <CardBody>
            {/* {menu.map((des, index) => (
                <div className='item-description'>{des.description}</div>
            ))} */}
            <div className='item-description'>{description}</div>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default Description;