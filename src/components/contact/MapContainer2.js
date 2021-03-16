import React from "react"
import GoogleStaticMap from "react-google-static"

const App = () => (
  <div>
    <h1>Google Static Maps API</h1>

    <GoogleStaticMap
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API}
      latitude={32.064171}
      longitude={34.7748068}
      style={{ width: 200, height: 200 }}
      size={{ width: 200, height: 200 }}
      zoom={16}
    />
  </div>
)

export default App
