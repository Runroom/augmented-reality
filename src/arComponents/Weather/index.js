import React from 'react';

import withScene from '../../hoc/withScene';
import getWeather from '../../utils/weather';

const WRAP_COUNT = 25;
const WIDTH = 3;

class Weather extends React.Component {
  state = {
    text: false
  }

  componentDidMount() {
    getWeather('Barcelona')
      .then(weather => {
        this.setState({ weather });
        const today = new Date(weather.date);

        let text = `${weather.description}`;
        text += `City: ${weather.city}, ${weather.country}\n`;
        text += `Today: ${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}\n`;
        text += `Temperature: ${weather.max} - ${weather.min}\n`;

        console.log(text);

        this.setState({ weather: text });
      });
  }

  render() {
    const { text } = this.state;

    // return weather && (
    //   <>
    //     <p>{`City: ${weather.city}, ${weather.country}`}</p>
    //     <p>{`Today: ${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`}</p>
    //     <p>{`Temperature: ${weather.max} - ${weather.min}`}</p>
    //     <p>{`Description: ${weather.description}`}</p>
    //   </>
    // );

    return text && (
      <a-marker-camera preset="hiro">
        <a-entity
          position={`-${WIDTH / 2} 0 0`}
        >
          <a-text
            geometry={`primitive: plane; width: ${WIDTH}; height: auto;`}
            color="red"
            material="color: transparent; opacity: 0;"
            value={text}
            position="0 0 0"
            wrap-count={WRAP_COUNT}
            align="left"
            anchor="left"
          ></a-text>
        </a-entity>
      </a-marker-camera>
    );
  }
}

export default withScene(Weather);
