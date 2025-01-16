import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-food-restaurant-company_1287271-53813.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="copy-right">
                <h3 className="copy right">Copy right logo</h3>
            </div>
            <div className="nav-links">
                <a>About US</a>
                <a>Home</a>
                <a>Contact US</a>
                <a>Address</a>
                <a>Email US</a>
            </div>
            <div className="address">
                <h2>Office Address</h2>
                <p>
                    L v Nagar , street number- 6,
                    Old Gajuwaka,
                    Visakhapatnam,
                    530026
                </p>
            </div>
        </div>
    )
}

const Cards = (props) => {
    const { resdata } = props
    return (
        <div className="cards">
            <img className="image-1" alt="image1" src="https://b.zmtcdn.com/data/pictures/7/91727/3fa5d44b6504b1c30df33efc442ffe3a_featured_v2.jpg"></img>
            {/* <h4>{resdata.card.card.name}</h4> */}
            <h4>{resdata.info.name}</h4>
            <h4>{resdata.info.areaName}</h4>
            <h4>{resdata.info.cuisines.join(",")}</h4>


        </div>
    )
}

const apiobj = {
    "info": {
              "id": "151656",
              "name": "Dev International",
              "cloudinaryImageId": "fyubs4fywivonmhbv8zw",
              "locality": "khajri road",
              "areaName": "Mohan Nagar",
              "costForTwo": "₹100 for two",
              "cuisines": [
                "North Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
              ],
              "avgRating": 4.4,
              "parentId": "71556",
              "avgRatingString": "4.4",
              "totalRatingsString": "427",
              "promoted": true,
              "adTrackingId": "cid=23571417~p=2~adgrpid=23571417#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=151656~eid=0f5f6e9a-dfa2-42cc-9c39-06faf6552626~srvts=1736253683529~collid=83639",
              "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 11.7,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "11.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-01-07 22:30:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "23571417"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=151656&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          }    
        



const Body = () => {
    return (
        <div className="body" >
            <div className="searchbar">
                SearchBar
            </div>
            <div className="card-container">
                <Cards resdata={apiobj} />

            </div>


        </div>
    )
}

const Applayout = () => {
    return <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("myapp"));

root.render(<Applayout />);