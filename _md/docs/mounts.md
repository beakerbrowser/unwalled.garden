## Dat Mounts

Dat has the ability to "mount" dats into each other as subfolders. This is similar to a symlink.

Bob could, for instance, mount the Unwalled.Garden site to his own site:

```
dat://bob.com/sites/ug -> dat://unwalled.garden/
```

Reading from a mounted folder is similar to reading a subfolder. Reading `/sites/ug/index.html` from Bob's site would give you the content of `dat://unwalled.garden/index.html`. 

Mounts have a performance benefit in Dat: because mount data can be transfered over an existing connection, it can be faster to read than loading the dat separately. We use that property to distribute metadata efficiently in the [refs directory](/dir/refs).

```
URL                                                  | Type
-------------------------------------------------------------------------------
dat://bob.com/.refs                                  | unwalled.garden/refs-dir
dat://bob.com/.refs/alice.com -> dat://alice.com     | unwalled.garden/person
dat://bob.com/.refs/carla.com -> dat://carla.com     | unwalled.garden/person
```

A reader uses the `.refs` folder to lookup information about sites which are referenced in JSON records. A common example is listing "followed" users' profiles: after fetching the [follows file](/follows), a reader can iterate through the sites in `.refs` to fetch their names, bios, and pictures.
