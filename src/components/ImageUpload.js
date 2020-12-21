import React from "react";
import "./ImageUpload.css";
import { Button } from "@material-ui/core";

function ImageUpload({ onChange }) {
  const [image, setImage] = React.useState(null);

  return (
    <>
      {/* <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={onChange} />
      </Button> */}
      <div className="preview">
        {image ? (
          <img className="preview__image" src={image} alt="uploaded" />
        ) : (
          <div className="preview__empty">
              hi
          </div>
        )}
        <input type="file" hidden onChange={onChange} />
      </div>
    </>
  );
}

export default ImageUpload;
