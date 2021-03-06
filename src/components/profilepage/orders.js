import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 
import Empty from '../emptypage/emptypage';
import Image from 'react-bootstrap/Image'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion';

import { MDBIcon } from 'mdbreact';


function Orders(props) {
  const user = useSelector(state=>state.user)
  return (
    <>
       <Accordion defaultActiveKey="0">
         {user.paymentsHistory.map((order,index)=>{
           return (
            <Card id="letsRock">
              <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={index+1}>
          <MDBIcon icon="chevron-down" />
          </Accordion.Toggle>
          order id: {order._id}{'   '}
          Total: {order.cost}
        </Card.Header>

        <Accordion.Collapse eventKey={index+1}>
        <Table style={{minHeight:'40vh'}}>
        <thead>
          <tr id="tableHeader">
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>

        {order.productID.map(product=>{
           let price = product.price;
          //  let quantity = item.quantity;
           let sale = product.sale;
           let per = (price / 100) * sale;
          return(
             <tbody>
              <tr>
                <td id='firstTd'>
                  <div class="image">
                    <Link to={`/product/${product._id}`}>
                      <img alt="productImage" style={{width:'70px'}} src={product.images[0]} />
                    </Link>
                  </div></td>
          <td id='secondTd'>{product.name} <p><span style={{fontWeight:'bold'}}>ID:</span> {product._id}</p></td>
                <td id='thirdTd'>  <br /> Price :{price } JOD
                </td>
              </tr>
            </tbody>
          )
        })}
        </ Table >
        </Accordion.Collapse> 
               </Card>
           )
         })}
              </Accordion> 
 
    </>
  );
}

export default Orders;
