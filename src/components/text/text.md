# Text component
A component which renders text from the signed distance field (SDF) font text.
When rendering text we have different options like using a text element or a plane element with a text value.

## Markdown
The text element is usually wrapped by another element, a plane or an entity (using a plane geometry). This way we can transform the whole element, set a background color, etc. which will apply to everything contained inside.

```
<a-entity
  scale="1 1 1"
  rotation="-90 0 0"
  geometry="primitive: plane; width: 6; height: auto;"
  material="color: white;"
>
  <a-text
    value="Text component"
    color="red"
    position="0 0 0"
    align="left"
    wrap-count="25"
    anchor="left"
  ></a-text>
</a-entity>
```

## Fonts
There is a list of safe fonts defined by the AR library.
Custom fonts can be created by converting ttf fonts into `.fnt` or `.json` files. See [this link](https://aframe.io/docs/1.0.0/components/text.html#generating-sdf-fonts) on how to generate such fonts.

This project has Runroom's brand font (Roobert) converted and uploaded in this project. A set of charachters had to be specified when converting the font and it's the following:
```
ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂÂÊÔƠƯăâêôơư1234567890‘?’“!”(%)[]{@}/&\<-+÷×=>®©$€£¥#
```

---

## References
For more detailed and specific reading see the [documentation](https://aframe.io/docs/1.0.0/primitives/a-text.html#sidebar)
