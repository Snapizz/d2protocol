# d2protocol

Protocol dofus 2.0 (enums, messages, types).

# Install

```
$ npm install d2protocol bytearray2 --save
```

# Example usage

``` js
var Protocol = require('d2protocol');
var ByteArray = require('bytearray2');

var AccessoryPreviewErrorEnum = Protocol.AccessoryPreviewErrorEnum; // access all enum like this

// serialize Message
var buff = new ByteArray();
var wrapper = new Protocol.CustomDataWrapper(buff);
var message = new Protocol.IdentificationMessage();
message.key = [24,32,1,5,45,78];
message.salt = 'hello d2protocol';
message.pack(wrapper);

// deserialize

wrapper.position = 0;
var message_p = Protocol.MessageReceiver.parse(wrapper);

// message_p.key => [24,32,1,5,45,78]
// message_p.salt => hello d2protocol
```

# API Doc

https://github.com/Snapizz/d2protocol/tree/master/doc

download src and open doc/index.html
