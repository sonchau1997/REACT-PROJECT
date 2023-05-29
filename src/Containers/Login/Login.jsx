import { styled } from "styled-components";
import Arrow from "assets/arrow.png";
import Google from "assets/Google.png";
import Github from "assets/Github.png";
import FaceBook from "assets/Facebook.png";
import People from "assets/Character-working-laptop-sitting-chair.png";
import Plant from "assets/cactus.png";

import React from 'react';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    if (values.username !== 'erikras') {
        return { username: 'Unknown username' }
    }
    if (values.password !== 'finalformrocks') {
        return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
}
const SylesLogin = styled.div`
.container{
    margin: auto;
    width: 1920x;
    height: 1080px;
    background-color: aqua;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
};
.content {
    display: flex;
    margin: 264px 80px 100px 80px;
    width: 1248px;
    height: 579px;
    background-color: white;
    border-radius: 20px;
};
.left-content {
    display: flex;
    width: 70%;
};
.login-form {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-left: 50px;
    color: red;
};
.title {
    width: 166px;
    height: 84px;
};



.flex-item {
    display: flex;
    justify-content: space-between;
};
.login-form input {
    width: 478px;
    height: 46px;
    background-color: #8EC5FC;
    border-radius:12px;
};
.btn-login-with-icon {
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #D885A3;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 150px;
    height: 46px;
    margin-top: 50px;
    margin-left: 170px;
};
.btn-login-with-icon img {
    width: 10px;
    height: 10px;
    margin-left: 10px;
};
.login {
    display: flex;
    justify-content: space-around;
};

.google,
.facebook,
.github {
    box-sizing: border-box;
    text-align: center;
    width: 125px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #6096B4;
    border-radius: 40px;
};

.google,
.facebook,
.github img {
    padding-top: 10px;
};
.left-content p {
    text-align: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #6096B4;
};
.right-content {
    display: flex;
    background-color: #4295daa1;
    width: 30%;
    border-radius: 20px;
    padding-right: 0;
};

.right-content .tree {
    position: relative;
    width: 198px;
    height: 550px;
    left: 150px;
};

.right-content .people {
    position: relative;
    width: 552px;
    height: 542px;
    right: 500px;
};


    
`

const Login = () => (
    <SylesLogin>
        <div className="container">
            <div className="content">
                <div className="left-content">
                    <Form
                        onSubmit={onSubmit}
                        validate={values => {
                            const errors = {}
                            if (!values.username) {
                                errors.username = 'Required'
                            }
                            if (!values.password) {
                                errors.password = 'Required'
                            }
                            return errors
                        }}
                        render={({
                            submitError,
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <div className="login-form">
                                    <div className="title">
                                        <h1>Login</h1>
                                    </div>
                                    <Field name="username">
                                        {({ input, meta }) => (
                                            <div className="username">
                                                <label>Username</label>
                                                <div>
                                                    <input className="usernamein" {...input} type="text" placeholder="Username" />
                                                    {(meta.error || meta.submitError) && meta.touched && (
                                                        <span>{meta.error || meta.submitError}</span>
                                                    )}

                                                </div>

                                            </div>
                                        )}
                                    </Field>
                                    <Field name="password">
                                        {({ input, meta }) => (
                                            <div className="password">
                                                <label>Password</label>
                                                <div>
                                                    <input {...input} type="password" placeholder="Password" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}

                                                </div>

                                            </div>
                                        )}
                                    </Field>
                                    {submitError && <div className="error">{submitError}</div>}
                                    <div className="buttons">
                                        <button className="btn-login-with-icon" type="submit" disabled={submitting}>
                                            Login
                                            <img src={Arrow} alt="" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={form.reset}
                                            disabled={submitting || pristine}
                                        >
                                            Reset
                                        </button>
                                    </div>

                                </div>
                                <div>
                                    <p>or continute with</p>
                                </div>

                                <div className="login">
                                    <div className="google">
                                        <img src={Google} alt="google" />

                                    </div>
                                    <div className="github">
                                        <img src={Github} alt="github" />
                                    </div>
                                    <div className="facebook">
                                        <img src={FaceBook} alt="facebook" />
                                    </div>
                                </div>
                                <div>
                                    <p>Don't have an account yet?<a href="#">Singup for free</a></p>
                                </div>



                            </form>




                        )}
                    />



                </div>
                <div className="right-content">
                    <img class="tree" src={Plant} alt="plant" />
                    <img class="people" src={People} alt="people" />
                </div>



            </div>

        </div>




    </SylesLogin>





)

export default Login;










