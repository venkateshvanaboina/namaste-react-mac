import REST_IMG  from "../utils/constants"

const Cards = (props) => {
    const {resData} = props
    //const {name, areaName, cuisines, avgRating, costForTwo} = resData?.data.cards[0].card.card.info;
    const {name, areaName, cuisines, avgRating, costForTwo} = resData?.info;
      
      return (
        //   <div className="cards">
        //       <img className="image-1" alt="image1" src={REST_IMG + resData?.card?.card?.info.cloudinaryImageId}></img>
        //       <h4>{name}</h4>
        //       <h4>{areaName}</h4>
        //       <h4>{cuisines.join(",")}</h4>
        //       <h4>{avgRating}</h4>
        //       <h4>Price :{costForTwo}</h4>
        //   </div>

        <div className="cards">
            <img className="image-1" alt="imag1" src={REST_IMG + resData.info.cloudinaryImageId}></img>
            <h4>{name}</h4>
           <h4>{areaName}</h4>
           <h4 className="cuisines-text">{cuisines.join(",")}</h4>
           <h4>{avgRating}</h4>
           <h4>{costForTwo}</h4>
        </div>

      )
  }

  export default Cards;