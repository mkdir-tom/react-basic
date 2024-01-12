import React from "react";


function Profile (props) {
    const {name, imageUrl} = props.data
    return (
        <div>
            <h1>Kraiwit Butsamrit</h1>
            <hr />
            <h3>{name}</h3>
            <img src={imageUrl} alt="" />
        </div>
    )
}
export default Profile