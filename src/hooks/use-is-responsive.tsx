import { useState, useEffect } from 'react';

export const useIsResponsive = (width: number) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= width);

  useEffect(() => {
    function updateIsResponsive() {
      setIsMobile(window.innerWidth <= width);
    }

    window.addEventListener('resize', updateIsResponsive);
    updateIsResponsive();

    return () => window.removeEventListener('resize', updateIsResponsive);
  }, [width]);

  return isMobile;
};
