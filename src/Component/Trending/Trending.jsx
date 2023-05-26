import { styled } from "styled-components"

const StyledTrending=styled.div`
.title-trending{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:10px;
   
  }
  .category{
    display: flex;
    flex-direction: row;
    gap:20px;
    align-items: center;
  }
  .category p{
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #7A797D;

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
`
const Trending=()=>{
    return(
        <StyledTrending>
             <div className="title-trending">
        <h2>Trending Auctions</h2>
        <div className="category">
          <p className="art">Art</p>
          <p>Music</p>
          <p>Collectibles</p>
          <p>Utility</p>
        </div>
      </div>
        </StyledTrending>
       
    )
}
export {Trending}