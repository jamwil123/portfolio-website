import React from 'react'
import {GoogleMap} from 'react-google-maps'

export default function Maps() {
   
    return (
        <div>
<GoogleMap defualtZoom={10} defaultCentre={{lat:12, lng: 12}}/>
            
        </div>
    )
}
