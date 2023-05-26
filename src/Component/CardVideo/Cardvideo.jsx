
import Ethereum from "assets/ethereum.svg";
import { styled } from "styled-components";
const StyleCard = styled.div`
display: flex;
flex-direction:column;
  width: 348px;
  height: 364px;
  padding: 24px;
  background-color: ${({ background }) => background || "white"};
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
  row-gap:20px;
  .title-likes{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

  }
  .title{
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
width: 133px;
height: 31px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
font-feature-settings: 'salt' on;

/* Text/color1 */

color: #27262E;
  }
  .likes{
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* identical to box height */

text-align: right;
font-feature-settings: 'salt' on;

/* Text/color2 */

color: #747475;
  }
  .video img{
    width: 324px;
    height: 196px;
  }
  .avatar-id{
    display: flex;
    gap:5px;
  }
  .avatar-id p{
 @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
    
width: 80px;
height: 21px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* identical to box height */

font-feature-settings: 'salt' on;

/* Text/color2 */

color: #747475;

  }
  .currentBid-eth{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .currentBid-eth{
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 21px;
/* identical to box height */
font-feature-settings: 'salt' on;

/* Text/color2 */

color: #747475;
  }
  .ethereum{
    display: flex;
    gap:5px;
    
  }
  
`



export const CardVideo = ({ video, title, avatarAuthor, idAuthor, currentBid, likes }) => {
    return (
        < StyleCard>
            <div className="video">
                <img src={video} alt="video" />
            </div>
            <div className="title-likes">
                <div className="title">
                    {title}
                </div>
                <div className="likes">
                    {likes} Likes

                </div>
            </div>
            <div className="avatar-id">
                <img src={avatarAuthor} alt="author" />
                <p className="">{idAuthor}</p>
            </div>
            <div className=" currentBid-eth">
                <p>currentBid</p>
                <div className="ethereum">
                    <img src={Ethereum} alt="ethereum" />
                    <span>{currentBid} ETH</span>
                   
                </div>
            </div>

        </StyleCard>
    );
}
