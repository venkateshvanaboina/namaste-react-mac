import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    
    const {name, location, profile} = props;
    return (
        <div className="user-container">
        <div className="user-card">
            <h1>Count = {count} Functional Component</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Count Increase
            </button>
            <button onClick={() => {
                setCount(count - 1);
            }}>
                Count Decrease
            </button>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>{profile}</h3>
        </div>
        </div>
    )
}

export default User;