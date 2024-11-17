import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from './assets/imgs/c-imgs/1.jpg';
import img2 from './assets/imgs/c-imgs/submersible-pump.png';
import img3 from './assets/imgs/c-imgs/centrifugal-pump.png';
import img4 from './assets/imgs/c-imgs/fuel-pump.png';
import img5 from './assets/imgs/c-imgs/aerators-&-air -pump.png';
import img6 from './assets/imgs/c-imgs/caffini-pump.png';
import img7 from './assets/imgs/c-imgs/paragon-pump.png';
import img8 from './assets/imgs/c-imgs/air-stone.png';
import img9 from './assets/imgs/c-imgs/float-switch.png';
import img10 from './assets/imgs/c-imgs/couplings.png';
import img11 from './assets/imgs/c-imgs/diffiuser.png';
import img12 from './assets/imgs/c-imgs/other-accessries.png';
import img13 from './assets/imgs/c-imgs/water-meter.png';


// Updated carousel items with new products
const carouselItems = [
    {
        id: 1,
        // title: "Submersible Pumps",
        // description: "High-performance submersible pumps for efficient water transfer and drainage.",
        image: img1,
        // path: '/products/submersible-pumps'
    },
    {
        id: 2,
        title: "Submersible Pumps",
        description: "High-performance submersible pumps for efficient water transfer and drainage.",
        image: img2,
        path: '/products/submersible-pumps'
    },
    {
        id: 3,
        title: "Centrifugal Pump",
        description: "Reliable centrifugal pumps designed for diverse fluid handling applications.",
        image: img3,
        path: '/products/centrifugal-pump'
    },
    {
        id: 4,
        title: "Fuel Pump",
        description: "Efficient and durable fuel pumps for various industrial applications.",
        image: img4,
        path: '/products/fuel-pump'
    },
    {
        id: 5,
        title: "Aerators & Air Pump",
        description: "High-quality aerators and air pumps to enhance water quality and oxygen levels.",
        image: img5,
        path: '/products/aerators-air-pump'
    },
    {
        id: 6,
        title: "Caffini Pump",
        description: "Versatile Caffini pumps suitable for a range of fluid transfer needs.",
        image: img6,
        path: '/products/caffini-pump'
    },
    {
        id: 7,
        title: "Paragon Pump",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img7,
        path: '/products/paragon-pump'
    },
    {
        id: 8,
        title: "Air Stones",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img8,
        path: '/products/air-stones'
    }, {
        id: 9,
        title: "Float Switch",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img9,
        path: '/products/float-switch'
    }, {
        id: 10,
        title: "Couplings",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img10,
        path: '/products/couplings'
    }, {
        id: 11,
        title: "Diffuser",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img11,
        path: '/products/diffuser'
    },{
        id: 12,
        title: "Other Accessories",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img12,
        path: '/products/other-accessories'
    },{
        id: 13,
        title: "Water Meters",
        description: "Robust and reliable Paragon pumps built for long-lasting performance.",
        image: img13,
        path: '/products/water-meters'
    },
    
    
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [currentSlide]);

    const handlePrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleDotClick = (index) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="relative w-[100%]  mx-auto overflow-hidden  shadow-lg">
            {/* Main Carousel */}
            <div className="relative h-[500px] w-full bg-gray-900" style={{marginTop:'65px'}}>
                {/* Slides */}
                <div 
                    className="absolute w-full h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="absolute top-0 left-0 w-full h-full "
                            style={{ transform: `translateX(${index * 100}%)` }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-contain w-full h-full  opacity-70"
                                // style={{width:'100%'}}
                            />
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center text-white">
                                <div className="max-w-3xl mx-auto text-center">
                                    <h2 className="mb-4 text-4xl font-bold tracking-tight">
                                        {item.title}
                                    </h2>
                                    <p className="mb-8 text-xl">
                                        {item.description}
                                    </p>
                                    
                                    {/* View Product Button */}
                                    {item.path && (
                                        <Link 
                                            to={item.path} 
                                            className="px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                                        >
                                            View Product
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className="p-1 transition-colors"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {currentSlide === index ? (
                                <CircleDot size={16} className="text-white" />
                            ) : (
                                <Circle size={16} className="text-white/70" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
