import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../../Firebase/Firebase.config';

const Register = () => {
    // Authentication Setup Start
    const auth = getAuth(app);
    // Authentication Setup End


    const navigate = useNavigate();





    //  Error Start
    const [ErrorState, setErrorState] = useState('Please Set Password');
    //  Error End




    const submitForm = (event) => {
        event.preventDefault();



        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const form = event.target;


        if (password.length < 5) {
            setErrorState("Password Must be 6 Character!")
            return;
        }



        if (!/[A-Z]/.test(password)) {
            setErrorState("Please provide at Least Two upper case!");
            return;
        }

        if (!/[!#%^*@]/.test(password)) {
            setErrorState("Please Provide at least one Special Character");
            return;
        }


        const userVerify = () => {

            sendEmailVerification(auth.currentUser)
                .then(result => console.log(result))
                .catch(error => console.log(error))

                userNameUpdate(name);

        }



        // Creating User with Email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setErrorState("Please Check Your Email!");
                form.reset();
                userVerify();
                setTimeout(() => {
                    navigate('/');
                }, 2000)

            })
            .catch(error => setErrorState(error.message));




            // User Name Update Method.
        const userNameUpdate = (name)=> {

                updateProfile(auth.currentUser, 
                    { 
                        displayName: name,
                    })

                    .then(result=> console.log("updated"))
                    .catch(error => console.log(error));

        }











    }
    return (
        <div>
            <h1>
                Sign Up
            </h1>

            <form onSubmit={submitForm}>
                <input required type="text" name='name' placeholder='Name' />
                <br />
                <input required style={{ marginTop: '5px' }} type="text" name='email' placeholder='Email' />
                <br />
                <input required style={{ marginTop: '5px' }} name='password' type="text" placeholder='Password' />
                <br />
                <p>{ErrorState}</p>
                <button style={{ marginTop: '5px' }} type='submit'>Register</button>

            </form>
        </div>
    );
};

export default Register;