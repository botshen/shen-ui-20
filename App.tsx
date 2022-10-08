import React from "react";
import Button from "./lib/button/button";


const App = () => {
    const xxx=()=>{
        console.log(11);
    }
    return (
        <div>
            <Button level="danger" onClick={xxx} >危险</Button>
        </div>
    );
};

export {App};
