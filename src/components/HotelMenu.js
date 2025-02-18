import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Hotel_Menu } from "../utils/constants";
import { useParams } from "react-router-dom";

const HotelMenu = () => {

const[hotelMenu, setHotelMenu] = useState(null);

const {resId} = useParams();



    useEffect(() => {
        fetchHotelMenu();
    },[])

    const fetchHotelMenu = async () => {
        const data = await fetch(Hotel_Menu + resId);

        const json = await data.json();

        console.log(json);
        setHotelMenu(json.data)
    }
    if(hotelMenu === null) {
        return <Shimmer />
    }

    //destructuring
    const {name, avgRating, costForTwoMessage, cuisines} = hotelMenu?.cards[2]?.card?.card?.info;

    const {itemCards} = hotelMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>           
            <h3>{avgRating}</h3>
            <h3>{cuisines}</h3>
            <h3>{costForTwoMessage}</h3>

            <h1>Items of {name}</h1>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                ))}

            </ul>
        </div>
    )
}

export default HotelMenu;