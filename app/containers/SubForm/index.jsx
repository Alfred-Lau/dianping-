import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const FormItem = Form.Item;

export default class NormalLoginForm extends React.Component {
    handleClick = () => {
        
    }
    render () {
        return (
            <Form>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
                </FormItem>
                <FormItem>
                    <Button type='primary' htmlType='submit' onClick={this.handleClick}>
            Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
