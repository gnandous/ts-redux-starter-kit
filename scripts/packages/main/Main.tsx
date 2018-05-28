import * as React from 'react';
import { BaseAction } from '../../actions';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { SearchInput } from '../Search';

interface Props {
  compiler: string;
  framework: string;
  onBase: () => BaseAction;
}

interface State {
  lat: number;
  lng: number;
  zoom: number;
}

export default class Main extends React.Component<Props, State> {

  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  constructor (props: Props) {
    super(props);
  }

  render () {
    const {
      compiler,
      onBase,
      framework,
    } = this.props;

    const position: [number, number] = [this.state.lat, this.state.lng];

    return (
      <div>
        <h1>{framework} {compiler}</h1>
        <button onClick={onBase}>coucou</button>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy
            <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  };
}
