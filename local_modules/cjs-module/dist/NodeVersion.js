'use strict';

var undici = require('undici');

class NodeVersion {
  constructor() {
    console.log('NodeVersion');
    this.agent = undici.ProxyAgent;
  }
}

exports.NodeVersion = NodeVersion;
