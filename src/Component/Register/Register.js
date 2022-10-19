import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../../Firebase/Firebase.config';

const Register = () => {
    // Authentication Setup Start
    const auth = getAuth(app);
    // Authentication Setup End


    //Firebase User State Set start
    const [user, setUser] = useState({});
    //Firebase User State Set End



    // Password Error Start
    const [passwordErrorState, setPasswordErrorState] = useState('Please Set Password');
    // Password Error End




    const submitForm = (event) => {
        event.preventDefault();



        const email = event.target.email.value;
        const password = event.target.password.value;


        if (password.length < 5) {
            setPasswordErrorState("Password Must be 6 Character!")
            return;
        }



        if (!/[A-Z] *[A-Z]/.test(password)) {
            setPasswordErrorState("Please provide at Least Two upper case!");
            return;
        }

        if (!/[!#%^*@]/.test(password)) {
            setPasswordErrorState("Please Provide at least one Special Character");
            return;
        }



        // Creating User with Email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                setUser(user);
                console.log(user);
            })
            .catch(error => console.log(error));


        setPasswordErrorState("Successful!");
        



    }
    return (
        <div>
            <h1>
                Sign Up
            </h1>

            <form onSubmit={submitForm}>
                <input required type="text" name='email' placeholder='Email' />
                <br />
                <input required style={{ marginTop: '5px' }} name='password' type="text" placeholder='Password' />
                <br />
                <p>{passwordErrorState}</p>
                <button style={{ marginTop: '5px' }} type='submit'>Register</button>

            </form>
        </div>
    );
};

export default Register;