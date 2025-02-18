import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

   //state Varaiable
   const [newHotel1, setnewHotel1] = useState([]);
   const[filterhotel, setFilterHotel] = useState([]);
   const [searchVal, setsearchVal] = useState("")

   //use Effect it will render after the body full render

   useEffect(() => {
      fetchData();
   },[])

   const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");

      const json = await data.json();
      //console.log(json);
      setnewHotel1(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterHotel(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
      
   }
   

   //normal Varaiable
// let newHotel = [
//    {
//       "card": {
//         "card": {
//           "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//           "info": {
//             "id": "151656",
//             "name": "Dev International",
//             "cloudinaryImageId": "fyubs4fywivonmhbv8zw",
//             "locality": "khajri road",
//             "areaName": "Mohan Nagar",
//             "costForTwo": "₹100 for two",
//             "cuisines": [
//               "North Indian",
//               "Chinese",
//               "Fast Food",
//               "Beverages"
//             ],
//             "avgRating": 4.4,
//          }
//       }
//    }
// },
// {
//    "card": {
//      "card": {
//        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//        "info": {
//          "id": "151657",
//          "name": "Dev International",
//          "cloudinaryImageId": "fyubs4fywivonmhbv8zw",
//          "locality": "khajri road",
//          "areaName": "Mohan Nagar",
//          "costForTwo": "₹100 for two",
//          "cuisines": [
//            "North Indian",
//            "Chinese",
//            "Fast Food",
//            "Beverages"
//          ],
//          "avgRating": 3.4,
//       }
//    }
// }
// },
// {
//    "card": {
//      "card": {
//        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//        "info": {
//          "id": "151658",
//          "name": "Dev International",
//          "cloudinaryImageId": "fyubs4fywivonmhbv8zw",
//          "locality": "khajri road",
//          "areaName": "Mohan Nagar",
//          "costForTwo": "₹100 for two",
//          "cuisines": [
//            "North Indian",
//            "Chinese",
//            "Fast Food",
//            "Beverages"
//          ],
//          "avgRating": 4.4,
//       }
//    }
// }
// }
// ]

if(newHotel1.length === 0) {
   return <Shimmer />
}
    return (
    <div className="body" >
       <div className="searchbar">
          <input className="input-box" type="text" value={searchVal} onChange={(e) => {
            setsearchVal(e.target.value)
          }}>
          
          </input>
          <button className="search-btn" onClick={() =>  {              
               let filtersearch = newHotel1.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchVal.toLowerCase());
               })
               setFilterHotel(filtersearch)
          }}>
            Search
          </button>
       </div>
       <div className="filter">
         <button className="filter-btn" onClick={() => {
              filterHotel = newHotel1.filter((res) => {
                return res.info.avgRating > 4.5 ;
             
            });
            setFilterHotel(filterHotel);
         }}>
            Top Rated Restaurants
         </button>
         <button className="filter-btn" onClick={() => {
            const pricefilter1 = newHotel1.filter((res1) => {
               const costForTwo = parseInt(res1.info.costForTwo.replace(/[^\d]/g, ''), 10); // Extract numeric value
               return costForTwo > 300;
               
               
            });
            setFilterHotel(pricefilter1);
         }}>
            Price filter less than 200
         </button>
       </div>
       <div className="card-container">
       
          {
          filterhotel.map((hotels) => (  
           
          <Link key={hotels.info.id} to={"/hotelmenu/" + hotels.info.id}><Cards resData= {hotels} /></Link>
          
          ))
          }
           

       </div>
    </div>
     
    )
    }

    export default Body;