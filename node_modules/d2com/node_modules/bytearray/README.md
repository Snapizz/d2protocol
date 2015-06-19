# bytearray

a Node.JS module for Buffer processing exposes API similar to ByteArray of ActionScript

## Install
Install the module with: `npm install bytearray`

```javascript
var bytearray = require('bytearray');
```

## Usage
 * bytearray.readBoolean(buf, [offset]):Boolean
 * bytearray.readInt(buf, [offset]):int
 * bytearray.readShort(buf, [offset]):int
 * bytearray.readUnsignedByte(buf, [offset]):uint
 * bytearray.readUnsignedInt(buf, [offset]):uint
 * bytearray.readUnsignedShort(buf, [offset]):uint
 * bytearray.readUTF(buf, [offset]):String
 * bytearray.readUTFByte(buf, [offset]s(length:uint):String
 * bytearray.writeBoolean(value:Boolean):void
 * bytearray.writeByte(value:int):void
 * bytearray.writeBytes(bytes:ByteArray, offset:uint = 0, length:uint = 0):void
 * bytearray.writeInt(value:int):void
 * bytearray.writeShort(value:int):void
 * bytearray.writeUnsignedInt(value:uint):void
 * bytearray.writeUTF(value:String):void

## License
Copyright (c) 2013 yi
Licensed under the MIT license.
