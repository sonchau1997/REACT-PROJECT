import Header from "Component/Header";
import styled from "styled-components";
import SideBar from "Component/SideBar";
import SideShow from "Component/SlideShow";
import { CardVideo } from "Component/CardVideo";
import ApeInLove from "assets/apeinlove.svg";
import SmillingApe from "assets/smilleape.svg";
import { TopCreator } from "Component/TopCreator";
import Tibao from "assets/tibao.svg";
import Alisson from "assets/alisson.svg";
import { Trending } from "Component/Trending";
const LayoutStyled = styled.div`
 background: #caeae6;
  min-height: 180vh;
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
    height: 500px;
    margin-left:155px;
    border-radius:20px;
    .title{
      display: flex;
     justify-content: space-around;
     align-items: center; 
    }
    .title h2{
     @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
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
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
font-feature-settings: 'salt' on;
color: #27262E;

  }
  .id{
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
font-feature-settings: 'salt' on;
color: #747475;
  }
.btn-follow{
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
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
  
  .card_container{
    display: grid;
    grid-template-columns: auto auto ;
    gap:10px;
    padding:10px;
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
            <Trending></Trending>
            <div className="card_container">
              <CardVideo title={"Ape In Love"} avatarAuthor={Tibao} video={ApeInLove} idAuthor={"@johnti60"} likes={"21.5k"} currentBid={"9.10"}></CardVideo>
              <CardVideo title={"Smilling Ape"} avatarAuthor={Alisson} video={SmillingApe} idAuthor={"@m_alisson"} likes={"21.5k"} currentBid={"6.12"}></CardVideo>
              <CardVideo title={"Ape In Love"} avatarAuthor={Tibao} video={ApeInLove} idAuthor={"@johnti60"} likes={"21.5k"} currentBid={"9.10"}></CardVideo>
              <CardVideo title={"Smilling Ape"} avatarAuthor={Alisson} video={SmillingApe} idAuthor={"@m_alisson"} likes={"21.5k"} currentBid={"6.12"}></CardVideo>
            </div>
          </div>
          <div className="content-right">
            <ContentStyled>{children}</ContentStyled>
            <div className="top-creator">
              <div className="title">
                <h2>Top Creator</h2>
                <p>see All</p>
              </div>
              <TopCreator></TopCreator>
            </div>

          </div>
        </div>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;