## A Quick Primer on Dat

[Dat](https://dat.foundation) is a peer-to-peer protocol for publishing files. It uses cryptography to sign and verify all information. Like BitTorrent, users can "seed" data to help keep it online and contribute bandwidth.

Each "dat" is given a public key address which looks like this:

> <a href="dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3/">dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3/</a>

The public key is a 64-character hex string, but DNS may be used to provide a human-readable shortname:

> <a href="dat://dat.foundation/">dat://dat.foundation/</a>

Dat is a highly flexible protocol. It can sync many kinds of data, including event logs and key-value databases. However, the most common usecase is to share filesets which are called "hyperdrives."

Applications like the [Beaker Browser](https://beakerbrowser.com) use hyperdrives as websites. Users can browse to the hyperdrives and view the HTML/CSS/JS just like any HTTP website. Because anybody can create a hyperdrive by simply creating a new public key, users on the Dat Web can freely create and publish their own websites.

### How unwalled.garden uses Dat

The unwalled.garden spec is a collection of site & file schemas which are used on the Dat Web. The [Beaker Browser](https://beakerbrowser.com) includes APIs to interact with these schemas.

The hyperdrives act as a shared global filesystem for the Dat Web. By reading & writing files with these schemas, applications are able to integrate with each other on the Dat Web.