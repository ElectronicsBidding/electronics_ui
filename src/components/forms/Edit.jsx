import React from 'react'
import "./form.css"

const Edit = () => {
  return (
    <>
    <div className="form-container" style={{ marginTop: "-10px" }}>
      <div className="form-box">
        <div style={{marginLeft: "20px"}}>
          <div className="form-header">
            <p>Edit Your Post</p>
          </div>
          <div className="form-input-box">
            <div>
              <label htmlFor="itemName">Item Name</label>
              <input type="text" className="form-input-field" id="itemName" required />
            </div>

            <div>
              <label htmlFor="startingPrice">Starting Price</label>
              <input type="text" className="form-input-field" id="startingPrice" required />
            </div>
            
          </div>

          <div className="form-input-box">
            
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" className="form-input-field" id="location" required />
            </div>

            <div>
              <label htmlFor="status">Item Status</label>
              <input type="text" className="form-input-field" id="status" required />
            </div>
            
          </div>

          <div className="form-input-box">
            <div>
              <label htmlFor="image">Item Image</label>
              <input type="file" className="form-input-field" style={{paddingTop: "5px"}} id="image" required />
            </div>

            <div style={{paddingLeft: "15px"}}> 
              <label htmlFor="endBidding">End of Bidding Time</label>
              <input type="date" className="form-input-field" id="endBidding" required />
            </div>
            
          </div>

          <div className="form-input-box" style={{flexDirection: "column"}}>
              <label htmlFor="description">Description</label>
              <input type="text" className="form-input-field" style={{paddingTop: "5px", width: "95%", height: "120px"}} id="description" required />
          </div>

          <div class="form-input-box">
            <input type="submit" class="form-input-submit" value="Create Post" style={{width: "96%", fontSize: "23px", height: "60px"}} />
          </div>
        </div>

      </div>
      <div className="form-wrapper"></div>
    </div>
  </>
  )
}

export default Edit