import Cards from "./Cards";
import apiList from "../utils/mockdata";

const Body = () => {
    return (
    <div className="body" >
       <div className="searchbar">
          SearchBar
       </div>
       <div className="card-container">
          {
          apiList.map((hotels) => (          
          <Cards key={hotels.card.card.info.id}  resData= {hotels} />
          ))
          }
       </div>
    </div>
     
    )
    }

    export default Body;