import React, { useState } from 'react';
import './File_upload_layout.css'
export default function File_upload_layout() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleImageUpload = () => {
    // Perform image upload logic here, e.g., using FormData to send the image to a server
    console.log("Selected image:", selectedImage);
  };

  return (
    <div className="container">
        {/* <input className='button_upload' type='file'/> */}

        <input
        className='button_upload'
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {/* <button onClick={handleImageUpload}>Upload Image</button> */}
      {selectedImage && (
        <div>
          <h3>Selected Image Preview</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>)}
    </div>
  )
}
