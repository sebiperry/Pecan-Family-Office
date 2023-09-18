import React, { useState, useEffect } from 'react'; //importing modules from react

function Slideshow() { //defining the functional component
  const [currentSlide, setCurrentSlide] = useState(0); 
  //using useState to declare state variables in initialize the slideshow and to upadate the slideshow
  //this will keep track of the current slide on the slideshow, initializing it to 0, which will set the first slide to display initially
  const slides = [
    {
        imageUrl: 'Pittsburgh.jpg'
    },

    {
        imageUrl: 'BrooklynBridge.jpg'
    },

    {
        imageUrl: 'SanDiegoSkyline.jpg'
    },
];
//Here I'm defining the array of slides I will be using in the slideshow
  
  const intervalTime = 2000; // I'm setting the interval time to 2000 milliseconds/2 seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
        //triggers the intervalTime function
        const nextSlide = (currentSlide + 1) % slides.length;
    // Calculate the index of the next slide by incrementing by 1, using the modulus to wrap back to the first slide
        setCurrentSlide(nextSlide); //updates the currentSlide state with the index of the next slide
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [currentSlide]);
    // Clear the interval when the component unmounts


  return (
    <div className="slideshow">
        <img
            src={slides[currentSlide].imageUrl} 
            alt= "" 
        />
        <p>{slides[currentSlide].caption}</p>
    </div>
  );
} //This is the render function, displaying the image of the current slide with no captions

export default Slideshow;
