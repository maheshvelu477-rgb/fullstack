import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "font-awesome/css/font-awesome.min.css";

function Testimonial(){
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
    <div className="container-fluid bg-light sticky-top p-0">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
             <Link to="/home" class="navbar-brand bg-primary py-4 px-5 me-0">
                            <h1 class="mb-0"><i class="bi bi-scissors"></i>Salone</h1>
                        </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-3" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link to="/home" className="nav-item nav-link ">Home</Link>
                    <Link to="/about" className="nav-item nav-link ">About</Link>
                    <Link to="/service" className="nav-item nav-link ">Services</Link>
                    <Link to="/price" className="nav-item nav-link">Price</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu bg-light mt-2">
                            <Link to="/gallery" className="dropdown-item">Gallery</Link>
                            <Link to="/blog" className="dropdown-item">Beauty Blog</Link>
                            <Link to="/team" className="dropdown-item">Our Team</Link>
                            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div className="d-flex">
                    <a className="btn btn-primary btn-sm-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-sm-square me-3" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-primary btn-sm-square" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </nav>
    </div>
    {/* <!-- Navbar End --> */}


    {/* <!-- Hero Start --> */}
    <div className="container-fluid bg-light page-header py-5 mb-5">
        <div className="container text-center py-5">
            <h1 className="display-1 animated slideInLeft">Testimonial</h1>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center animated slideInLeft mb-0">
                    <li class="breadcrumb-item"><Link to="/home" class="text-primary">Home</Link></li>
                    <li className="breadcrumb-item"><a className="text-primary" href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Hero End --> */}

   

     {/* <!-- Testimonial Start --> */}
<div className="container-fluid py-5">
      <div className="container">
        <div className="text-center">
          <h1 className="font-dancing-script text-primary">Testimonial</h1>
          <h1 className="mb-5">What Clients Say!</h1>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3"></i>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. 
                Clita erat ipsum et lorem et sit.
              </p>
              <img
                className="img-fluid mx-auto border p-1 mb-3"
                src="img/testimonial-1.jpg"
                alt=""
              />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3"></i>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. 
                Clita erat ipsum et lorem et sit.
              </p>
              <img
                className="img-fluid mx-auto border p-1 mb-3"
                src="img/testimonial-2.jpg"
                alt=""
              />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3"></i>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. 
                Clita erat ipsum et lorem et sit.
              </p>
              <img
                className="img-fluid mx-auto border p-1 mb-3"
                src="img/testimonial-3.jpg"
                alt=""
              />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3"></i>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. 
                Clita erat ipsum et lorem et sit.
              </p>
              <img
                className="img-fluid mx-auto border p-1 mb-3"
                src="img/testimonial-4.jpg"
                alt=""
              />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    {/* <!-- Testimonial End --> */}

    
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
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

    </div>
)
}
export default Testimonial;