import React from 'react';
import { Button, Form } from 'semantic-ui-react';

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
        <Form.Select label="T-Shirt Size" placeholder="Select a size" options={TshirtOptions}/>
        <Form.Group>
            <Form.Field width={10}>
                <label>Card Number</label>
                <input placeholder='4242424242' type="number" />
            </Form.Field>
            <Form.Field width={3}>
                <label>Expiry Date</label>
                <input placeholder='MM/YY'/>
            </Form.Field>
            <Form.Field width={3}>
                <label>CVC</label>
                <input placeholder='123' type="number" />
            </Form.Field>
        </Form.Group>
        <Button type='submit'>Submit</Button>
    </Form>
);

export default OrderForm;
