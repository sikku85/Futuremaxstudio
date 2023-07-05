import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Typewriter = () => {
    
    const typedRef = useRef(null);

    useEffect(() => {
      const strings = [
        "Flimmaker",
        "Photographer",
        "Wedding Planner",
        "Video Editor",
      ];
  
      const options = {
        strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
      };
  
      const typed = new Typed(typedRef.current, options);
  
      // Cleanup on component unmount
      return () => {
        typed.destroy();
      };
    }, []);
  
    return <span className="role" ref={typedRef}></span>;
}
