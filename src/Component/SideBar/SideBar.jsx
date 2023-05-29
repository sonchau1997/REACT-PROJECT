
//import { Link } from "react-router-dom";
import logo from "assets/logo.svg"
import { styled } from "styled-components";
import { ReactComponent as Dashboard } from "assets/dashboard.svg";
import { ReactComponent as Market } from "assets/market.svg";
import { ReactComponent as ActiveBids } from "assets/activeBids.svg";
import { ReactComponent as MyPortfolio } from "assets/myPortfolio.svg";
import { ReactComponent as Wallet } from "assets/wallet.svg";
import { ReactComponent as Favourites } from "assets/favourites.svg"
import { ReactComponent as History } from "assets/history.svg";
import { ReactComponent as Settings } from "assets/setting.svg";
import LightMode from "assets/lightMode.svg";
import Day from "assets/day.svg";
import Night from "assets/night.svg";
import ETH from "assets/Ethereum (ETH).svg";
import ETH1 from "assets/Ethereum (ETH) (1).svg";
import Add from "assets/add.svg";
import Arrow from "assets/arrow-right.svg";


import { NavLink } from "react-router-dom";


const SideBarStyled = styled.div`
  background-color: #ffffff ;
  padding: 32px;
  position: fixed;
 
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
    .text{
    position: absolute;
    margin-left: 12px;
    }
  
  }
 
`;
const StyledCard = styled.div`
width: 228px;
height: 220px;
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
  .eth{
position: absolute;
width: 92.74px;
height: 151.02px;
left: 80px;
opacity: 0.24;
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
  }
  .active {
    svg {
      path {
        stroke: #f30ee4;
      }  
    }
    color: #f30ee4;
  }
  .item-text {
    position: absolute;
    margin-left: 12px;
    margin-top: 2px;
  }`


export const CardSideBarItem = () => {
  return <StyledCard >
    <div className="eth"> <img src={ETH1} alt="eth" /></div>


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
        <StyledNavItem>
          <NavLink to="/">
            <Dashboard />
            <span className="item-text">Dashboard</span>
          </NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink to="/market">
            <Market />
            <span className="item-text">Market</span>
          </NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink to="/activeBids">
            <ActiveBids />
            <span className="item-text">ActiveBids</span>
          </NavLink>
        </StyledNavItem>
        <div className="profile">
          <h5>PROFILE</h5>
          <StyledNavItem>
            <NavLink to="/myPortfolio">
              <MyPortfolio />
              <span className="item-text">MyPortfolio</span>
            </NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/wallet">
              <Wallet />
              <span className="item-text">Wallet</span>
            </NavLink>

          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/favourites">
              < Favourites />
              <span className="item-text"> Favourites</span>
            </NavLink>

          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/history">
              < History />
              <span className="item-text">History</span>
            </NavLink>

          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/setting">
              < Settings />
              <span className="item-text"> Setting</span>
            </NavLink>

          </StyledNavItem>

        </div>


      </div>
      <h5>OTHER</h5>
      <div className="other">
        <div>
          <img src={LightMode} alt="lightMode" />
          <span className="text">Light Mode</span>
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