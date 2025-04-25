import React from "react";
const ChildButton = ({setShowModal})=>{
    return(
        <div>
            <h3>Child Component</h3>
        <button onClick={setShowModal}>Show Modal</button>
        </div>
    )
}
export default ChildButton