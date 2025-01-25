/*
  React components typically contain a mix of logic and presentation. By logic, we refer to anything
that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation 
is the part of the render where we create the elements to be displayed on the UI.
*/

import React, { useState, useEffect } from 'react';
import Geolocation from './1.2_Geolocation';

const GeolocationContainer: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const handleSuccess = ({
    coords: { latitude, longitude },
  }: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const handleError = (err: GeolocationPositionError) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  return (
    <div>
      <Geolocation latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default GeolocationContainer;