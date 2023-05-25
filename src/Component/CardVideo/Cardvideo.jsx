
import Ethereum from "assets/ethereum.svg";
import { styled } from "styled-components";
const StyleCard = styled.div`
  padding: 24px;
  background-color: ${({ background }) => background || "white"};
  border-radius: 20px;
  font-size: 12px;
  line-height: 16px;
`

    

export const CardVideo = ({ video, title, avatarAuthor, idAuthor, currentBid, likes }) => {
    return (
        < StyleCard>
            <div>
             <img src={video} alt="video" />
            </div>
            <div>
                <div className="title">
                    {title}
                </div>
                <div className="likes">
                    {likes} Likes

                </div>
            </div>
            <div>
                <img src={avatarAuthor} alt="author" />
                <p>{idAuthor}</p>
            </div>
            <div>
                <p>currentBid</p>
                <div>
                 
                    {currentBid}
                    <img src={Ethereum} alt="ethereum" />ETH
                </div>
            </div>

        </StyleCard>
    );
}
