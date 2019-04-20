# comment-check-prefix-browser-hacks

This rule check whether comment contain `HHHack` when you use device/browser hacks.

## Good👍

```scss
.bar {
  // HHHack this is hack
  color: #fff;
}
```

## Bad👎

```scss
.bar {
  // HHhack this is hack
  color: #fff;
}
```

```scss
.bar {
  // hhhack this is hack
  color: #fff;
}
```

```scss
.bar {
  // Hhhack this is hack
  color: #fff;
}
```
