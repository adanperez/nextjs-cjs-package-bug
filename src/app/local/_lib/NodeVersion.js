'use strict';

import { ProxyAgent } from 'undici';

class NodeVersion {
  constructor() {
    console.log('NodeVersion');
    this.agent = ProxyAgent;
  }
}

export { NodeVersion };
