# ecss/no-extend

ECSS recommends avoid `@extend`.

## GOOD👍

```scss
.foo {
  color: #000;
}

.bar {
  color: #fff;
}
```

## BAD👍

```scss
.foo {
  color: #000;
}

.bar {
  @extend .foo;
  color: #fff;
}
```
