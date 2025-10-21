import { useState, useRef, useEffect } from 'react';
import { UI } from '../../../../utils/constants';

export const useScrollManagement = (exercisesCount: number) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check scroll position and update button states
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  // Auto-scroll to end when exercises are added
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
      checkScrollPosition();
    }
  }, [exercisesCount]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: -UI.SCROLL_STEP, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ 
        left: UI.SCROLL_STEP, 
        behavior: 'smooth' 
      });
    }
  };

  return {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    checkScrollPosition,
    scrollLeft,
    scrollRight
  };
};
