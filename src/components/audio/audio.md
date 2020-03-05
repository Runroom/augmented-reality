# Video component
A component which renders a video element in a plane geometry. It can be also rendered as a texture of an entity element.

## Usage
### Markdown
We place in the assets the `<video>` tag that needs to be used.
```
<a-assets>
  <video
    id="myvideo"
    crossorigin="true"
    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  ></video>
</a-assets>
<a-marker preset="hiro">
  <a-video
    src="#myvideo"
    width="16"
    height="9"
    position="0 0 0"
    scale="0.2 0.2 0.2"
    vidHandler
  ></a-video>
</a-marker>
```

### Javascript
The component can be registered using `AFRAME.registerComponent` and use all the features that video allow.
```
AFRAME.registerComponent('vidhandler', {
  tick: () => {
    const visible = document.querySelector('a-marker').object3D.visible;

    if (visible) video.play();
    else video.pause();
  }
});
```

## References
* For more detailed and specific reading see the [documentation](https://aframe.io/docs/1.0.0/primitives/a-video.html)
* Video as material texture [here](https://aframe.io/docs/1.0.0/components/material.html#video-textures)
* Registering a component using AFRAME [here](https://aframe.io/docs/1.0.0/introduction/writing-a-component.html)
