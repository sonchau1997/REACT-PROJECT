
//import { Link } from "react-router-dom";
import logo from "assets/logo.svg"
import { styled } from "styled-components";
import Dashboard from "assets/dashboard.svg";
import Market from "assets/market.svg";
import ActiveBids from "assets/activeBids.svg";
import MyPortfolio from "assets/myPortfolio.svg";
import Wallet from "assets/wallet.svg";
import Favourites from "assets/favourites.svg"
import History from "assets/history.svg";
import Settings from "assets/setting.svg";
import LightMode from "assets/lightMode.svg";
import Day from "assets/day.svg";
import Night from "assets/night.svg";
//import { Button } from 'Component/Button';
import ETH from "assets/Ethereum (ETH).svg";
import Add from "assets/add.svg";
import Arrow from "assets/arrow-right.svg";


import { NavLink } from "react-router-dom";


const SideBarStyled = styled.div`
  background-color: #ffffff ;
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
const StyledCard = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
  padding: 24px;
  background:linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);

  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;

  /* Text/color2 */

  color: #747475;
  .title {
 

font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
/* identical to box height */
color: #E0DEE6;

  }
 
  .amount {
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262E;
  }
  .ETH{
    display: flex;
    justify-content:space-around;
    gap:10px;
  }
  .content{
    font-size: 24px;
    line-height: 31px;

    /* Text/color1 */

    color: #27262E;

  }
  .btn-add{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 14px 16px;
width: 196px;
height: 49px;

background: #FFFFFF;
border-radius: 12px;
  }
  `
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

const NavItem = ({ text, path, img }) => {
  return (
    <StyledNavItem>
      <img src={img} alt="nav-icon"></img>
      <NavLink to={path}>{text}</NavLink>
    </StyledNavItem>
  )
}
export const CardSideBarItem = () => {
  return <StyledCard >
    <div className='title'>
      Your Balance
    </div>
    <div>
      <h1>1,034.02</h1>

    </div>
    <div>
      <div className="ETH">
        <div> <img src={ETH} alt="eth" /></div>
        <div> <span>ETH</span></div>
      </div>

    </div>

    {/* <Button boderColor="#E9E9E9">Top Up Balance</Button> */}
    <div >
      <button className="btn-add"><img src={Add} alt="add" /> Top Up Balance <img src={Arrow} alt="arrow" /></button>
    </div>

  </StyledCard>
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
        <NavItem img={ActiveBids} text=" ActiveBids" path="/"></NavItem>

        <div className="profile">
          <h5>PROFILE</h5>
          <NavItem img={MyPortfolio} text=" My Portfolio" path="/"></NavItem>
          <NavItem img={Wallet} text=" Wallet" path="/"></NavItem>
          <NavItem img={Favourites} text=" Favourites" path="/"></NavItem>
          <NavItem img={History} text="History" path="/"></NavItem>
          <NavItem img={Settings} text=" Settings" path="/"></NavItem>
        </div>


      </div>
      <h5>OTHER</h5>
      <div className="other">
        <div>
          <NavItem img={LightMode} text=" Light Mode" path="/">
          </NavItem>
        </div>

        <div>
          <img src={Day} alt="day" />
          <img src={Night} alt="night" />
        </div>



      </div>

      <div className="card">
        <CardSideBarItem></CardSideBarItem>
      </div>


    </SideBarStyled>


  )
}
export default SideBar;