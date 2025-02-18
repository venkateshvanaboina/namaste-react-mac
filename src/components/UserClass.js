import React from "react";

class UserClass extends React.Component {
    constructor(){
        super();
        this.state = {
            userInfo: {
                name: "Venkatesh",
                id: 123,
                location: "Visakhapathnam",
                avatar_url : "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
            }
        }

        // console.log(this.props.name + " child Constructor method");
    }

    async componentDidMount() {
        console.log("chile mount")
        const fetchData = await fetch("https://api.github.com/users/venkateshvanaboina");
        const json = await fetchData.json();

        // console.log(json);

        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate() {
        console.log("Component got updated");
    }

    componentWillUnmount () {
        console.log("Component will unmount");
    }



    render () {
        const {id, name, location, avatar_url, html_url} = this.state.userInfo
        // console.log(this.props.name +" child Render method");
        return (
            <div className="user-container">
            <div className="user-card">
                <img className="user-img" src={avatar_url}></img>
                <h1>Name : {name}</h1>
                <h2>ID : {id}</h2>
                <h3>Location : {location}</h3>
                <h3>Github URL : {html_url}</h3>
            </div>
            </div>
        )
    }

}

export default UserClass;