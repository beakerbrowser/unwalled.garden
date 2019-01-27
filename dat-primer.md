# A Quick Primer on Dat

Dat is a peer-to-peer protocol for publishing data trustlessly. It uses cryptography to sign and verify all information. Like BitTorrent, users can "seed" data to help keep it online and contribute bandwidth.

Each "dat" is given a public key address which looks like this:

```
dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3/
```

The public key is a 64-character hex string. DNS may be used to provide a human-readable shortname which maps to the public key:

```
dat://datprotocol.com/
```

Dat is actually a highly modular design. It can publish many kinds of data, including event logs and key-value databases. However, the most common usecase is to share sets of files which are called "dat archives."

Applications like the Beaker Browser use dat archives like websites. Users can browse to the dat archives and view the HTML/CSS/JS just like any HTTP website. Because anybody can create a dat archive by simply creating a new public key, users on the Dat Web can freely create and publish their own websites.

## How unwalled.garden uses Dat

The unwalled.garden spec is a collection of site & file schemas which are used on the Dat Web. The Beaker Browser includes APIs to interact with these schemas.

By reading & writing files with these schemas, applications are able to integrate with each other on the Dat Web.