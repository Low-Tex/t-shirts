import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const OrderForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email' type="email" />
    </Form.Field>
    <Form.Field>
      <label>Card Details</label>
    </Form.Field>
    <Form.Group>
      <Form.Input placeholder="Card Number" width={10}>
      </Form.Input>
      <Form.Input placeholder="MM/YY" widht={3}>
      </Form.Input>
      <Form.Input placeholder="CVC" width={3}>
      </Form.Input>
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
);

export default OrderForm;
