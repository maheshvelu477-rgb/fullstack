import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const View_products = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://salon-be.vercel.app/api/gallery");
        setGallery(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };
    fetchData();
  }, []);

  const deleteGallery = async (galleryId) => {
    await axios
      .delete(`https://salon-be.vercel.app/api/delete/gallery/${galleryId}`)
      .then(() => {
        setGallery((prevGallery) => prevGallery.filter((gallery) => gallery._id !== galleryId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (

    <div>
    <div class="hero_area">
     
        <header class="header_section">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link to="/admin" class="navbar-brand">
                                        <span>
                                         Admin Page
                                        </span>
                                      </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                          
                                     <Link to="/add_products" class="nav-link">Add products<span class="sr-only">(current)</span></Link>
                                        
                                      </li>
                                      <li class="nav-item">
                                        <Link to="/all_products" class="nav-link">View pr oducts<span class="sr-only"></span></Link>
                                      </li>
                <li class="nav-item active">
    
               <Link to="/add_gallery" class="nav-link">Add Gallery<span class="sr-only">(current)</span></Link>
                  
                </li>
                <li class="nav-item">
                  <Link to="/all_gallery" class="nav-link">View Gallery<span class="sr-only"></span></Link>
                </li>
              
              </ul>
          
            </div>
          </nav>
        </header>
         </div>
<div className='userTable'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map((galleries, index) => (
            <tr key={galleries._id}>
              <td>{index + 1}</td>
              <td>
                {galleries.image ? (
                  <img 
                    src={`https://salon-be.vercel.app${galleries.image}`} 
                    alt="User" 
                    width="50" 
                    height="50" 
                    // style={{ borderRadius: "50%" }}
                  />
                ) : (
                  "No Image Available"
                )}
              </td>
              <td>
                {/* <Link to={`/update/update_gallery/${galleries._id}`} type="button" className="btn btn-info">
                  <i className="fa-solid fa-pen-to-square">Update</i>
                </Link> */}
                <Link
                    to={`/update/gallery/${galleries._id}`}
                    className="btn btn-info"
                    type="button"
                    >
                     <i className="fa-solid fa-pen-to-square">Update</i>
                </Link>
                &nbsp;
                <button
                  onClick={() => deleteGallery(galleries._id)}
                  type="button"
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash">delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>
    </div>
  );
};

export default View_products;
