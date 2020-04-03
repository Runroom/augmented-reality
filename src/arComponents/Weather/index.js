import React from 'react';

import withScene from '../../hoc/withScene';

import { capitalize } from '../../utils/helpers';
import getWeather from '../../utils/weather';
import theme from '../../config/theme';

const WRAP_COUNT = 25;
const WIDTH = 3;

class Weather extends React.Component {
  state = {
    text: 'Example text'
  }

  componentDidMount() {
    getWeather('Barcelona')
      .then(weather => {
        const today = new Date(weather.date);

        let text = `${capitalize(weather.description)}\n`;
        text += `City: ${weather.city}, ${weather.country}\n`;
        text += `Today: ${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}\n`;
        text += `Temperature: ${weather.max} - ${weather.min}\n`;

        this.setState({ text });
      });
  }

  render() {
    const { text } = this.state;

    return (
      <a-marker-camera preset="hiro">
        <a-entity
          geometry={`primitive: plane; height: ${WIDTH / 3}; width: auto`}
          material={`color: ${theme.colors.neutro100}`}
          text={`width: ${WIDTH}; wrap-count: ${WRAP_COUNT}; value: ${text}; color: ${theme.colors.neutro900}; align: left;`}
          position="0 0 0"
          scale=".5 .5 .5"
        ></a-entity>
      </a-marker-camera>
    );
  }
}

export default withScene(Weather);
