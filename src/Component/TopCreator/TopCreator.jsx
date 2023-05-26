import Michael from "assets/jordan.svg";
import Tibao from "assets/tibao.svg";
import Teressa from "assets/teressa.svg";
import Hawn from "assets/hawn.svg";
import Alisson from "assets/alisson.svg";
import Erricson from "assets/erricson.svg";
const fakeData = [
    { id: "@jordan_", name: "Michael Jordan", avatar: Michael },
    { id: "@johnti60", name: "John Tibao", avatar: Tibao },
    { id: "@teressa", name: "Teressa", avatar: Teressa },
    { id: "@j_hawn", name: "Johan Hawn", avatar: Hawn },
    { id: "@m_alisson", name: "Maria Alisson", avatar: Alisson },
    { id: "@erricsonsam", name: "Sam Erricson", avatar: Erricson }

]
  

 const listPerson = fakeData.map((d, index) =>
     <li key={d.number}>
  <div className="item">
    <div>{index + 1}.</div>
    <img src={d.avatar} alt="avatar" />

    <div className="name-id">
      <div className="name">
        {d.name}
      </div>
      <div className="id">
        {d.id}
      </div>

    </div>
    <div>
      <button className="btn-follow">Follow</button>
    </div>

  </div>


</li>);
const TopCreator=()=>{
    return(
        <ul className="listItem" >
              {listPerson}   
        </ul>
    
    )
}
export {TopCreator}


