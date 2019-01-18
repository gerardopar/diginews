import React from 'react';

// creates a global state
export default React.createContext({
    showMobileNav: null, // showMobileNav state
    handleMobileNav: () => {},
    handleNavCollapse: () => {} // nav collapse state
});