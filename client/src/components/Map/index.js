import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useRef } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px',
};

// Coordinates for New York City
const cityCenter = {
    lat: 40.7128,
    lng: -74.006,
};

function Map() {
    const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY });

    const mapRef = useRef();

    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const onClick = useCallback((event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        console.log('Latitude: ', lat);
        console.log('Longitude: ', lng);
    }, []);

    if (!isLoaded) {
        return <></>;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={cityCenter} // Set center to the city coordinates
            zoom={12} // Adjust zoom level to show city
            onLoad={onLoad}
            onClick={onClick}
        />
    );
}

export default Map;
