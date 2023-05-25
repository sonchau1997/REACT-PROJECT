import Header from "Component/Header";
import styled from "styled-components";
import SideBar from "Component/SideBar";
import SideShow from "Component/SlideShow";
// import SideBar from "Component/SideBar";
// import {SideBar} from "components/SideBar"


const LayoutStyled = styled.div`
 background: #caeae6;
  min-height: 1200vh;
  .right {
    float: right;
    width: 80%;
  }
  .content{
    display: flex;
    margin-top:40px;
  
  }
  .content-left{
    width: 60%;
    
  }
  .content-right{
    display: flex;
    width: 40%;
    margin-right:50px;
    flex-direction: column;
  }
  .top-creator{
    //display: flex;
    justify-content:space-around;
    background-color: white;
    width: 348px;
    height: 478px;
    margin-left:70px;
    .title{
width: 137px;
height: 31px;


font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
font-feature-settings: 'salt' on;

/* Text/color1 */

color: #27262E;

    }
  
  }

`;

const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;
const ContentStyled = styled.div`
background: #caeae6;
  margin-top: 64px;
   height: 50vh; 
`;
const fakeData=[
  {number:"1",id:"@jordan_",name:"Michael Jordan",avatar:"avatar"},
  {number:"2",id:"@jordan_",name:"Michael Jordan",avatar:"avatar"}
]
const listPerson = fakeData.map((d) => <li key={d.number}>
<div>
 
  <div>
  {d.number}
  {d.avatar}
  <div>
    {d.name}</div>
  <div>
    {d.id}
  </div>
  </div>
 
</div>
  
  
  </li>);

const PrimaryLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <SideBarStyled >
        <SideBar></SideBar>
      </SideBarStyled>

      <div className="right">
        <Header />
        <div className="content">
          <div className="content-left">
            <SideShow className="sideShow"></SideShow>
          </div>
          <div className="content-right">
            <ContentStyled>{children}</ContentStyled>
            <div className="top-creator">
              <div></div>
              <p className="title">Top Creator</p>
              <p>see more</p>
              <div >
                {listPerson}
              </div>
             
         
            </div>
          
          </div>
        </div>



      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;