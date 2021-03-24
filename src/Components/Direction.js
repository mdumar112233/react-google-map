import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '100vh'
};

const location = {
    lat: 23.733348, lng: 90.406707
};


function Direction({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyANQK4Is2EdKMeJdIABKx0ly8-eXMFrC-s'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                    // required
                    options={{
                      destination: 'dhaka',
                      origin: 'comilla',
                      travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if(res !== null){
                          setDirectionResponse(res);
                        }
                    }}
                  />
                }
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    
                  />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)