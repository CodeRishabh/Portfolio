/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../scrollStyles.css';

const Scroller = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 50) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <a
        href="javascript:"
        id="return-to-top"
        className={showButton ? 'show' : ''}
        onClick={scrollToTop}
      >
        <i><FontAwesomeIcon icon={faChevronUp} /></i>
      </a>
    );
  };
  
  export default Scroller;
