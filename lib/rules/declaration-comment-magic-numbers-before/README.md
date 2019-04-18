# declaration-comment-magic-numbers-before

This rule check whether comment exist the line before when you use magic number in value.

## Good👍

```scss
.bar {
  // About magic number
  font-size: 16px;
  /* About magic number */
  line-height: 1.7;
  /* About magic number */
  font-size: 1rem;
  color: #fff;
  background-color: #fff;
  // About magic number
  border-top: 1px solid #000;
}
```

## Bad👎

```scss
.bar {
  font-size: 16px;
  line-height: 1.7;
  font-size: 1rem;
  color: #fff;
  background-color: #fff;
  border-top: 1px solid #000;
}
```
