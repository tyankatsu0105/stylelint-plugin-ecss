# background-no-base64

This rule disallow inline assets in the authoring style sheets.

## Good👍

```scss
.bar {
  background: inline("/path/to-image/relevant-image-name.png");
}
```

```scss
.bar {
  background-image: inline("/path/to-image/relevant-image-name.png");
}
```

## Bad👎

```scss
.bar {
  background: url(data:image/gif;base64,foobarfoobarfoobar);
}
```

```scss
.bar {
  background-image: url(data:image/gif;base64,foobarfoobarfoobar);
}
```
