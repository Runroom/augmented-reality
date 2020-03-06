# Animation example

This animation simulates a Sci-Fi teletransporter which brings a rocket into scene.

## Markdown
Uses 3 elements:
* Torus - It is a shape in the form of a doughnut where the inner and outer radius can be defined.
```
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.025; arc: 360"
  material="side: double; color: #5214FF; opacity: 0.7;"
  position="0 -0.5 0"
  rotation="90 0 0"
  scale="0.75 0.75 0.75"
>
</a-entity>
```

* Box - A classic box element, this time used as an entity with a box primitive.
```
<a-entity
  geometry="primitive: box;"
  material="color: #00C7FF; opacity: 0;"
  position="0 0 0"
  scale="1 1 1"
></a-entity>
```

* Model - An example model of a rocket, which will be animated to launch.
```
<a-assets>
  <a-asset-item id="model" src="./models/example/model.obj"></a-asset-item>
  <a-asset-item id="texture" src="./models/example/model.mtl"></a-asset-item>
</a-assets>
<a-obj-model
  src="#model"
  mtl="#texture"
  side="double"
  position="0 -0.5 0"
  scale="0.05 0.05 0.05"
></a-obj-model>
```

---

## References
* For more detailed and specific reading see the [documentation](https://aframe.io/docs/1.0.0/components/animation.html).
