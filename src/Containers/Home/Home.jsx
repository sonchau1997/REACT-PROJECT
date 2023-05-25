import { Card } from "Component/Card"
import { styled } from "styled-components";
const AppWrapper = styled.div`
  text-align: center;
  
.App-header {
    display: flex;
    flex-direction: row;
    
       align-items: flex-start;
    /* justify-content: flex-end; */
    justify-content: right;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .Card-container{
    display: grid;
    grid-template-columns: auto auto ;
    gap:50px;
    padding: 10px;
  }
  
`
;
const fakeData = [
  {
    title: "Revenue",
    amount: 5.00,
    percent: 12.3,
  },
  {
    title: "Spending",
    amount: 2.00,
    percent: 12.3,
  },
  {
    title: "ROI",
    amount: 14.2,
    percent: -5.1,
  },
  {
    title: "Estimated",
    amount: 7.00,
    percent: 3.2,
  }
]

 const Home=()=>{
    return(


      
      <AppWrapper>
      <header className="App-header">
    
        <div class="Card-container">
        {
              fakeData.map((item) => <Card title={item.title} amount={item.amount} percent={item.percent}></Card>)
            }
        {/* <Card title={"Revenue"} amount="5.00" percent={12.3}></Card> 
        <Card title={"Spending"} amount="2.00" percent={8.1}></Card> 
        <Card title={"Roi"} content="+14.02" percent={-5.1}></Card> 
        <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>  */}
        </div>
   

      </header>
    </AppWrapper>
    
  
  
    )
 };
export default Home;