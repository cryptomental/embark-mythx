Embark-MythX
======

A plugin for [Embark](https://github.com/embark-framework/embark) framework to analyze Smart Contracts using [MythX](https://mythx.io/) cloud service. Uses [Mythos](https://github.com/cleanunicorn/mythos) to connect to MythX.

Installation
======
In the running Embark console type

```Embark (development) > plugin install @cryptomental/embark-mythx```

or

In your Embark dApp directory:

```npm install @cryptomental/embark-mythx --save```

Visit (MythX)[https://mythx.io/] to register and set up MythX API password. Then add @cryptomental/embark-mythx plugin configuration to the plugins section in ```embark.json``` file:

```Json
  "plugins": {
    "@cryptomental/embark-mythx": {
      "mythxEthAddress": "YourMythXEthAddress",
      "mythxPassword": "YourMythXPassword"
    }
  }
```

It is also possible to use a predefined trial user account but the number of requests is limited and MythX analysis response is not guaranteed.

```Json
  "plugins": {
    "@cryptomental/embark-mythx": {
      "mythxEthAddress": "0x0000000000000000000000000000000000000000",
      "mythxPassword": "trial"
    }
  }
```

Requirements
======

- Embark 4.0.0+
