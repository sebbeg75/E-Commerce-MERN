import React, { useRef, useEffect } from 'react'
import { Form, Input, Button, notification } from 'antd';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Login = () => {
    const emailInput = useRef(null);
    const history = useHistory();
    useEffect(() => {
        emailInput.current.focus()
    }, [])
    const onFinish = user => {
      login(user)
      .then(()=>{
        notification.success({
            message: 'User connected successfully'
        });
        history.push('/') 
      })
      .catch(error=>{
          console.error(error)
          notification.error({
            message: 'Worng credentials',
            description:'Invalid email and password'
        })
      })
    };
    return (
        <div className="loginContainer">
            <Form
                className="loginForm"
                {...layout}
                // name="basic"
                // initialValues={{email:'yo@yo.yo', password: '12345' }}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'E-mail required' }]}
                >
                    <Input ref={emailInput}/>
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'Required password' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Conectarse
          </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;