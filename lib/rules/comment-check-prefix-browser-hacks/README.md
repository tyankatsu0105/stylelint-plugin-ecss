# comment-check-prefix-browser-hacks

This rule check whether comment contain `HHHack` when you use device/browser hacks.

## Good👍

```scss
// HHHack this is hack
.bar {
  color: #fff;
}
```

## Bad👎

```scss
// HHhack this is hack
.bar {
  color: #fff;
}
```

```scss
// hhhack this is hack
.bar {
  color: #fff;
}
```

```scss
// Hhhack this is hack
.bar {
  color: #fff;
}
```
