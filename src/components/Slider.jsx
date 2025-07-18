
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AUTOPLAY_DELAY = 5000;
const SLIDE_SPEED = 900; // ms

const slides = [
  {
    type: "video",
    src: "https://www.astonmartin.com/-/media/models---vantage-s/final/final-video/vantage-s-desktop-hero-video-final.mp4?rev=-1",
    subtitle: "THRILL. DRIVEN.",
    headline: "Vantage S",
    description: "",
    buttons: [
      { text: "Explore", link: "https://www.astonmartin.com/en-us/models/vantage/vantage-s", style: "primary" },
      { text: "Configure", link: "https://www.astonmartin.com/en-us/models/vantage/vantage-s/configure", style: "secondary" },
    ],
  },
  {
    type: "image",
    src: "https://www.astonmartin.com/-/media/brand-stories/goodwood2025/final-selects/goodwood-hero-desktop-3.jpg?mw=1920&rev=-1&extension=webp&hash=70EF241F0EE954EEBD410C5480993C8D",
    subtitle: "GOODWOOD FESTIVAL OF SPEED 2025",
    headline: "Unleashing the Edge.\nSharpened.",
    description: "",
    buttons: [
      { text: "Learn more", link: "https://www.astonmartin.com/en-us/our-world/news/2025/goodwood-festival-of-speed-2025", style: "primary" },
    ],
  },
  {
    type: "image",
    src: "https://www.astonmartin.com/-/media/models---dbx-s/final-images/homepage/homepage-hero-new.jpg?mw=1920&rev=-1&extension=webp&hash=7127B01BFCAA657517336FCD4A8D9191",
    subtitle: "POWER. DRIVEN.",
    headline: "DBX S",
    description: "",
    buttons: [
      { text: "Configure", link: "https://www.astonmartin.com/en-us/models/dbx/dbx-s", style: "primary" },
    ],
  },
];


const Slider = () => {

  useEffect(() => {
    const setDocHeight = () => {
      document.documentElement.style.setProperty(
        "--doc-height",
        `${window.innerHeight}px`
      );
    };

    setDocHeight();
    window.addEventListener("resize", setDocHeight);

    return () => {
      window.removeEventListener("resize", setDocHeight);
    };
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // for resetting animation
  const swiperRef = useRef(null);

  // Reset progress animation on slide change
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
    setProgressKey(prev => prev + 1);
  };

  // Swiper instance on mount
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  // Navigation button handlers
  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };
  const goTo = (idx) => {
    if (swiperRef.current) swiperRef.current.slideToLoop(idx);
  };

  return (
    <>
      <div className="relative w-full h-[var(--doc-height)] font-sans" style={{ fontFamily: "'astonmartinframe', sans-serif" }}>
        {/* Navigation and Pagination OUTSIDE Swiper */}
        {/* Desktop (md+) navigation */}
        <button
          onClick={goPrev}
          className="hidden md:flex absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center bg-transparent border-none outline-none cursor-pointer"
          aria-label="Previous slide"
          style={{ pointerEvents: 'auto' }}
        >
          <span style={{ display: 'block', transform: 'scaleX(1)' }}>
            <svg width="32" height="24" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_1869)">
                <g clipPath="url(#clip1_1_1869)">
                  <path d="M41.1144 16.0001H1.54572M1.54572 16.0001L16.384 1.16187M1.54572 16.0001L16.384 30.8384" stroke="white" strokeWidth="1.85478" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_1869">
                  <rect width="42.66" height="32" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_1869">
                  <rect width="42.66" height="31.5313" fill="white" transform="translate(0 0.234375)" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
        <button
          onClick={goNext}
          className="hidden md:flex absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center bg-transparent border-none outline-none cursor-pointer"
          aria-label="Next slide"
          style={{ pointerEvents: 'auto' }}
        >
          <span style={{ display: 'block', transform: 'scaleX(-1)' }}>
            <svg width="32" height="24" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_1869)">
                <g clipPath="url(#clip1_1_1869)">
                  <path d="M41.1144 16.0001H1.54572M1.54572 16.0001L16.384 1.16187M1.54572 16.0001L16.384 30.8384" stroke="white" strokeWidth="1.85478" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_1869">
                  <rect width="42.66" height="32" fill="white" />
                </clipPath>
                <clipPath id="clip1_1_1869">
                  <rect width="42.66" height="31.5313" fill="white" transform="translate(0 0.234375)" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
        {/* Mobile (md-) navigation + pagination */}
        <div className="flex md:hidden absolute bottom-4 left-0 w-full justify-center items-center z-30 gap-16">
          <button
            onClick={goPrev}
            className="w-8 h-8 flex items-center justify-center bg-transparent border-none outline-none cursor-pointer"
            aria-label="Previous slide"
            style={{ pointerEvents: 'auto' }}
          >
            <span style={{ display: 'block', transform: 'scaleX(1)' }}>
              <svg width="32" height="24" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_1869)">
                  <g clipPath="url(#clip1_1_1869)">
                    <path d="M41.1144 16.0001H1.54572M1.54572 16.0001L16.384 1.16187M1.54572 16.0001L16.384 30.8384" stroke="white" strokeWidth="1.85478" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1869">
                    <rect width="42.66" height="32" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_1_1869">
                    <rect width="42.66" height="31.5313" fill="white" transform="translate(0 0.234375)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          {/* Pagination (slider bar style, with progress animation) */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-[3px] w-8 rounded-full transition-all duration-300 relative overflow-hidden cursor-pointer ${idx === currentIndex ? 'bg-white/70' : 'bg-white/40'}`}
                onClick={() => goTo(idx)}
              >
                {/* Progress bar */}
                <div
                  key={progressKey + '-' + idx}
                  className={
                    idx === currentIndex
                      ? 'absolute left-0 top-0 h-full bg-white animate-pagination-progress'
                      : 'absolute left-0 top-0 h-full bg-white opacity-0'
                  }
                  style={{
                    width: idx === currentIndex ? '100%' : 0,
                    animationDuration: idx === currentIndex ? AUTOPLAY_DELAY + 'ms' : undefined,
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={goNext}
            className="w-8 h-8 flex items-center justify-center bg-transparent border-none outline-none cursor-pointer"
            aria-label="Next slide"
            style={{ pointerEvents: 'auto' }}
          >
            <span style={{ display: 'block', transform: 'scaleX(-1)' }}>
              <svg width="32" height="24" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_1869)">
                  <g clipPath="url(#clip1_1_1869)">
                    <path d="M41.1144 16.0001H1.54572M1.54572 16.0001L16.384 1.16187M1.54572 16.0001L16.384 30.8384" stroke="white" strokeWidth="1.85478" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1_1869">
                    <rect width="42.66" height="32" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_1_1869">
                    <rect width="42.66" height="31.5313" fill="white" transform="translate(0 0.234375)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          {/* Progress animation style */}
          <style>{`
          @keyframes pagination-progress {
            0% { width: 0; }
            100% { width: 100%; }
          }
          .animate-pagination-progress {
            animation: pagination-progress linear forwards;
          }
        `}</style>
        </div>
        {/* Desktop pagination (md+) */}
        <div className="hidden md:flex absolute bottom-8 left-0 w-full justify-center z-30">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-[3px] w-12 rounded-full transition-all duration-300 relative overflow-hidden cursor-pointer ${idx === currentIndex ? 'bg-white/70' : 'bg-white/40'}`}
                onClick={() => goTo(idx)}
              >
                {/* Progress bar */}
                <div
                  key={progressKey + '-' + idx}
                  className={
                    idx === currentIndex
                      ? 'absolute left-0 top-0 h-full bg-white animate-pagination-progress'
                      : 'absolute left-0 top-0 h-full bg-white opacity-0'
                  }
                  style={{
                    width: idx === currentIndex ? '100%' : 0,
                    animationDuration: idx === currentIndex ? AUTOPLAY_DELAY + 'ms' : undefined,
                  }}
                />
              </div>
            ))}
          </div>
          {/* Progress animation style */}
          <style>{`
          @keyframes pagination-progress {
            0% { width: 0; }
            100% { width: 100%; }
          }
          .animate-pagination-progress {
            animation: pagination-progress linear forwards;
          }
        `}</style>
        </div>
        {/* SWIPER SLIDES */}
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
          loop
          speed={SLIDE_SPEED}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiper}
          className="h-full"
          allowTouchMove={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    className="w-full h-full object-cover absolute inset-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={slide.src}
                    className="w-full h-full object-cover absolute inset-0"
                    alt="Slide"
                  />
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)' }} />
                {/* Matn va tugmalar */}
                <div
                  className={`absolute !pb-20 md:!pb-28 left-0 bottom-0 w-full z-20 flex flex-col items-start justify-end transition-all duration-700 ${currentIndex === index ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8 pointer-events-none'}`}
                  style={{ fontFamily: "'astonmartinframe', sans-serif", transitionProperty: 'opacity, transform', transitionDelay: currentIndex === index ? '300ms' : '0ms' }}
                >
                  <div className="w-full mx-auto px-5 lg:px-20">
                    {slide.subtitle && <div className="text-white text-xs md:text-sm font-light mb-2 tracking-widest uppercase opacity-90" style={{ letterSpacing: '0.15em', fontWeight: 300 }}>{slide.subtitle}</div>}
                    {slide.headline && <h2 className="text-white text-2xl md:text-5xl font-light mb-4 leading-tight whitespace-pre-line" style={{ lineHeight: 1.1, fontWeight: 300 }}>{slide.headline}</h2>}
                    {slide.description && <p className="mb-6 text-base md:text-lg font-light text-white opacity-90" style={{ fontWeight: 300 }}>{slide.description}</p>}
                    <div className="flex flex-col md:flex-row gap-3 mt-6">
                      {slide.buttons.map((btn, i) => (
                        <a
                          key={i}
                          href={btn.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            btn.style === "primary"
                              ? "px-8 py-4 rounded-sm bg-white text-[#00605c] font-semibold text-base md:text-lg shadow border-none transition hover:opacity-90 opacity-95"
                              : "px-8 py-4 rounded-sm bg-[#9ca3af] text-white font-semibold text-base md:text-lg shadow border-none transition hover:opacity-90 opacity-95"
                          }
                          style={{ minWidth: '160px', textAlign: 'center', fontFamily: "'astonmartinframe', sans-serif", fontWeight: 300 }}
                        >
                          {btn.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi asperiores corrupti, dolores magni sed laboriosam exercitationem voluptatibus soluta alias id debitis voluptatem tenetur repellat adipisci numquam excepturi eos blanditiis dolor?
      </div>
    </>

  );
};

export default Slider;
