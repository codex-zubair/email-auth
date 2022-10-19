import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const submitForm = (event)=> {
        event.preventDefault();
    }



    return (
        <form onSubmit={submitForm}>
                <input required type="text" name='email' placeholder='Email' />
                <br />
                <input required style={{ marginTop: '5px' }} name='password' type="text" placeholder='Password' />
                <br />
                {/* <p>{ErrorState}</p> */}
                <button style={{ marginTop: '5px' }} type='submit'>Login</button>

                <p>New to this site: <Link to = '/register'>Register</Link></p>


            </form>
        
    );
};

export default Login;