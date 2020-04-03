import React from 'react';

import getWeather from '../../utils/weather';
import theme from '../../config/theme';

const WRAP_COUNT = 25;
const WIDTH = 3;

class Weather extends React.Component {
  state = {
    loaded: false,
    weather: {},
    icon: ''
  }

  componentDidMount() {
    getWeather('Barcelona')
      .then(weather => {
        var downloadingImage = new Image();
        downloadingImage.onload = () => {
          this.setState({ loaded: true, weather, icon: downloadingImage.src });
        };
        downloadingImage.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
      });
  }

  render() {
    const { loaded, weather, icon } = this.state;

    return loaded && (
      <a-scene>
        <a-assets>
          <img id="image" src={icon} alt="" />
        </a-assets>
        <a-marker-camera preset="hiro">
          <a-entity
            geometry={`primitive: plane; height: ${WIDTH}; width: ${WIDTH * 1.2}`}
            material={`color: ${theme.colors.neutro100}`}
            position="0 0 0"
            scale=".5 .5 .5"
          >
            <a-text
              geometry={`primitive: plane; width: ${WIDTH}; height: auto;`}
              material="color: transparent; opacity: 0;"
              wrap-count={WRAP_COUNT}
              align="left"
              anchor="left"
              color={theme.colors.neutro600}
              value={`${weather.city}`}
              position={`-${WIDTH / 2} 1 0`}
            ></a-text>
            <a-image
              width={`${WIDTH / 2}`}
              height={`${WIDTH / 2}`}
              position={` ${WIDTH / 2} ${WIDTH / 2} 0`}
              src="#image"
              scale="1.2 1.2 1.2"
            ></a-image>
            <a-text
              geometry={`primitive: plane; width: ${WIDTH}; height: auto;`}
              material="color: transparent; opacity: 0;"
              wrap-count={WRAP_COUNT}
              align="left"
              anchor="left"
              color={theme.colors.neutro900}
              value={`${weather.temperature}*C`}
              position={`-1.6 0 0`}
              scale="3 3 3"
            ></a-text>
            <a-text
              geometry={`primitive: plane; width: ${WIDTH}; height: auto;`}
              material="color: transparent; opacity: 0;"
              wrap-count={WRAP_COUNT}
              align="left"
              anchor="left"
              color={theme.colors.neutro600}
              value={`${weather.description.toUpperCase()}`}
              position={`-${WIDTH / 2} -1 0`}
              scale=".8 .8 .8"
            ></a-text>
          </a-entity>
        </a-marker-camera>
      </a-scene>
    );
  }
}

export default Weather;
