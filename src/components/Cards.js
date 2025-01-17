import REST_IMG  from "../utils/constants"

const Cards = (props) => {
    const {resData} = props
    const {name, areaName, cuisines, costForTwo} = resData?.card.card.info
      
      return (
          <div className="cards">
              <img className="image-1" alt="image1" src={REST_IMG+resData.card.card.info.cloudinaryImageId}></img>
              <h4>{name}</h4>
              <h4>{areaName}</h4>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{costForTwo}</h4>
          </div>
      )
  }

  export default Cards;