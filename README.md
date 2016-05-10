cryptochat2slack
================

Introduction
------------

This repository provides simple scripts that relays chat messages sent on cryptocurrency exchanges to your Slack channel.

Currently, following exchanges are supported.

 * [bitFlyer Lightning](https://lightning.bitflyer.jp/)
 * [coincheck](https://coincheck.jp/exchange)
 * [Zaif](https://zaif.jp/)



Setup
-----

``` bash
$ git clone https://github.com/visvirial/cryptochat2slack.git
$ cd cryptochat2slack
$ npm install
$ cp config.sample.json config.json
```

Then, edit `config.json` to adjust your environment.

If you use the same Slack configurations for multiple exchanges, please delete `EXCHANGE_NAME.slack.endpoint` and/or
`EXCHANGE_NAME.slack.channel` field.

Now, you can launch the script.

``` bash
$ npm start
```



