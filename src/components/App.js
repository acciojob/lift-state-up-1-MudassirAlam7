
import React, { useState } from "react";
import './../styles/App.css';
import ChildButton from "./Child";

const Parent = () => {
  const [showModal, setShowModal] = useState(false)
 
  return (
    <div className="parent">
      <h2>Parent Component</h2>
      <ChildButton setShowModal = {()=>setShowModal(true)}/>
        {
          showModal && (
            <div>
              <h4>This is a modal content</h4>
            </div>
          )
        }
        
    </div>
  )
}

export default Parent
