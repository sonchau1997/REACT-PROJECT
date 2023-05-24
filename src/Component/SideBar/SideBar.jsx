
//import { Link } from "react-router-dom";
import logo from "assets/logo.svg"
import { styled } from "styled-components";
import Dashboard from "assets/dashboard.svg";
import Market from "assets/market.svg";
import  ActiveBids from "assets/activeBids.svg";
import  MyPortfolio from "assets/myPortfolio.svg";
import Wallet from "assets/wallet.svg";
import Favourites from "assets/favourites.svg"
import History from "assets/history.svg";
import Settings from "assets/setting.svg";
import LightMode from "assets/lightMode.svg";
import Day from "assets/day.svg";
import Night from "assets/night.svg";
import { Card } from "Component/Card";

import { NavLink } from "react-router-dom";


 const SideBarStyled = styled.div`
  background-color: white ;
  height: 100vh;
  padding: 32px;
 
  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 54px;
  }
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262E;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7A797D;

  }
  .other{
    display: flex;
    justify-content:space-between;
  }
 
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7A797D;
  margin-bottom: 25px;
  a {
    text-decoration: unset;
    color: #7A797D;
  }`

const NavItem = ({text, path,img}) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}
const SideBar = () => {

    return (


        <SideBarStyled>
            < div className="logo">
                <img src={logo} alt="logo" />
                <div>
                    <div className="logo-text">MyNFT</div>
                    <div className="logo-desc">NFT Marketplace</div>

                </div>
            </div>
            <div className="navItem">
            <NavItem img={Dashboard} text="Dashboard" path="/"></NavItem>
            <NavItem img={Market} text="Market" path="/"></NavItem>
            <NavItem img={ ActiveBids} text=" ActiveBids" path="/"></NavItem>
            
            <div className="profile">
              <h5>PROFILE</h5>
              <NavItem img={ MyPortfolio} text=" My Portfolio" path="/"></NavItem>
              <NavItem img={ Wallet} text=" Wallet" path="/"></NavItem>
              <NavItem img={ Favourites} text=" Favourites" path="/"></NavItem>
              <NavItem img={History} text="History" path="/"></NavItem>
              <NavItem img={ Settings} text=" Settings" path="/"></NavItem>
              </div>


            </div>
            <h5>OTHER</h5>
            <div className="other">
              <div>
              <NavItem img={ LightMode} text=" Light Mode" path="/">
              </NavItem>
              </div>
              
              <div>
              <img src={Day} alt="day" />
              <img src={Night} alt="night" />
              </div>
              

              
            </div>
           
            <div className="card">
            <Card title={"Revenue"} amount="5.00" percent={12.3}></Card> 
            </div>


        </SideBarStyled>


    )
}
export default SideBar;