import React, { useEffect } from 'react';

export function GoogleReviewsBadge() {
  useEffect(() => {
    // This safely injects the Featurable script when the component loads
    const script = document.createElement('script');
    script.src = "https://featurable.com/assets/v2/badge_default.min.js";
    script.defer = true;
    script.charset = "UTF-8";
    
    document.body.appendChild(script);

    // This cleans up the script if the user navigates away
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-start mt-8">
      {/* The container where Featurable will draw the badge */}
      <div 
        id="featurable-2c0c837e-f90c-424f-b7f1-62e7b60cef12" 
        data-featurable-async 
      ></div>
    </div>
  );
}