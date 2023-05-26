
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
  .video img{
    width: 324px;
    height: 196px;
  }
  .avatar-id{
    display: flex;
    gap:5px;
  }
  .currentBid-eth{
    display: flex;
    justify-content: space-between;
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
                <p>{idAuthor}</p>
            </div>
            <div className=" currentBid-eth">
                <p>currentBid</p>
                <div>
                 
                 
                    <img src={Ethereum} alt="ethereum" />{currentBid} ETH
                </div>
            </div>

        </StyleCard>
    );
}
