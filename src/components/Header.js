import React from "react";

const Header = (props) => {
    return (
        <>
            <img src={props.profileImg} />
            <h1>{props.userName}</h1>
        </>
    );
}

export default Header;
