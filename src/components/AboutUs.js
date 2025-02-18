import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {

    constructor () {
        super();    
        console.log("Parent constructor")  ; 
    }

    componentDidMount() {
        console.log(" parent component did mount");
    }

    render() {
        console.log("Parent Render")   
        return (
            <div>
            <h1>This is an About Us page Class</h1>
            <h2>All detials about us will be display here</h2>
           <UserClass />
         </div>
        )
    }

}

// const AboutUs = () => {
//     return (
//         <div>
//             <h1>This is an About Us page</h1>
//             <h2>All detials about us will be display here</h2>
//             <User name={"Venkatesh vanaboina (Functional component)"} location={"Hyderabad"} profile= {"Linkedin : @Venkatesh_Vanaboina" }/>
//             <UserClass name={"Venkatesh vanaboina (Class component)"} location={"Hyderabad class"} profile= {"Linkedin : @Venkatesh_Vanaboina_class" }/>
//         </div>
//     )
// }

export default AboutUs;