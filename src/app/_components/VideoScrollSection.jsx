"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.8 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        onEnter: () => {
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Handle potential autoplay restrictions
              setIsPlaying(false);
            });
            setIsPlaying(true);
          }
        },
        once: true,
      });
    }, sectionRef);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      ctx.revert();
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <section ref={sectionRef} className="relative z-10 w-full py-8 bg-bage">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={containerRef}
          className="relative w-full max-w-[80vw] lg:max-w-[70vw] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-dark/5 group cursor-pointer"
          onClick={togglePlay}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/video/vid.mp4" type="video/mp4" />
          </video>

          {/* Controls Overlay */}
          <div className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ${isPlaying && !isHovered ? "opacity-0" : "opacity-100"}`}>

            {/* Top Right: Fullscreen */}
            <div className="self-end">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
            </div>

            {/* Center: Play/Pause */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="md:w-16 md:h-16 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-transform transform group-hover:scale-110 pointer-events-auto">
                {isPlaying ? (
                  <Pause className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                ) : (
                  <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />
                )}
              </div>
            </div>

            {/* Bottom Right: Sound */}
            <div className="self-end z-10">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
