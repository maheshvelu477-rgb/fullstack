import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";



function Gallery(){

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

return(
    <div>
         {/* <!-- Spinner Start --> */}
    {/* <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End --> */}


    {/* <!-- Navbar Start --> */}
    <div class="container-fluid bg-light sticky-top p-0">
        <nav class="navbar navbar-expand-lg navbar-light p-0">
             <Link to="/home" class="navbar-brand bg-primary py-4 px-5 me-0">
                            <h1 class="mb-0"><i class="bi bi-scissors"></i>Salone</h1>
                        </Link>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse p-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <Link to="/home" class="nav-item nav-link ">Home</Link>
                    <Link to="/about" class="nav-item nav-link ">About</Link>
                    <Link to="/service" class="nav-item nav-link ">Services</Link>
                    <Link to="/price" class="nav-item nav-link">Price</Link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu bg-light mt-2">
                            <Link to="/gallery" class="dropdown-item">Gallery</Link>
                            <Link to="/blog" class="dropdown-item">Beauty Blog</Link>
                            <Link to="/team" class="dropdown-item">Our Team</Link>
                            <Link to="/testimonial" class="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to="/contact" class="nav-item nav-link active">Contact</Link>
                </div>
                <div class="d-flex">
                    <a class="btn btn-primary btn-sm-square me-3" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-primary btn-sm-square me-3" href=""><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-primary btn-sm-square" href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </nav>
    </div>
    {/* <!-- Navbar End --> */}


    {/* <!-- Hero Start --> */}
    <div class="container-fluid bg-light page-header py-5 mb-5">
        <div class="container text-center py-5">
            <h1 class="display-1 animated slideInLeft">Gallery</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center animated slideInLeft mb-0">
                    <li class="breadcrumb-item"><Link to="/home" class="text-primary">Home</Link></li>
                    <li class="breadcrumb-item"><a class="text-primary" href="#">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Gallery</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Gallery Start --> */}
    <div class="container-fluid gallery py-5">
        <div class="container">
            <div class="text-center wow fadeIn" data-wow-delay="0.2s">
                <h1 class="font-dancing-script text-primary">Gallery</h1>
                <h1 class="mb-5">Explore Our Gallery</h1>
            </div>
            <div class="row g-0">
                {gallery.map((gall, index) => (
                <div class="col-md-3 wow fadeIn" data-wow-delay="0.2s">
                      
                    <div class="gallery-item h-100">
                        {gall.image ?(
                        <img 
                        src={`https://salon-be.vercel.app${gall.image}`} 
                        class="img-fluid w-100 h-100" 
                        alt=""
                        /> 
                        ) : ("No image Available"
                         )}

                        <div class="gallery-icon">
                            <a href="img/gallery-1.jpg" class="btn btn-primary btn-lg-square"
                                data-lightbox="Gallery-1"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                     

                </div>
                ))}
                {/* <div class="col-md-3 wow fadeIn" data-wow-delay="0.4s">
                    <div class="gallery-item h-100">
                        <img src="img/gallery-2.jpg" class="img-fluid w-100 h-100" alt=""/>
                        <div class="gallery-icon">
                            <a href="img/gallery-2.jpg" class="btn btn-primary btn-lg-square"
                                data-lightbox="Gallery-2"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 wow fadeIn" data-wow-delay="0.6s">
                    <div class="gallery-item h-100">
                        <img src="img/gallery-3.jpg" class="img-fluid w-100 h-100" alt=""/>
                        <div class="gallery-icon">
                            <a href="img/gallery-3.jpg" class="btn btn-primary btn-lg-square"
                                data-lightbox="Gallery-3"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 wow fadeIn" data-wow-delay="0.2s">
                    <div class="gallery-item h-100">
                        <img src="img/gallery-4.jpg" class="img-fluid w-100 h-100" alt=""/>
                        <div class="gallery-icon">
                            <a href="img/gallery-4.jpg" class="btn btn-primary btn-lg-square"
                                data-lightbox="Gallery-4"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 wow fadeIn" data-wow-delay="0.4s">
                    <div class="gallery-item h-100">
                        <img src="img/gallery-5.jpg" class="img-fluid w-100 h-100" alt=""/>
                        <div class="gallery-icon">
                            <a href="img/gallery-5.jpg" class="btn btn-primary btn-lg-square"
                                data-lightbox="Gallery-5"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow fadeIn" data-wow-delay="0.6s">
                    <div class="gallery-item h-100">
                        <img src="img/gallery-6.jpg" class="img-fluid w-100 h-100" alt=""/>
                        <div class="gallery-icon">
                            <a href="img/gallery-6.jpg" class="btn btn-primary btn-lg-square"
                                data-lightbox="Gallery-6"><i class="fa fa-eye"></i></a>
                        </div>
                    </div>
                </div> */}
                 
            </div>
        </div>
    </div>
    {/* <!-- Gallery End --> */}


    {/* <!-- Footer Start --> */}
    <div class="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn" data-wow-delay="0.2s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-6 pe-lg-5">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="display-5 text-primary mb-0"><i class="bi bi-scissors"></i>Glow & shine salon</h1>
                    </a>
                    <p>"Glow & Shine Salon - your trusted destination for beauty, style, and relaxation, Experience the perfect blend of care and confidence with us."</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-2"></i>123 Main Street, Chennai, India</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-2"></i>+91 9876543210</p>
                    <p><i class="fa fa-envelope me-2"></i>info@glowshine.com</p>
                    <div class="d-flex justify-content-start mt-4">
                        <a class="btn btn-sm-square btn-primary me-3" href="#"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-primary me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-primary me-3" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square btn-primary me-3" href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-5">
                    <div class="row g-4">
                        <div class="col-sm-6">
                            <h5 class="text-primary mb-4">Quick Links</h5>
                            <Link to='/about' class="btn btn-link" >About Us</Link>
                            <Link to='/contact' class="btn btn-link" >Contact Us</Link>
                            <Link to='/service' class="btn btn-link" >Our Services</Link>
                            <Link to='/gallery' class="btn btn-link" href="">Gallery</Link>
                        </div>
                        <div class="col-sm-6">
                            <h5 class="text-primary mb-4">Openning hours</h5>
                            <p>Monday - Friday : 9:00 AM - 8:00 PM</p>
                            <p>Saturday -  Sunday : 10:00 AM - 7:00 PM</p>
                            {/* <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Our Services</a>
                            <a class="btn btn-link" href="">Terms & Condition</a> */}
                        </div>
                        <div class="col-sm-12">
                            <h5 class="text-primary mb-4">Newsletter</h5>
                            <div class="position-relative w-100 mb-2">
                                <input class="form-control bg-secondary border-0 w-100 ps-4 pe-5" type="text"
                                    placeholder="Enter Your Email" style={{height: "60px"}}/>
                                <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-2 me-2"><i
                                        class="fa fa-paper-plane text-primary fs-4"></i></button>
                            </div>
                            <p class="mb-0">Diam sed sed dolor stet amet eirmod</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}

    
    {/* <!-- Copyright Start --> */}
    <div class="container-fluid bg-dark text-white border-top border-secondary py-4 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <Link to='/home' class="border-bottom" >2025 Glow & Shine </Link>. All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Designed By <a class="border-bottom" href="https://htmlcodex.com">Umamahesswari Subbaian</a>.
                    Distributed By <a class="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Copyright End --> */}

    {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

    </div>
)
}
export default Gallery;