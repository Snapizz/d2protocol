var bytearray = require('bytearray'),
    Int64 = require('./int64.js'),
    UInt64 = require('./uInt64.js');

var INT_SIZE = 32,
    SHORT_SIZE = 16,
    SHORT_MIN_VALUE = -32768,
    SHORT_MAX_VALUE = 32767,
    UNSIGNED_SHORT_MAX_VALUE = 65536,
    CHUNCK_BIT_SIZE = 7,
    MAX_ENCODING_LENGTH = Math.ceil((INT_SIZE / CHUNCK_BIT_SIZE)),
    MASK_10000000 = 128,
    MASK_01111111 = 127;

var self;

var CustomDataWrapper = function (data) {
  self = this;
  self._data = data;
};

CustomDataWrapper.prototype.readVarInt = function () {
  var b, value = 0, offset = 0, hasNext;

  do
  {
    if (offset >= INT_SIZE)
    {
      throw (new Error("Too much data"));
    };

    b = self.readByte();
    hasNext = ((b & MASK_10000000) == MASK_10000000);

    if (offset > 0)
    {
      value = (value + ((b & MASK_01111111) << offset));
    }
    else
    {
      value = (value + (b & MASK_01111111));
    };

    offset = (offset + CHUNCK_BIT_SIZE);
  } while (hasNext);
  return (value);
};

CustomDataWrapper.prototype.readVarUhInt = function () {
  return (self.readVarInt());
};

CustomDataWrapper.prototype.readVarShort = function () {
  var b, value = 0, offset = 0, hasNext = false;

  do
  {
    if (offset >= SHORT_SIZE)
    {
      throw (new Error("Too much data"));
    };

    b = self.readByte();
    hasNext = ((b & MASK_10000000) == MASK_10000000);

    if (offset > 0)
    {
      value = (value + ((b & MASK_01111111) << offset));
    }
    else
    {
      value = (value + (b & MASK_01111111));
    };

    offset = (offset + CHUNCK_BIT_SIZE);
  } while (hasNext);

  if (value > SHORT_MAX_VALUE)
  {
    value = (value - UNSIGNED_SHORT_MAX_VALUE);
  };

  return (value);
};

CustomDataWrapper.prototype.readVarUhShort = function () {
  return (self.readVarShort());
};

CustomDataWrapper.prototype.readVarLong = function () {
  return (self.readInt64(self._data));
};

CustomDataWrapper.prototype.readVarUhLong = function () {
  return (self.readUInt64(self._data));
};

CustomDataWrapper.prototype.readBytes = function (bytes, offset, length) {
  throw new Error('Not implemented');
};

CustomDataWrapper.prototype.readBoolean = function () {
  return bytearray.readByte(self._data) === 1;
};

CustomDataWrapper.prototype.readByte = function () {
  return bytearray.readByte(self._data);
};

CustomDataWrapper.prototype.readUnsignedByte = function () {
  return bytearray.readUnsignedByte(self._data);
};

CustomDataWrapper.prototype.readShort = function () {
  return bytearray.readShort(self._data);
};

CustomDataWrapper.prototype.readUnsignedShort = function () {
  return bytearray.readUnsignedShort(self._data);
};

CustomDataWrapper.prototype.readInt = function () {
  return bytearray.readInt(self._data);
};

CustomDataWrapper.prototype.readUnsignedInt = function () {
  return bytearray.readUnsignedInt(self._data);
};

CustomDataWrapper.prototype.readFloat = function () {
  return bytearray.readFloat(self._data);
};

CustomDataWrapper.prototype.readDouble = function () {
  return self._data.readDoubleBE();
};

CustomDataWrapper.prototype.readMultiByte = function (length, charSet) {
  throw new Error('Not implemented');
};

CustomDataWrapper.prototype.readUTF = function () {
  return bytearray.readUTF(self._data);
};

CustomDataWrapper.prototype.readUTFBytes = function (length) {
  return bytearray.readUTFBytes(self._data, length);
};

CustomDataWrapper.prototype.bytesAvailable = function () {
  return bytearray.getBytesAvailable(self._data);
};

CustomDataWrapper.prototype.writeVarInt = function (value) {
  var b;
  var ba = new Buffer(INT_SIZE);

  if ((((value >= 0)) && ((value <= MASK_01111111))))
  {
    bytearray.writeByte(ba, value);
    self.writeBytes(ba);
    return;
  };

  var c = value;
  var buffer = new Buffer(INT_SIZE);

  while (c != 0)
  {
    bytearray.writeByte(buffer, (c & MASK_01111111));
    buffer.position = (buffer.length - 1);
    b = bytearray.readByte(buffer);
    c = (c >>> CHUNCK_BIT_SIZE);

    if (c > 0)
    {
      b = (b | MASK_10000000);
    };

    bytearray.writeByte(ba, b);
  };

  self.writeBytes(ba);
};

CustomDataWrapper.prototype.getData = function () {
  return bytearray.duplicate(self._data);
}

CustomDataWrapper.prototype.writeVarShort = function (value) {
  var b;

  if ((((value > SHORT_MAX_VALUE)) || ((value < SHORT_MIN_VALUE))))
  {
    throw (new Error("Forbidden value"));
  };

  var ba = new Buffer(INT_SIZE);

  if ((((value >= 0)) && ((value <= MASK_01111111))))
  {
    bytearray.writeByte(ba, value);
    self.writeBytes(ba);
    return;
  };

  var c = (value & 0xFFFF);
  var buffer = new Buffer(INT_SIZE);

  while (c != 0)
  {
    bytearray.writeByte(buffer, (c & MASK_01111111));
    buffer.position = (buffer.length - 1);
    b = bytearray.readByte(buffer);
    c = (c >>> CHUNCK_BIT_SIZE);
    if (c > 0)
    {
      b = (b | MASK_10000000);
    };
    bytearray.writeByte(ba, b);
  };

  self.writeBytes(ba);
};

CustomDataWrapper.prototype.writeVarLong = function (value) {
  var _local_3;
  var val = Int64.fromNumber(value);

  if (val.high == 0)
  {
    self.writeint32(self._data, val.low);
  }
  else
  {
    _local_3 = 0;
    while (_local_3 < 4)
    {
      self.writeByte(((val.low & 127) | 128));
      val.low = (val.low >>> 7);
      _local_3++;
    };
    if ((val.high & (268435455 << 3)) == 0)
    {
      this._data.writeByte(((val.high << 4) | val.low));
      self.writeByte(((val.high << 4) | val.low));
    }
    else
    {
      self.writeByte(((((val.high << 4) | val.low) & 127) | 128));
      self.writeint32(self._data, (val.high >>> 3));
    };
  };
};

CustomDataWrapper.prototype.writeBytes = function (bytes, offset, length) {
  self._data = Buffer.concat([self._data, bytes], length);
};

CustomDataWrapper.prototype.writeBoolean = function (value) {
  bytearray.writeBoolean(self._data, value);
};

CustomDataWrapper.prototype.writeByte = function (value) {
  bytearray.writeByte(self._data, value);
};

CustomDataWrapper.prototype.writeShort = function (value) {
  bytearray.writeShort(self._data, value);
};

CustomDataWrapper.prototype.writeInt = function (value) {
  bytearray.writeInt(self._data, value);
};

CustomDataWrapper.prototype.writeUnsignedInt = function (value) {
  bytearray.writeUnsignedInt(self._data, value);
};

CustomDataWrapper.prototype.writeFloat = function (value) {
  bytearray.writeFloat(self._data, value);
};

CustomDataWrapper.prototype.writeDouble = function (value) {
  self._data.writeDoubleBE(value);
};

CustomDataWrapper.prototype.writeMultiByte = function (value, charSet) {
  throw new Error('Not implemented');
};

CustomDataWrapper.prototype.writeUTF = function (value) {
  bytearray.writeUTF(self._data, value);
};

CustomDataWrapper.prototype.writeUTFBytes = function (value) {
  bytearray.writeUTFBytes(self._data, value);
};

CustomDataWrapper.prototype.readInt64 = function (input) {
  var b;
  var result = new Int64();
  var i = 0;
  while (true)
  {
    b = bytearray.readUnsignedByte(input);
    if (i == 28)
    {
      break;
    };
    if (b >= 128)
    {
      result.low = (result.low | ((b & 127) << i));
    }
    else
    {
      result.low = (result.low | (b << i));
      return (result);
    };
    i = (i + 7);
  };
  if (b >= 128)
  {
    b = (b & 127);
    result.low = (result.low | (b << i));
    result.high = (b >>> 4);
  }
  else
  {
    result.low = (result.low | (b << i));
    result.high = (b >>> 4);
    return (result);
  };
  i = 3;
  while (true)
  {
    b = bytearray.readUnsignedByte(input);
    if (i < 32)
    {
      if (b >= 128)
      {
        result.high = (result.high | ((b & 127) << i));
      }
      else
      {
        result.high = (result.high | (b << i));
        break;
      };
    };
    i = (i + 7);
  };
  return (result);
};

CustomDataWrapper.prototype.readUInt64 = function (input) {
  var b;
  var result = new UInt64();
  var i = 0;
  while (true)
  {
    b = bytearray.readUnsignedByte(input);
    if (i == 28)
    {
      break;
    };
    if (b >= 128)
    {
      result.low = (result.low | ((b & 127) << i));
    }
    else
    {
      result.low = (result.low | (b << i));
      return (result);
    };
    i = (i + 7);
  };
  if (b >= 128)
  {
    b = (b & 127);
    result.low = (result.low | (b << i));
    result.high = (b >>> 4);
  }
  else
  {
    result.low = (result.low | (b << i));
    result.high = (b >>> 4);
    return (result);
  };
  i = 3;
  while (true)
  {
    b = bytearray.readUnsignedByte(input);
    if (i < 32)
    {
      if (b >= 128)
      {
        result.high = (result.high | ((b & 127) << i));
      }
      else
      {
        result.high = (result.high | (b << i));
        break;
      };
    };
    i = (i + 7);
  };
  return (result);
};

CustomDataWrapper.prototype.writeint32 = function (output, value) {
  while (true)
  {
    if (value < 128)
    {
      bytearray.writeByte(output, value);
      return;
    };

    bytearray.writeByte(output, ((value & 127) | 128));
    value = (value >>> 7);
  };
};

module.exports = CustomDataWrapper;
