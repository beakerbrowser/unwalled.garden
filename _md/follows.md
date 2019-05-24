## Follows

---

 - **Type**: JSON Record
 - **Description**: A list of data subscriptions.
 - **Schema**: [unwalled.garden/follows](./follows.json)
 - **Path**: /data/follows.json

---

Follows are used to declare a data subscription. It indicates trust in the target entity as a source of information. Metadata about the followed sites can be found in `/data/known_sites`.

```json
{
  "type": "unwalled.garden/follows",
  "urls": ["dat://beakerbrowser.com", "dat://alice.com", "dat://bob.com"]
}
```