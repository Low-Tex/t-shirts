import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import PowerUp from './powered_by_stripe.svg';

const TshirtOptions = [
  {
    key: 's',
    value: 's',
    text: 'Small',
  },
  {
    key: 'm',
    value: 'm',
    text: 'Medium',
  },
  {
    key: 'l',
    value: 'l',
    text: 'Large',
  },
  {
    key: '2xl',
    value: '2xl',
    text: '2 X-Large',
  },
];

const OrderForm = () => (
  <div>
    <Form>
      <Form.Input label='First Name' placeholder='First Name' required/>
      <Form.Input label='Last Name' placeholder='Last Name' required/>
      <Form.Input label='Email' placeholder='Email' type='email' required/>
      <Form.Select label="T-Shirt Size" placeholder="Select a size" options={TshirtOptions} required/>
      <Form.Field>
      </Form.Field>
      <Form.Group>
        <Form.Input label='Card Number' placeholder='4242424242' width={10} required/>
        <Form.Input label='Expiry Date' placeholder='MM/YY' width={3} required/>
        <Form.Input label='CVC' placeholder='123' width={3} required/>
      </Form.Group>
      <Form.Field style={{display: 'flex', justifyContent: 'center'}}>
        <img src={PowerUp} alt='Powered by Stripe' style={{flex: 'none'}}/>
      </Form.Field>
      <Form.Field style={{display: 'flex', justifyContent: 'center'}}>
        <Button type='submit' style={{flex: 'none'}}>Submit</Button>
      </Form.Field>
    </Form>
  </div>
);

export default OrderForm;
