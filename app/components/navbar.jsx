"use client"
import { useEffect } from "react"; // Import useEffect from React
import { gsap } from "gsap"; // Import GSAP for animation
import Link from "next/link";

function CrazyGlowingText() {
  useEffect(() => {
    // GSAP animation setup for glowing effect
    gsap.to(".glowing-text", {
      textShadow: "0px 0px 10px rgba(0, 255, 255, 1), 0px 0px 20px rgba(0, 255, 255, 0.8), 0px 0px 30px rgba(0, 255, 255, 0.7)", // Only Cyan for glow
      color: "#00F1FF", // Neon Cyan for the text color
      scale: 1.1, // Slightly enlarge text for a pulsating effect
      repeat: -1,  // Infinite loop
      yoyo: true,  // Reverse animation after completion
      ease: "power1.inOut", // Smooth easing
      duration: 2, // Duration of each cycle
    });

    gsap.to(".glowing-text", {
      // Color cycling between Neon Cyan and Neon Purple
      color: "#8A2BE2", // Neon Purple (only purple cycling now)
      repeat: -1,  // Infinite loop
      yoyo: true,  // Reverse after completion
      duration: 2, // Duration for color change
      ease: "power1.inOut",
      delay: 1 // Delay the color change slightly for visual effect
    });
  }, []); // Only run once on mount

  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="glowing-text text-4xl lg:text-5xl font-extrabold transition-all duration-300 ease-in-out transform hover:scale-110">
        zeusnotfound
      </Link>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-transparent hidden md:block">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center justify-center">
          <CrazyGlowingText /> {/* Your animated name */}
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-primary-icon">PROJECTS</div>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
