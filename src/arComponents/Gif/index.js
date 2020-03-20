import React from "react";
// import 'aframe-gif-shader';

import withScene from '../../hoc/withScene';

const src = './images/nyancat.gif';

const Gif = () => (<a-entity geometry="primitive: plane;" material={`shader: gif; src: url(${src});`}></a-entity>);

export default withScene(Gif);
