import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Price(){
    const [products, setProducts] = useState([]);


    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://salon-be.vercel.app/api/products");
        setProducts(response.data);
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
        <div class="spinner-grow text-primary" style={{width: "3rem",height: "3rem"}} role="status">
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
                    <Link to="/home" class="nav-item nav-link">Home</Link>
                    <Link to="/about" class="nav-item nav-link ">About</Link>
                    <Link to="/service" class="nav-item nav-link ">Services</Link>
                    <Link to="/price" class="nav-item nav-link">Price</Link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu bg-light mt-2">
                            <Link to="/gallery" class="dropdown-item">Gallery</Link>
                            <Link to="/blog" class="dropdown-item">Beauty Blog</Link>
                            <Link to="/team" class="dropdown-item">Our Team</Link>
                            <Link to="/testimonial" class="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to="/contact" class="nav-item nav-link">Contact</Link>
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
    <div class="container-fluid bg-light page-header py-5">
        <div class="container text-center py-5">
            <h1 class="display-1 animated slideInLeft">Price</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center animated slideInLeft mb-0">
                    <li class="breadcrumb-item"><Link to="/home" class="text-primary">Home</Link></li>
                    <li class="breadcrumb-item"><a class="text-primary" href="#">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Price</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Pricing Start --> */}
    <div class="container-fluid price px-0">
        <div class="row g-0">
            <div class="col-md-6">
                <div class="d-flex align-items-center h-100 bg-primary p-5">
                    <div class="wow fadeIn" data-wow-delay="0.3s">
                        <h1 class="font-dancing-script text-white">Pricing</h1>
                        <h1 class="mb-0">Beauty Salon</h1>
                        <h1 class="display-1 text-uppercase mb-5" style={{letterSpacing: "10px"}}>Pricing</h1>
                        <div class="row g-4 align-items-center">
                            <div class="col-lg-6">
                                <div class="text-center bg-dark p-5">
                                    <h4 class="text-white">Enjoy</h4>
                                    <h1 class="display-1 font-work-sans text-white">20%</h1>
                                    <p class="fs-2 text-white mb-0">Off</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Maecenas eget libero lobortis,
                                    auctor nisi quis, aliquet nunc. Nam dapibus lacus.</p>
                                <a class="btn btn-dark" href="">Get 20% Off</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="h-100 bg-dark p-5">
                  {products.map((product, index) => (
                    <div class="price-item mb-3 wow fadeIn" data-wow-delay="0.1s">
                        {product.image ? (
                            <img 
                                src={`https://salon-be.vercel.app${product.image}`} 
                                alt="User" 
                                width="250" 
                                height="250" 
                                class="img-fluid flex-shrink-0"
                            />
                            ) : (
                            "No Image Available"
                            )}
                          <div class="text-end px-4">
                            <h6 class="text-uppercase text-primary">{product.name}</h6>
                            <h3 class="text-white font-work-sans mb-0">{product.price}</h3>
                        </div>
                    </div>
                  ))}

                </div>
            </div>
        </div>
    </div>
    {/* <!-- Pricing End --> */}


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
}export default Price;