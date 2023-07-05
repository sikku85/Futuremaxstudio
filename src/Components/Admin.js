import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "./Spinner";
import "./Admin.css"

export const Admin = () => {
  //image fetching
  const [images, setImages] = useState([]);
  useEffect(() => {
    // Fetch the image URLs when the component mounts
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://deepak-backend.vercel.app/api/v1/upload/allimages"
      );
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // image uploader section
  const [uploadStatus, setUploadStatus] = useState("");
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);
    formData.append("tags", tags);

    try {
      await axios.post(
        "https://deepak-backend.vercel.app/api/v1/upload/cloudfileupload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(formData);
      console.log("Image uploaded successfully");

      setUploadStatus("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("Error uploading image");
    }

    setIsLoading(false);
    setTimeout(() => {
        window.location.reload();
        
    }, 2000);

  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      const data = {
        _id: id,
      };
      await axios.post("https://deepak-backend.vercel.app/api/v1/upload/deleteFile", data);
      // Handle success, such as showing a success message or updating the UI
      console.log("File deleted successfully");
      setUploadStatus("Image Deleted successfully");
    } catch (error) {
      // Handle error, such as displaying an error message or logging the error
      console.error("Error deleting file:", error);
      setUploadStatus("Error While Deleting Image");
    }
    setIsLoading(false);
    setTimeout(() => {
        window.location.reload();
        
    }, 2000);

  };

  return (
    <div>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label htmlFor="file">Image:</label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label htmlFor="tags">Tags:</label>
                <input
                  type="text"
                  id="tags"
                  value={tags}
                  onChange={handleTagsChange}
                />
              </div>
              <button className="btn" type="submit">Upload</button>
              {uploadStatus && <p>{uploadStatus}</p>}

            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              marginTop: "50px",
            }}
          >
            {images.map((imag) => (
              // <img style={{ width: '300px', height: '200px' }}  key={image._id} src={image.imageUrl}  alt="Image" />
              <div key={imag._id}>
                <div style={{ width: "300px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      padding: "1px",
                    }}
                    src={imag.imageUrl}
                    alt="Imageing"
                  />
                </div>
                <button className="btn" onClick={() => handleDelete(imag._id)}>Delete</button>
                <p></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
