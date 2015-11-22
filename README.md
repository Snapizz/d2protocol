# d2protocol

Protocol dofus 2.0 (enums, messages, types).

# Install

```
$ npm install d2protocol bytearray2 --save
```

# Example usage

``` js
var d2protocol = require('d2protocol');
var ByteArray = require('bytearray2');

var AccessoryPreviewErrorEnum = d2protocol.AccessoryPreviewErrorEnum; // access all enum like this

// serialize Message
var buff = new ByteArray();
var wrapper = new Protocol.CustomDataWrapper(buff);
var helloConnectMessage = new Protocol.helloConnectMessage();

helloConnectMessage.salt = 'hello d2protocol';
helloConnectMessage.key = [24,32,1,5,45,78];
helloConnectMessage.pack(wrapper);

// deserialize

var wrapper2 = new Protocol.CustomDataWrapper(wrapper);
var helloConnectMessage2 = Protocol.MessageReceiver.parse(wrapper2);

// helloConnectMessage2.key => [24,32,1,5,45,78]
// helloConnectMessage2.salt => hello d2protocol
```

# API Doc

https://github.com/Snapizz/d2protocol/tree/master/doc

download src and open doc/index.html
