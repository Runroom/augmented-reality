# Texture component
Registering a component using AFRAME gives the flexibility needed to build powerful components.
Using the javascript API, for example, the following points can be achieved:
* Advanced animation
* Render THREE.js elements inside the entities
* Track interaction with component and other elements

## Usage
### Javascript
The component name is registered and the behaviour is set using an object.
The different methods create the component, update it or are executed after an event triggering.
In this case a THREE.js box is registered and animated using the `init` and `tick` methods.
```
AFRAME.registerComponent('custom-box', {
  schema: {
    width: { type: 'number', default: 1 },
    height: { type: 'number', default: 1 },
    depth: { type: 'number', default: 1 },
    color: { type: 'color', default: '#ffff00' }
  },
  init: function () {
    var data = this.data;
    var el = this.el;

    const geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    const material = new THREE.MeshBasicMaterial({ color: data.color });
    const mesh = new THREE.Mesh(geometry, material);

    el.setObject3D('mesh', mesh);
  },
  tick: function () {
    const increment = THREE.Math.radToDeg(this.el.object3D.rotation.x) + 1;

    this.el.object3D.rotation.x = THREE.Math.degToRad(increment % 359);
  },
  play() {
    console.log('Playing...');
  },
  pause() {
    console.log('Pause!');
  }
});
```

### Markdown
The generic tag entity is used to link the register component `custom-box` with AFRAME
```
<a-entity
  custom-box="width: 1; height: 1; depth: 1; color: orange;"
  position="0 0 0"
></a-entity>
```

## References
* For more detailed and specific reading see the [documentation](https://aframe.io/docs/1.0.0/introduction/writing-a-component.html)
