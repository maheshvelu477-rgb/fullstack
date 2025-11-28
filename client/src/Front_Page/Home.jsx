import React, { useState, useEffect, useRef} from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
 import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import hero1 from '../img/hero-slider-1.jpg';
import hero2 from '../img/hero-slider-2.jpg';
import hero3 from '../img/hero-slider-3.jpg';
import "../App.css"; // Import CSS file
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "font-awesome/css/font-awesome.min.css";

function Home() {

  const [products, setProducts] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);
  const [readMore5, setReadMore5] = useState(false);
  const [readMore6, setReadMore6] = useState(false);
  const [readMore7, setReadMore7] = useState(false);
  const [readMore8, setReadMore8] = useState(false);

  const [gallery, setGallery] = useState([]);
  const [showForm, setShowForm] = useState(false);
  

  const {ref, inView } = useInView({
    triggerOnce:true,
    threshold:0.3,
  });
  

   
    const [booking, setBooking] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const navigate = useNavigate();
  
   const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
  };

  const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", booking );
   
    try {
      const response = await axios.post("https://salon-be.vercel.app/api/booking", {
        name: booking.name,
        email: booking.email,
        service: booking.service,
        date: booking.date,
        time: booking.time,
        notes: booking.notes
      });
  
      console.log("Booking Success:", response.data);
    }
    catch (error) {
      console.error("Booking Error:", error.response?.data);
      alert(error.response?.data?.message || "Booking failed");
    }
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking Data:", formData);

//     setSuccess(true);
//     setFormData({
//       name: "",
//       email: "",
//       service: "",
//       date: "",
//       time: "",
//       notes: "",
//     });
//   };



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
  
  
 const [index, setIndex]=useState(0); // state to to tarck the current image index
  const images=[hero1,hero2,hero3]
  const carouselRef =useRef(null)// Ref to reference the image container
  // Function to fo to the next image
  const nextImage=()=>{
    setIndex((index+1)); // Increment index , and reset to 0 when reacting the end
    if(index==images.length-1){
      setIndex(0);
    }
  }
  // Automatically change the image every 3 seconds
  useEffect(()=>{
    const interval=setInterval(nextImage,3000);
      return ()=> clearInterval(interval);
  },[index]);

  
  return (
  
  
  <div>
      {/* <div id="spinner"
              class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div class="spinner-grow text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                  <span class="sr-only">Loading...</span>
              </div>
          </div> */}

{/* Navbar */}
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

 {/* <!-- Hero Start --> */}
 
    <div class="container-fluid p-0 hero-header bg-light mb-5">
        <div class="container p-0">
            <div class="row g-0 align-items-center">
                <div class="col-lg-6 hero-header-text py-5">
                    <div class="py-5 px-3 ps-lg-0">
                        <h1 class="font-dancing-script text-primary animated slideInLeft">Welcome</h1>
                        <h1 class="display-1 mb-4 animated slideInLeft">Beauty Salon Fashion for Women</h1>
                        <div class="row g-4 animated slideInLeft">
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-square btn btn-primary flex-shrink-0">
                                        <i class="fa fa-phone text-dark"></i>
                                    </div>
                                    <div class="px-3">
                                        <h5 class="text-primary mb-0">Call Us</h5>
                                        <p class="fs-5 text-dark mb-0">+91 9876543210</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-square btn btn-primary flex-shrink-0">
                                        <i class="fa fa-envelope text-dark"></i>
                                    </div>
                                    <div class="px-3">
                                        <h5 class="text-primary mb-0">Mail Us</h5>
                                        <p class="fs-5 text-dark mb-0">info@glowshine.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6" ref={carouselRef} >
                    <div class="carousel header-carousel animated fadeIn">
                        <img class="img-fluid" src={images[index]}  alt={`image ${index+1}`}/>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    {/* <!-- Hero End --> */}

     

{/* <!-- About Start --> */}
    <div class="container-fluid py-5" id='about'>
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
                    <img class="img-fluid mb-3" src="img/about.jpg" alt=""/>
                    <div class="d-flex align-items-center bg-light">
                        <div class="btn-square flex-shrink-0 bg-primary" style={{width: "100px", height: "100px"}}>
                            <i class="fa fa-phone fa-2x text-dark"></i>
                        </div>
                        <div class="px-3">
                            <h3>+91 9876543210</h3>
                            <span>Call us direct 24/7 for get a free consultation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="font-dancing-script text-primary">About Us</h1>
                    <h1 class="mb-5">Why People Choose Us!</h1>
                    <p class="mb-4"> 
                        We believe beauty is more is more than just appearance - it's about confidence , self-care, and inner happiness. Our Salon is a relaxing haven where women can rejuvenate their mind, body, and soul.
                    </p>
                    {/* <p>    
                        With a team of highly skilled professional, we specialize in hair styling, skin care, makeup, maicure, pedicure, and spa treatments. Every serivece is designed to enhance your natural beauty while ensuring you feel comfortable and pampered.
                    </p> */}
                    <div class="row g-3 mb-5">
                        <div class="col-sm-6" ref={ref}>
                            <div class="bg-light text-center p-4">
                                <i class="fas fa-calendar-alt fa-4x text-primary"></i>
                                <h1 class="display-5" data-toggle="counter-up">
                                     {inView && <CountUp start={0} end={25} duration={3}  suffix='+'/>} 
                                </h1>
                                <p class="text-dark text-uppercase mb-0">Years experience</p>
                            </div>
                        </div>
                        <div class="col-sm-6" ref={ref}>
                            <div class="bg-light text-center p-4">
                                <i class="fas fa-users fa-4x text-primary"></i>
                                <h1 class="display-5" data-toggle="counter-up"> 
                                   {inView && <CountUp start={0} end={999} duration={1}  suffix='+'/>} 
                                </h1>
                                <p class="text-dark text-uppercase mb-0">Happy Customers</p>
                            </div>
                        </div>
                        {!readMore6 && ""}
                        {readMore6 && (
                            <>
                            <div class="col-sm-6" ref={ref}>
                                <div class="bg-light text-center p-4">
                                    <i class="fas fa-spa fa-4x text-primary"></i>
                                    <br></br>
                                    <h1 class="display-5" data-toggle="counter-up"> 
                                        {inView && <CountUp start={0} end={100} duration={1}  suffix='+'/>}
                                    </h1>
                                    <p class="text-dark text-uppercase mb-0">Beauty Services</p>
                                </div>
                            </div>
                            <div class="col-sm-6" ref={ref}>
                                <div class="bg-light text-center p-4">
                                    <i class="fas fa-users fa-4x text-primary"></i>
                                    <h1 class="display-5" data-toggle="counter-up">
                                   {inView && <CountUp start={0} end={50} duration={2}  suffix='+'/>}
                                    </h1>
                                    <p class="text-dark text-uppercase mb-0">Skilled Experts</p>
                                </div>
                            </div>
                             <div class="col-sm-6" ref={ref}>
                                <div class="bg-light text-center p-4">
                                    <i class="fas fa-star fa-4x text-primary"></i>
                                    <h1 class="display-5" data-toggle="counter-up">
                                   {inView && <CountUp start={0} end={200} duration={1} suffix='+'/>}

                                    </h1>
                                    <p class="text-dark text-uppercase mb-0">Happy Clients</p>
                                </div>
                            </div>
                            <div class="col-sm-6" ref={ref}>
                                <div class="bg-light text-center p-4">
                                    <i class="fas fa-smile fa-4x text-primary"></i>
                                    <h1 class="display-5" data-toggle="counter-up">
                                   {inView && <CountUp start={0} end={95} duration={1} suffix='%'/>}
                                    </h1>
                                    <p class="text-dark text-uppercase mb-0">Customer Satisfaction</p>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                    <a class="btn btn-primary text-uppercase px-5 py-3" onClick={()=>setReadMore6(!readMore6)}>{readMore6 ? "Read less" : "Read More"}</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    
    {/* <!-- Service Start --> */}
    <div class="container-fluid service py-5" id='service'>
        <div class="container">
            <div class="text-center wow fadeIn" data-wow-delay="0.1s">
                <h1 class="font-dancing-script text-primary">Our Services</h1>
                <h1 class="mb-5">Explore Our Services</h1>
            </div>
            <div class="row g-4 g-md-0 text-center">
                <div class="col-md-6 col-lg-4">
                    <div class="service-item h-100 p-4 border-bottom border-end wow fadeIn" data-wow-delay="0.1s">
                        <img class="img-fluid" src="img/haircut.png" alt=""/>
                        <h3 class="mb-3">Haircut</h3>
                        <p class="mb-3">
                            Tarnsform your look with our professtional haircut services! whether you want a classic trim, a modern style, or a complete makeover, our skilled stylist ensure precision and 
                            {!readMore && ".."}
                            {readMore && (
                                <>
                            
                                creativity in every cut. Using the latest techiniques and high-quality tools, we cater to all hair types and styles, leaving you feeling refreshed and cinfident. Step in for a personalized experience and walk out with a haircut that perfectly suits your personality.
                                </>
                            )}
                             </p>
                        <a class="btn btn-sm btn-primary text-uppercase" onClick={()=>setReadMore(!readMore)}> {readMore ? "Read Less":"Read More"}<i
                                class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-item h-100 p-4 border-bottom border-lg-end wow fadeIn" data-wow-delay="0.3s">
                        <img class="img-fluid" src="img/makeup.png" alt=""/>
                        <h3 class="mb-3">Makeup</h3>
                        <p class="mb-3"> Enhance your natural beauty with our professional makeup services! Whether it's for weddings, parties, or special events, our skilled makeup artists use high-quality products and
                            {!readMore1 && "..."}
                            {readMore1 &&(
                                <>

                                 personalized techiniques to create the perfect look. From subtle, elegant styles to bold, glamorous tranformations, we ensure you feel confident and radiant for every occasion.
                                </>
                            )}
                        </p>
                        <a class="btn btn-sm btn-primary text-uppercase" onClick={()=>setReadMore1(!readMore1)}>{readMore1 ? "Read less" : "Read More"} <i
                                class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-item h-100 p-4 border-bottom border-end border-lg-end-0 wow fadeIn"
                        data-wow-delay="0.5s">
                        <img class="img-fluid" src="img/manicure.png" alt=""/>
                        <h3 class="mb-3">Manicure</h3>
                        <p class="mb-3">
                            Pamper your hands  with our professtional manicure services! From classic nail care to trendy designs , our skilled  technicians ensure your nails look healthy, polished, and stylish.
                            {!readMore2 && "..."}
                            {readMore2 && (
                                <>
                                Using high-quality products and precise techiniques, we provide a relaxing experience that leaves your hands soft, beautiful, and perfectly groomed.
                                 </>
                            )} 
                            </p>
                        <a class="btn btn-sm btn-primary text-uppercase my-2" onClick={()=>setReadMore2(!readMore2)}>{readMore2 ? "Read less" : "Read More "}<i
                                class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-item h-100 p-4 border-bottom border-lg-bottom-0 border-lg-end wow fadeIn"
                        data-wow-delay="0.1s">
                        <img class="img-fluid" src="img/pedicure.png" alt=""/>
                        <h3 class="mb-3">Pedicure</h3>
                        <p class="mb-3"> Treat your feet to our professional pedicure services! Whether it’s basic nail care or luxurious spa treatments, our experts ensure your feet are healthy, smooth, and 
                            {!readMore3 && "..."}
                            {readMore3 && (
                                <>
                                beautifully polished. Using high-quality products and gentle techniques, we provide a relaxing and refreshing experience that leaves your feet soft, rejuvenated, and perfectly cared for.
                                </>
                            )}
                        </p>
                        <a class="btn btn-sm btn-primary text-uppercase" onClick={()=>setReadMore3(!readMore3)}> {readMore3 ?  "Read less" : " Read More" } <i
                                class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-item h-100 p-4 border-end wow fadeIn" data-wow-delay="0.3s">
                        <img class="img-fluid" src="img/massage.png" alt=""/>
                        <h3 class="mb-3">Massage</h3>
                        <p class="mb-3"> Relax and rejuvenate with our soothing massage services! Designed to relieve stress, improve circulation, and restore balance, our therapies are tailored to your body’s needs.
                            {!readMore4 && "..."}
                            {readMore4 && (
                                <>
                                From gentle relaxation massages to deep tissue treatments, our skilled therapists use expert techniques to ensure complete comfort, leaving you refreshed, relaxed, and energized.
                                </>
                            )}
                        </p>
                        <a class="btn btn-sm btn-primary text-uppercase" onClick={()=>setReadMore4(!readMore4)}>{readMore4 ? "Read Less" : "Read More"} <i
                                class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="service-item h-100 p-4 wow fadeIn" data-wow-delay="0.5s">
                        <img class="img-fluid" src="img/skin-care.png" alt=""/>
                        <h3 class="mb-3">Skin Care</h3>
                        <p class="mb-3"> Nourish and rejuvenate your skin with our professional skin care treatments! From deep cleansing facials to advanced therapies, we use high-quality products and techniques tailored  
                            {!readMore5 && "..."}
                            {readMore5 && (
                                <>
                                to your skin type. Our expert care helps restore natural glow, improve texture, and keep your skin healthy, radiant, and refreshed.
                                </>
                            )}
                        </p>
                        <a class="btn btn-sm btn-primary text-uppercase" onClick={()=>setReadMore5(!readMore5)}>{readMore5 ? "Read Less" : " Read More"} <i
                                class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}



    {/* <!-- Pricing Start --> */}
    <div class="container-fluid price px-0 py-5" id='price'>
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


    
    {/* <!-- Team Start --> */}
    <div class="container-fluid overflow-hidden py-5" >
        <div class="container">
            <div class="text-center wow fadeIn" data-wow-delay="0.2s">
                <h1 class="font-dancing-script text-primary">Team Members</h1>
                <h1 class="mb-5">Our Experienced Specialists</h1>
            </div>
            <div class="row g-4 team">
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <div class="team-item position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                        <div class="team-overlay">
                            <p class="text-primary mb-1">Hair Specialist</p>
                            <h4>Lily Taylor</h4>
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <div class="team-item position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                        <div class="team-overlay">
                            <p class="text-primary mb-1">Nail Designer</p>
                            <h4>Olivia Smith</h4>
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <div class="team-item position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                        <div class="team-overlay">
                            <p class="text-primary mb-1">Beauty Specialist</p>
                            <h4>Ava Brown</h4>
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <div class="team-item position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="img/team-4.jpg" alt=""/>
                        <div class="team-overlay">
                            <p class="text-primary mb-1">Spa Specialist</p>
                            <h4>Amelia Jones</h4>
                            <div class="d-flex justify-content-center">
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2 me-3" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-dark btn-sm-square border-2" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}

    
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
                        {readMore7 && (
                        <>
                        <p>
                        Regular trims helps prevent split ends. Use natural oils like coconut or argan oil to nourish your hair. Protect your hair from heat by using styling tools moderately, and always apply a heat protectant. 
                        Finally, maintain a healthy diet rich in a proteins, Vitamins, and minerals to stengthen your hair from within. Follow these tips, and your hair will shine with natural beauty!
                        </p>
                        </>
                        )}
                    </p>
                    <a class="btn btn-dark align-self-start text-uppercase" onClick={()=>setReadMore7(!readMore7)}>{readMore7 ? "Read Less" : "Read More"}<i
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
                     {readMore8 && (
                        <>
                        <p>
                        Apply toner to balance your skin's pH, followed by a moisturizer to keep your skin hydarted. Don't forget sunscreen, even on cloudy days, to protect against UV damage.
                        Exfoliate 1-2 times a ween to remoce dead skin cells and brighten your complexion. Incorporating a weekly face mask with natural ingredients can rejuvenate your skin. Drink Plenty of water and eat a balanced diet to nourish your skin from within. 
                        Followthis routin for soft, glowing, and healthy skin!
                        </p>
                        <p>
                        Schedule a skincare consultation with our experts today! 
                        <br/>
                        {!showForm && (
                          <p> 
                            <a  onClick={() => setShowForm(true)} style={{ color: 'brown', textDecoration: 'underline', cursor: 'pointer' }}>Click Here</a>
                                                        to Book Appointment

                          </p>  
                        )}

                         {/* Booking Form */}
                            {showForm && (
                                <div className="modal-overlay">
                                <div className="modal-content">
                                    <h2>Book Your Appointment</h2>
                                    <button className="close-button" onClick={() => setShowForm(false)}>
                                    &times;
                                    </button>
                                    <form onSubmit={handleSubmit} className="booking-form">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={booking.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                    />

                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={booking.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                    />

                                    <label>Service</label>
                                    <select
                                        name="service"
                                        value={booking.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Haircut">Haircut</option>
                                        <option value="Makeup">Makeup</option>
                                        <option value="Manicure">Manicure</option>
                                        <option value="Pedicure">Pedicure</option>
                                        <option value="Massage">Massage</option>
                                        <option value="Skincare">Skincare</option>
                                    </select>

                                    <label>Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={booking.date}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label>Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={booking.time}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label>Additional Notes</label>
                                    <textarea
                                        name="notes"
                                        value={booking.notes}
                                        onChange={handleChange}
                                        placeholder="Any special requests?"
                                    />

                                    <button type="submit">Book Now</button>

                                    {success && <p className="success">Your appointment has been booked!</p>}
                                    </form>
                                </div>
                                </div>
                            )}
                         </p>
                        </>
                    )}
                    </p>
                    <a class="btn btn-dark align-self-start text-uppercase" onClick={()=>setReadMore8(!readMore8)} >{readMore8 ?  "Read Less" : " Read More"}<i
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
  
  );
}

 

export default Home;
