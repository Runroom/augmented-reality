# 3D Model

Models are divided in 2 files:
* `.obj`: Contains the 3D object, _shape_ of the element
* `.mtl`: Contains the material, the colors and textures.

## Markdown
We place the assets so the `<a-obj-model>` tags can reference the files. The urls can be specified inline but it's not recommended by the library author.

```
<a-assets>
  <a-asset-item id="model-obj" src="model.obj"></a-asset-item>
  <a-asset-item id="model-mtl" src="model.mtl"></a-asset-item>
</a-assets>
<a-obj-model src="#model-obj" mtl="#model-mtl"></a-obj-model>
<a-obj-model src="model.obj" mtl="crate.mtl"></a-obj-model>
```

---

## References
For more detailed and specific reading see the [documentation](https://aframe.io/docs/1.0.0/primitives/a-obj-model.html).<br />
More info on models can be found [here](https://aframe.io/docs/1.0.0/introduction/models.html)