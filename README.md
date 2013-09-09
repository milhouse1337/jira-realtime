jira-realtime
=============

Real-Time monitoring dashboard for JIRA (Webhooks) using Node.js and Socket.io

This project is experimental and provides only a proof of concept of what is possible with Websockets and a simple Node.js app.

## Screenshot

![](https://raw.github.com/milhouse1337/jira-realtime/master/demo/img/jira-realtime-dashboard.png)

## Requirements

* Node.js
* NPM (Node Package Manager)
* An Apache Web server (optionnal)

## Installation

```bash
git clone https://github.com/milhouse1337/jira-realtime.git
cd jira-realtime
npm install
```

When you are ready you can launch your new Node.js app :) The default port is set to 3000.

```bash
node app.js
```
Now you can edit the index.html file in the demo folder. Change the following line with your own parameters.

```js
var socket = io.connect('http://HOST_OR_IP:3000');
```

## JIRA integration using Webhooks

You should ask your administrator to do the following.

1. Get in Administration / System / Webhooks
2. Add a new Webhook with the same URL you used as the socket source BUT you will add /jira at the end.
3. Select the JQL and Events you want to monitor.
4. Save it.

Exemple URL: http://HOST_OR_IP:3000/jira

## LICENSE

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
Version 2, December 2004 

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. 

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

0. You just DO WHAT THE FUCK YOU WANT TO.
