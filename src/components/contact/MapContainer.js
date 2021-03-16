import React, { Component } from "react"
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
//import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

// const center = {
//   lat: 40.41796751023873,
//   lng: -3.677368601979482,
// }
// const containerStyle = {
//   width: "400px", //props.style.width,
//   height: "300px", //props.style.height,
// }

// function MyComponent(props) {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyADdi43fqJ7h82e5Jet-xIoOMIn2vzfJ84",
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds()
//     map.fitBounds(bounds)
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={18}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* <Marker
//         name="Niquel"
//         position={{
//           lat: 40.41796751023873,
//           lng: -3.677368601979482,
//         }}
//       /> */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   )
// }

// export default React.memo(MyComponent)

export class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      storeName: "",
      center: {},
    }
  }

  componentDidMount = () => {
    this.props.location && this.setStoreLocation()
  }

  setStoreLocation = () => {
    this.setState({
      storeName: this.props.storeName,
      center: {
        lat: this.props.location[1],
        lng: this.props.location[0],
      },
    })
  }

  render() {
    const style = {
      width: this.props.style.width,
      height: this.props.style.height,
    }

    return (
      <>
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.41796751023873,
            lng: -3.677368601979482,
          }}
          center={{
            lat: this.state.center.lat,
            lng: this.state.center.lng,
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="Niquel"
            position={this.state.center}
            // icon={{
            //   url:
            //     "https://res.cloudinary.com/pestana/image/upload/v1602604357/deorigen/marker_zi7cwi.png",
            //   scaledSize: new this.props.google.maps.Size(40, 40),
            // }}
          />
        </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_REACT_APP_GOOGLE_MAPS_API,
})(MapContainer)
