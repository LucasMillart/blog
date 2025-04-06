'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * Component that detects the current theme and displays content accordingly
 * @param {Object} props
 * @param {string} props.darkSrc - Image source for dark theme
 * @param {string} props.lightSrc - Image source for light theme
 * @param {string} props.alt - Alt text for the image
 * @param {number} props.width - Width of the image
 * @param {number} props.height - Height of the image
 * @param {Object} props.imageProps - Additional props for the Image component
 */
const ThemeAwareImage = ({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  imageProps = {}
}) => {
  const [theme, setTheme] = useState('dark'); // Default is dark as specified

  useEffect(() => {
    // Function to detect current theme
    const detectTheme = () => {
      // Check data-theme attribute on HTML element
      const htmlTheme = document.documentElement.getAttribute('data-theme');

      if (htmlTheme) {
        setTheme(htmlTheme);
      } else {
        // Check for theme controller if it exists
        const themeController = document.querySelector('.theme-controller:checked');
        if (themeController) {
          setTheme(themeController.value);
        } else {
          // Default to dark theme as specified
          setTheme('dark');
        }
      }
    };

    // Detect theme on mount
    detectTheme();

    // Watch for theme changes
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Listen for theme controller changes
    document.addEventListener('change', event => {
      if (event.target.classList.contains('theme-controller')) {
        detectTheme();
      }
    });

    return () => {
      observer.disconnect();
      document.removeEventListener('change', detectTheme);
    };
  }, []);

  // Select appropriate image based on theme
  const src = theme === 'dark' ? darkSrc : lightSrc;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...imageProps}
    />
  );
};

export default ThemeAwareImage;