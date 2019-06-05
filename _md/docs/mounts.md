## Dat Mounts

Dat has the ability to "mount" dats into each other as subfolders. This is similar to a symlink.

Consider this example:

```
dat://bob.com/sites/ug -> dat://unwalled.garden/
```

Reading from a mount is similar to reading a subfolder. In this case, reading `/sites/ug/index.html` would give you the content of `dat://unwalled.garden/index.html`. 

Mounts have a performance benefit in Dat: because mount data can be transfered over an existing connection, it can be faster to read than loading the dat separately. We use that property to distribute metadata efficiently in the [refs directory](/dir/refs).