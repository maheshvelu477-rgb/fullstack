import { useState } from "react";
import { Link } from "react-router-dom";

function Blog(){
    const[readMore, setReadMore] = useState(false)
    const[readMore1, setReadMore1] = useState(false)
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
            <h1 class="display-1 animated slideInLeft">Blog</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center animated slideInLeft mb-0">
                    <li class="breadcrumb-item"><Link to="/home" class="text-primary">Home</Link></li>
                    <li class="breadcrumb-item"><a class="text-primary" href="#">Pages</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Blog Start --> */}
    <div class="container-fluid blog p-0">
        <div class="row g-0">
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div class="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                    <p class="mb-2"><i class="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2025 | <i
                            class="fa fa-folder-open text-dark me-1"></i>Hair Care Tips</p>
                    <h3 class="mb-3">5 Essential Hair Care Tips for shiny, Healthy Hair</h3>
                    <p> You hair is your crown, and taking care of it it essential. Start by choosing the right shampoo for your hair type and avoid overwashing.</p>
                       
                         <p> 
                        {readMore1 && (
                        <>
                        <p>
                        Regular trims helps prevent split ends. Use natural oils like coconut or argan oil to nourish your hair. Protect your hair from heat by using styling tools moderately, and always apply a heat protectant. 
                        Finally, maintain a healthy diet rich in a proteins, Vitamins, and minerals to stengthen your hair from within. Follow these tips, and your hair will shine with natural beauty!
                        </p>
                        
                        <p>
                        Book an appointment with our expert stylists today!
                        </p>
                        </>
                        )}
                    </p>
                    <a class="btn btn-dark align-self-start text-uppercase" onClick={()=>setReadMore1(!readMore1)}>{readMore1 ? "Read Less" : "Read More"}<i
                            class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div class="h-100">
                    <img class="img-fluid w-100 h-100" src="img/blog-1.jpg" alt="" style={{objectFit: "cover"}}/>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100 d-flex flex-column justify-content-center bg-primary py-5 px-4">
                    <p class="mb-2"><i class="fa fa-calendar-alt text-dark me-1"></i>Jan 01, 2045 | <i
                            class="fa fa-folder-open text-dark me-1"></i>Skincare Routine</p>
                    <h3 class="mb-3">How to Achience Glowing Skin: A Simple Skincare Routine</h3>
                    <p>Healthy skin starts with a proper routine. Begin with a gentle cleanser to remove dirt and impurities. </p>
                     
                     <p>
                     {readMore && (
                        <>
                        <p>
                        Apply toner to balance your skin's pH, followed by a moisturizer to keep your skin hydarted. Don't forget sunscreen, even on cloudy days, to protect against UV damage.
                        Exfoliate 1-2 times a ween to remoce dead skin cells and brighten your complexion. Incorporating a weekly face mask with natural ingredients can rejuvenate your skin. Drink Plenty of water and eat a balanced diet to nourish your skin from within. 
                        Followthis routin for soft, glowing, and healthy skin!
                        </p>
                        <p>
                        Schedule a skincare consultation with our experts today!
                        </p>
                        </>
                    )}
                    </p>
                    <a class="btn btn-dark align-self-start text-uppercase" onClick={()=>setReadMore(!readMore)} >{readMore ?  "Read Less" : " Read More"}<i
                            class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div class="h-100">
                    <img class="img-fluid w-100 h-100" src="img/blog-2.jpg" alt="" style={{objectFit: "cover"}}/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}


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
export default Blog;