
import React from 'react';
// import styles from './styles.module.scss';

/**
 * Icons
 * 
 * Icons are from: https://systemuicons.com/
 */

// const Icon = ({children, ...props}) => {
//   return (
//     <svg {...props}>
//       {children}
//     </svg>
//   );
// };

export function ChevronUp() {
  return (
    <svg className="simplyIcon simplyIcon--chevronUp" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
      <polyline fill="none" stroke="#2A2E3B" strokeLinecap="round" strokeLinejoin="round" points="7.328 1.672 7.328 7.328 1.672 7.328" transform="rotate(-135 9.157 7.258)"/>
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg className="simplyIcon simplyIcon--chevronDown" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
      <path d="m8.5.5-4 4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(6 8)"/>
    </svg>
  );
}

export function ChevronLeft() {
  return (
    <svg className="simplyIcon simplyIcon--chevronLeft" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
      <path d="m4.5 8.5-4-4 4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(7 6)"/>
    </svg>
  );
}

export function ChevronRight() {
  return (
    <svg className="simplyIcon simplyIcon--chevronRight" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
      <path d="m.5 8.5 4-4-4-4" fill="none" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(9 6)"/>
    </svg>
  );
}

// export function IconTemplate() {
//   return (
    
//   );
// }