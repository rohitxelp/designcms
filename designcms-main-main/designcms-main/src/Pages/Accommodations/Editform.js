import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Accommodations/edit.css"
const Editform = () => {
  // const {sec} = useParams()

  const location = useLocation();

  const previousData = location.state.updatedData;

  console.log(previousData, "iam previous data from edit ");
  const imgurl = previousData.content_image_urls;
  return (
    <>
      <form className="editform">
        <div class="form-group">
        <input class="form-control form-control-lg" type="text" placeholder="New Property Name"/>
        <label for="exampleFormControlFile1">Example file input</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
        </div>
      </form>
   
    </>
  );
};

export default Editform;
