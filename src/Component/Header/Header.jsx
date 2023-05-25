import styled from "styled-components";
import SearchIcon from "assets/search-icon.svg";
import Avatar from "assets/avatar.svg";
import Noti from "assets/noti-icon.svg";

const HeaderStyled = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between ;
  background-color: #caeae6 ;
  .input-with-icon{
    display: flex;
    margin-left: 32px;
    margin-top: 32px;
    text-align: center;
    width:300px;
    height: 30px;
    background: #FFFFFF;
    border-radius: 35px;
    align-items: center;
  

  }
  .input-search{
    margin-left:20px;
    width:90%;
    height: 25px;
    background: #FFFFFF;
    border-radius: 35px;
    outline: none;
    border:none;
    
  }
  .search-icon{
  width:15px;
  height: 15px;
  margin-left:5px;
 
  

  }
  .noti-icon {
    width: 56px;
    height: 56px;
    background-color: white;
    border-radius: 50%;
    img {
      padding: 16px;
    }
  }
  .user-info {
    display: flex;
    gap: 24px;
    width: 30%;
  }

`;
const Header = () => {
  return (
    <HeaderStyled>
      <div className="input-with-icon">
        <img className="search-icon" src={SearchIcon} alt="search" />
        <input className="input-search" type="text" placeholder="Search Item, Collection and Account.."></input>
      </div>
      <div className="user-info">
        <div className="noti-icon"><img src={Noti} alt="noti"></img></div>
        <img src={Avatar} alt="avatar" />
      </div>
    </HeaderStyled>
  );
};

export default Header;