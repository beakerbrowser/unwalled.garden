# Published sites

 - Description: Sites published by the agent/channel.
 - Schema: [`unwalled.garden/published-sites`](./published-sites.json)
 - Path: `/data/sites.json`

Agents and channels publish sites for their followers to crawl and index. The "published sites" record provides a list of sites which are officially "published." Metadata about the published sites can be found in `/data/known_sites`.

```json
{
  "type": "unwalled.garden/published-sites",
  "urls": [
    "dat://4c450354c436c221acac56db17754b53dc009ee2b747d68391b3bfbddb7b6782",
    "dat://a53dc009ee2b74b6782cac56db17754b4c450354c437d68391b3bfbddb76c221"
  ]
}
```