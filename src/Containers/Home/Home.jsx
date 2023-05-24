import { Card } from "Component/Card"
import "./Home.css"
import { styled } from "styled-components";
const AppWrapper = styled.div`
  text-align: center;
`;

 const Home=()=>{
    return(


      
      <AppWrapper>
      <header className="App-header">
    
        <div class="Card-container">
        <Card title={"Revenue"} amount="5.00" percent={12.3}></Card> 
        <Card title={"Spending"} amount="2.00" percent={8.1}></Card> 
        <Card title={"Roi"} content="+14.02" percent={-5.1}></Card> 
        <Card title={"Estimated"} amount="7.00" percent={3.2}></Card> 
        </div>
   

      </header>
    </AppWrapper>
    
  
  
    )
 };
export default Home;