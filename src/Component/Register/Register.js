import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { app } from '../../Firebase/Firebase.config';

const Register = () => {
    // Authentication Setup Start
    const auth = getAuth(app);
    // Authentication Setup End




    const submitForm = (event) => {
        event.preventDefault();


        const email = event.target.email.value;
        const password = event.target.password.value;



        // Creating User with Email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => console.log(user))
            .catch(error => console.log(error));

    }
    return (
        <div>
            <h1>
                Sign Up
            </h1>

            <form onSubmit={submitForm}>
                <input type="text" name='email' placeholder='Email' />
                <br />
                <input style={{ marginTop: '5px' }} name='password' type="text" placeholder='Password' />
                <br />
                <button style={{ marginTop: '5px' }} type='submit'>Submit</button>

            </form>
        </div>
    );
};

export default Register;