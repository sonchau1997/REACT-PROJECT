import Header from "Component/Header";
import styled from "styled-components";
import SideBar from "Component/SideBar";
// import SideBar from "Component/SideBar";
// import {SideBar} from "components/SideBar"

const LayoutStyled = styled.div`
  background-color: #1c233d;
  min-height: 100vh;
  .right {
    float: right;
    width: 80%;
  }
`;
const SideBarStyled = styled.div`
  float: left;
  width: 20%;
`;
const ContentStyled = styled.div`
  background-color: #f23412;
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
        <ContentStyled>{children}</ContentStyled>
      </div>
    </LayoutStyled>
  );
};

export default PrimaryLayout;