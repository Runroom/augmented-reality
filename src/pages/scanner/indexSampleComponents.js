import React, { useEffect, useState } from "react";

import Loader from '../../components/loader';
// import ImageScene from '../../components/imageScene';
// import CustomScene from '../../components/customScene';
// import HiroScene from '../../components/hiroScene';
import TextScene from "../../components/textScene";

// import poster from './poster.png';
const text =
"¿This is the text that I'm displaying on the text box. This is how it should be long enought to be cut down";
// const colors = [
//   {
//     text: "first line of text",
//     color: "red"
//   },
//   {
//     text: "first line of text",
//     color: "blue"
//   },
//   {
//     text: "first line of text",
//     color: "yellow"
//   }
// ];

const Scanner = () => {
  const [loaded, setLoaded] = useState(false);
  // const [src, setSrc] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      // setSrc(poster);
      setContent(text);
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!loaded) return <Loader />;

  return (
    <div className="scene">
      <a-scene embedded arjs="trackingMethod: best;">
        {/* <ImageScene src={src} /> */}
        {/* <HiroScene /> */}
        {/* <CustomScene /> */}
        <TextScene text={content} />
        <a-camera-static />
      </a-scene>
    </div>
  );
};

export default Scanner;
