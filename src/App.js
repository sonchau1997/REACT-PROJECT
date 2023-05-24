
import About from 'Containers/About';
import './App.css';
//import arrowImg from 'assets/arrow.svg';
//import { Button } from 'Component/Button';
//import { Card } from 'Component/Card';
import Home from 'Containers/Home';
import Login from 'Containers/Login';
import { Routes, Route } from "react-router-dom";
import PageNotFound from 'Containers/404Page';
import PrimaryLayout from 'Component/Layout';


//import { styled } from 'styled-components';
/* const AppWrapper = styled.div`
  text-align: center;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: #27262E;
  }
`; */
function App() {
  return (
    // <AppWrapper>
    //   <header className="App-header">
    //     {/* <Button percent={10} onClick={() => console.log("Clickkkk")}><span>Click</span>Me</Button>
    //     <Button boderColor="red" percent={-109}>109%</Button>
    //     <Button textColor="white" bgColor="transparent" boderColor="white">0%</Button>
    //     <Button width={77} height={32} textColor="white" bgColor="#5429FF">Following</Button>
    //     <Button width={77} height={32} textColor="#5429FF" bgColor="rgba(84, 41, 255, 0.1)">Follow</Button>
    //     <Button img>Top up Balance</Button>
    //     <Button  >
    //      Top up Balance
    //      <img src={arrowImg} alt="icon" />
    //     </Button> */}
    //    {/*  <div class="Card-container">
    //     <Card title={"Revenue"} amount="5.00" percent={12.3}></Card> 
    //     <Card title={"Spending"} amount="2.00" percent={8.1}></Card> 
    //     <Card title={"Roi"} content="+14.02" percent={-5.1}></Card> 
    //     <Card title={"Estimated"} amount="7.00" percent={3.2}></Card> 
    //     </div> */}



    //   </header>
    // </AppWrapper>
    <PrimaryLayout>
            <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </PrimaryLayout>




  );
}

export default App;
