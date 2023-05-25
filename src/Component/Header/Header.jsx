import styled from "styled-components";
import SearchIcon from "assets/search-icon.svg";
import Avatar from "assets/avatar.svg";
import Noti from "assets/noti-icon.svg";

const HeaderStyled = styled.div`
  z-index: 99;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: #caeae6 ;
  align-items: center;
  text-align: center;
  margin-left: 50px;
  margin-top:30px;
  .input-with-icon{
    display: flex;
    text-align: center;
    width:461px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 35px;
    align-items: center;

  }
  .input-search{
    margin-left:20px;
    width:90%;
    height: 50px;
    background: #FFFFFF;
    border-radius: 35px;
    outline: none;
    border:none;
    
  }
  .search-icon{
  width:30px;
  height: 30px;
  margin-left:10px;
 
  

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
    width:30%;
    margin-right:50px;
  
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