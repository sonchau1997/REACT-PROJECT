import Header from "Component/Header";
import styled from "styled-components";
import SideBar from "Component/SideBar";
import SideShow from "Component/SlideShow";
// import SideBar from "Component/SideBar";
// import {SideBar} from "components/SideBar"
import Michael from "assets/jordan.svg";
import Tibao from "assets/tibao.svg";
import Teressa from "assets/teressa.svg";
import Hawn from "assets/hawn.svg";
import Alisson from "assets/alisson.svg";
import Erricson from "assets/erricson.svg";
import { CardVideo } from "Component/CardVideo";
import ApeInLove from "assets/apeinlove.svg";
import SmillingApe from "assets/smilleape.svg";







const LayoutStyled = styled.div`
 background: #caeae6;
  min-height: 200vh;
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
    display: flex;
    flex-direction: column;
    
  }
  .content-right{
    display: flex;
    width: 40%;
    margin-right:50px;
    flex-direction: column;
  }
  .listItem{
    display: flex;
    flex-direction: column;
    row-gap:20px;
  }
  li{
    list-style: none;
   
  }
  ul{
    padding:0;
  }
  .top-creator{
    background-color: white;
    width: 400px;
    height: 600px;
    margin-top:50px;
    margin-left:30px;
    border-radius:20px;
    .title{
      display: flex;
     justify-content: space-around;
     align-items: center;
   
    }
    .title h2{
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
font-feature-settings: 'salt' on;
color: #27262E;
    }
 
  
  }
  .item{
    display: flex;
    justify-content:space-around;
    align-items: center;


  }

  .name-id{
   width: 30%;
  }
  .name{
  font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
/* identical to box height */

font-feature-settings: 'salt' on;

/* Text/color1 */

color: #27262E;

  }
  .id{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
/* identical to box height */

font-feature-settings: 'salt' on;

/* Text/color2 */

color: #747475;




  }
.btn-follow{
  border-radius:20px;
  background: rgba(84, 41, 255, 0.1);
  width: 77px;
  height: 32px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #5429FF;
  border:none;


  }
  .title-trending{
    display: flex;
    justify-content: space-around;
    align-items: center;
   
  }
  .category{
    display: flex;
    flex-direction: row;
    gap:20px;
 
   
  }
.art{
display: flex;
justify-content: center;
align-items: center;
width: 45px;
height: 28px;
text-align: center;
color: #5429FF;
background: rgba(84, 41, 255, 0.1);
border-radius: 30px;


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
const fakeData = [
  { id: "@jordan_", name: "Michael Jordan", avatar: Michael },
  { id: "@johnti60", name: "John Tibao", avatar: Tibao },
  { id: "@teressa", name: "Teressa", avatar: Teressa },
  { id: "@j_hawn", name: "Johan Hawn", avatar: Hawn },
  { id: "@m_alisson", name: "Maria Alisson", avatar: Alisson },
  { id: "@erricsonsam", name: "Sam Erricson", avatar: Erricson }

]
const listPerson = fakeData.map((d, index) => <li key={d.number}>


  <div className="item">
    <div>{index + 1}.</div>
    <img src={d.avatar} alt="avatar" />

    <div className="name-id">
      <div className="name">
        {d.name}
      </div>
      <div className="id">
        {d.id}
      </div>

    </div>
    <div>
      <button className="btn-follow">Follow</button>
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
            <div className="title-trending">
              <h2>Trending Auctions</h2>
              <div className="category">
                <p className="art">Art</p>
                <p>Music</p>
                <p>Collectibles</p>
                <p>Utility</p>
              </div>


            </div>
            <CardVideo title={"Ape In Love"} avatarAuthor={Tibao} video={ApeInLove} idAuthor={"@johnti60"} likes={"21.5k"}currentBid={"9.10"}></CardVideo>
            <CardVideo title={"Smilling Ape"} avatarAuthor={Alisson} video={SmillingApe} idAuthor={"@m_alisson"} likes={"21.5k"} currentBid={"6.12"}></CardVideo>






          </div>

          <div className="content-right">
            <ContentStyled>{children}</ContentStyled>
            <div className="top-creator">
              <div className="title">
                <h2>Top Creator</h2>
                <p>see All</p>
              </div>
          

              <ul className="listItem" >
                {listPerson}
              </ul>

            

              


            </div>

          </div>
        </div>



      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;