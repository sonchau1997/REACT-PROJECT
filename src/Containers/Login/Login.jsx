import { styled } from "styled-components";
import Arrow from "assets/arrow.png";
import Google from "assets/Google.png";
import Github from "assets/Github.png";
import FaceBook from "assets/Facebook.png";
import People from "assets/Character-working-laptop-sitting-chair.png"
import Plant from "assets/cactus.png"
import { Form } from "react-router-dom";




const StyleLogin = styled.div`

.content {
    display: flex;
    margin: 264px 80px 100px 80px;
    width: 1920x;
    height: 1080px;
    background-color: aqua;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    
}

.left-content {
    display: flex;
    width: 70%;
}

.login-form {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-left: 50px;
}

.title {
    width: 166px;
    height: 84px;
}
input{
    border-radius:12px;
}

.password {
    margin-top: 50px;
}

.flex-item {
    display: flex;
    justify-content: space-between;
}

.login-form input {
    width: 478px;
    height: 46px;
    background-color: #8EC5FC;
}

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
}

.left-content p {
    text-align: center;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #6096B4;
}

.btn-login-with-icon img {
    width: 10px;
    height: 10px;
    margin-left: 10px;
}

.right-content {
    display: flex;
    background-color: #4295daa1;
    width: 30%;
    border-radius: 20px;
    padding-right: 0;
}

.right-content .tree {
    position: relative;
    width: 198px;
    height: 550px;
    left: 150px;
}

.right-content .people {
    position: relative;
    width: 552px;
    height: 542px;
    right: 500px;
}

.login {
    display: flex;
    justify-content: space-around;
}

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
}

.google,
.facebook,
.github img {
    padding-top: 10px;
}
    
`


const Login = () => {
    return (

        <StyleLogin>

            <div className="content">
                <div className="left-content">


                    <div className="login-form">
                        <div class="title">
                            <h1>Login</h1>
                        </div>
                        <Form>
                        <form className="form">
                            <div className="username">
                                <label>Username</label>
                                <div>
                                    <input class="usernamein" id="username" type="text" />
                                </div>

                            </div>
                            <div className="password">
                                <div className="flex-item">

                                    <label>Password</label>
                                    <span>Forgot Password</span>
                                </div>

                                <div>
                                    <input className="passwordin" id="password" type="password" />
                                </div>

                            </div>


                            <button onclick="login()" className="btn-login-with-icon" type="button">Login
                                <img src={Arrow} alt="arrow" />
                            </button>
                        </form>
                            
                        </Form>
                        
                            
                        
                        

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
                            <p>Don't have an account yet?<span>Singup for free</span></p>






                        </div>





                    </div>
                </div>
                <div class="right-content">
                    <img class="tree" src={Plant} alt="plant" />
                    <img class="people" src={People} alt="people" />



                </div>
            </div>



        </StyleLogin>








    )
}
export default Login;