# Sound component
A component which renders a sound element. The sound elements plays since the scene is rendered so in order to play / pause the audio it can be done by registering the component in AFRAME

## Usage
### Markdown
We place in the assets the `<audio>` tag that needs to be used.
```
<a-assets>
  <audio
    id="mysound"
    crossOrigin="true"
    src='./audios/audio-sample.mp3';
  ></audio>
</a-assets>
<a-marker preset="hiro">
  <a-sound
    src="#mysound"
    audiohandler
  ></a-sound>
</a-marker>
```

### Javascript
The component can be registered using `AFRAME.registerComponent` and use all the features that video allow.
```
AFRAME.registerComponent('audiohandler', {
  tick: () => {
    const visible = document.querySelector('a-marker').object3D.visible;

    if (visible) audio.play();
    else audio.pause();
  }
});
```

## References
* For more detailed and specific reading see the [documentation](https://aframe.io/docs/1.0.0/primitives/a-sound.html)
* Registering a component using AFRAME [here](https://aframe.io/docs/1.0.0/introduction/writing-a-component.html)
* Sound attached to another entity as a background sound [here](https://aframe.io/docs/1.0.0/components/sound.html)
