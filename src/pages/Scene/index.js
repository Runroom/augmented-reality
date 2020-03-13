import React from 'react';
import Helmet from 'react-helmet';

import Animation from '../../arComponents/animation';
import Box from '../../arComponents/box';
import Text from '../../arComponents/text';
import Image from '../../arComponents/image';
import Model from '../../arComponents/model';
import Video from '../../arComponents/video';
import JSComponent from '../../arComponents/jsComponent';
import Page from '../../components/Page';

import { capitalize } from '../../utils/helpers';
import { SceneWrapper } from './styles';

const componentType = {
  animation: Animation,
  box: Box,
  text: Text,
  image: Image,
  model: Model,
  video: Video,
  jsComponent: JSComponent
};

class Scene extends React.Component {
  componentDidMount() {
    document.body.style = 'margin: 0; overflow: hidden';
  }

  render() {
    const { component } = this.props;
    const Component = componentType[component];

    return (
      <Page title={`${capitalize(component)} example`}>
        <Helmet>
          <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
          <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/2.2.0/aframe/build/aframe-ar.js"></script>
        </Helmet>
        <SceneWrapper>
          <Component />
        </SceneWrapper>
      </Page>
    );
  }
};

export default Scene;

