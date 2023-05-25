import Header from "Component/Header";
import styled from "styled-components";
import SideBar from "Component/SideBar";
import SideShow from "Component/SlideShow";
// import SideBar from "Component/SideBar";
// import {SideBar} from "components/SideBar"

const LayoutStyled = styled.div`
 background: #caeae6;
  min-height: 120vh;
  .right {
    float: right;
    width: 80%;
  }
  .content{
    display: flex;
  
  }
  .content-left{
    width: 60%;
  }
  .content-right{
    width: 40%;
  }
  .sideShow{
  
  }
`;

const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;
const ContentStyled = styled.div`
background: #caeae6;
  margin-top: 64px;
  height: 100vh;
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
        </div>
        <div className="content-right">
        <ContentStyled>{children}</ContentStyled>
        </div>
        </div>
       
        
        
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;