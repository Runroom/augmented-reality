import React from 'react';

import Animation from '../../arComponents/Animation';
import Box from '../../arComponents/Box';
import Text from '../../arComponents/Text';
import Image from '../../arComponents/Image';
import Model from '../../arComponents/Model';
import Video from '../../arComponents/Video';
import Sound from '../../arComponents/Sound';
import JSComponent from '../../arComponents/JSComponent';
import Page from '../../components/Page';

import { capitalize, loadScriptAsync } from '../../utils/helpers';
import { SceneWrapper } from './styles';
import { isPrevLocationHomePage } from '../../utils/history';

const componentType = {
  animation: Animation,
  box: Box,
  text: Text,
  image: Image,
  model: Model,
  video: Video,
  sound: Sound,
  jsComponent: JSComponent
};

class Scene extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    const aframeTag = document.createElement('script');
    const arjsTag = document.createElement('script');
    const aframePromise = loadScriptAsync(aframeTag, 'https://aframe.io/releases/1.0.4/aframe.min.js');
    const arjsPromise = loadScriptAsync(arjsTag, 'https://cdn.rawgit.com/jeromeetienne/AR.js/2.2.0/aframe/build/aframe-ar.js');

    aframeTag.id = 'aframe-script';
    arjsTag.id = 'arjs-script';

    Promise.all([aframePromise, arjsPromise]).then(() => {
      this.setState({ loaded: true });
      document.body.style = 'margin: 0; overflow: hidden';
    });
  }

  componentWillUnmount() {
    if (isPrevLocationHomePage) window.location.reload();

    document.body.removeAttribute('style');
    document.getElementById('arjs-video').remove();
  }

  render() {
    const { component } = this.props;
    const { loaded } = this.state;
    const Component = componentType[component];

    return loaded ? (
      <Page title={`${capitalize(component)} example`}>
        <SceneWrapper>
          <Component />
        </SceneWrapper>
      </Page>
    ) : 'Loading...';
  }
};

export default Scene;

