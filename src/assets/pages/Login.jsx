import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const { register, handleSubmit } = useForm()

    const dispatch = useDispatch()

    const submit = (data) => {
        axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
            .then(res => {

                localStorage.setItem('token', res.data.token)

            })
            .catch(error => {
                if (error.response.status === 401) {
                    alert('Usuario o contraseña incorrecta')
                } console.log(error)

            })

    }

    return (

        <div>

            <Form style={{ height: 350, margin: 'auto', width: 500,  padding: 50, 
         }} onSubmit={handleSubmit(submit)}>
                <h1 className='welcome'>Bienvenido! Inserta tu correo 
                    y contraseña para continuar</h1>

                    <div className='welcome_box'>
                        <h2>Test Data</h2>
                        <div><i className="fa-solid fa-envelope"></i><h2>john@gmail.com</h2></div>
                        <div><i className="fa-solid fa-lock"></i><h2>john1234</h2></div>
                    
                    
                    </div>
                <Form.Text style={{}} className="text-muted">

                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        {...register('email')} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        {...register('password')} />
                </Form.Group>

                <Button variant="primary" style={{width:'100%'}} type="submit">
                   Login
                </Button>
            </Form>

        </div>
    );
};

export default Login;