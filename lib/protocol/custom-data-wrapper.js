/// <reference path="../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var ByteArray = require('ts-bytearray');
var m;
(function (m) {
    var CustomDataWrapper = (function () {
        function CustomDataWrapper(data) {
            this._data = data;
        }
        Object.defineProperty(CustomDataWrapper.prototype, "position", {
            get: function () {
                return this._data.position;
            },
            set: function (param1) {
                this._data.position = param1;
            },
            enumerable: true,
            configurable: true
        });
        CustomDataWrapper.prototype.readVarInt = function () {
            var _loc4_ = 0;
            var _loc1_ = 0;
            var _loc2_ = 0;
            var _loc3_ = false;
            while (_loc2_ < CustomDataWrapper.INT_SIZE) {
                _loc4_ = this._data.readByte();
                _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                if (_loc2_ > 0) {
                    _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                }
                else {
                    _loc1_ = _loc1_ + (_loc4_ & CustomDataWrapper.MASK_01111111);
                }
                _loc2_ = _loc2_ + CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (!_loc3_) {
                    return _loc1_;
                }
            }
            throw new Error('Too much data');
        };
        CustomDataWrapper.prototype.readVarUhInt = function () {
            return this.readVarInt();
        };
        CustomDataWrapper.prototype.readVarShort = function () {
            var _loc4_ = 0;
            var _loc1_ = 0;
            var _loc2_ = 0;
            var _loc3_ = false;
            while (_loc2_ < CustomDataWrapper.SHORT_SIZE) {
                _loc4_ = this._data.readByte();
                _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                if (_loc2_ > 0) {
                    _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                }
                else {
                    _loc1_ = _loc1_ + (_loc4_ & CustomDataWrapper.MASK_01111111);
                }
                _loc2_ = _loc2_ + CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (!_loc3_) {
                    if (_loc1_ > CustomDataWrapper.SHORT_MAX_VALUE) {
                        _loc1_ = _loc1_ - CustomDataWrapper.UNSIGNED_SHORT_MAX_VALUE;
                    }
                    return _loc1_;
                }
            }
            throw new Error('Too much data');
        };
        CustomDataWrapper.prototype.readVarUhShort = function () {
            return this.readVarShort();
        };
        CustomDataWrapper.prototype.readVarLong = function () {
            return this.readInt64(this._data).value();
        };
        CustomDataWrapper.prototype.readVarUhLong = function () {
            return this.readUInt64(this._data).value();
        };
        CustomDataWrapper.prototype.readBytes = function (param1, param2, param3) {
            if (param2 === void 0) { param2 = 0; }
            if (param3 === void 0) { param3 = 0; }
            this._data.readBytes(param1, param2, param3);
        };
        CustomDataWrapper.prototype.readBoolean = function () {
            return this._data.readBoolean();
        };
        CustomDataWrapper.prototype.readByte = function () {
            return this._data.readByte();
        };
        CustomDataWrapper.prototype.readUnsignedByte = function () {
            return this._data.readUnsignedByte();
        };
        CustomDataWrapper.prototype.readShort = function () {
            return this._data.readShort();
        };
        CustomDataWrapper.prototype.readUnsignedShort = function () {
            return this._data.readUnsignedShort();
        };
        CustomDataWrapper.prototype.readInt = function () {
            return this._data.readInt();
        };
        CustomDataWrapper.prototype.readUnsignedInt = function () {
            return this._data.readUnsignedInt();
        };
        CustomDataWrapper.prototype.readFloat = function () {
            return this._data.readFloat();
        };
        CustomDataWrapper.prototype.readDouble = function () {
            return this._data.readDouble();
        };
        CustomDataWrapper.prototype.readMultiByte = function (param1, param2) {
            return this._data.readMultiByte(param1, param2);
        };
        CustomDataWrapper.prototype.readUTF = function () {
            return this._data.readUTF();
        };
        CustomDataWrapper.prototype.readUTFBytes = function (param1) {
            return this._data.readUTFBytes(param1);
        };
        Object.defineProperty(CustomDataWrapper.prototype, "bytesAvailable", {
            get: function () {
                return this._data.bytesAvailable;
            },
            enumerable: true,
            configurable: true
        });
        CustomDataWrapper.prototype.readObject = function () {
            return null;
        };
        Object.defineProperty(CustomDataWrapper.prototype, "endian", {
            get: function () {
                return this._data.endian;
            },
            set: function (param1) {
                this._data.endian = param1;
            },
            enumerable: true,
            configurable: true
        });
        CustomDataWrapper.prototype.writeVarInt = function (param1) {
            var _loc5_ = 0;
            var _loc2_ = new ByteArray();
            if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                _loc2_.writeByte(param1);
                this._data.writeBytes(_loc2_);
                return;
            }
            var _loc3_ = param1;
            var _loc4_ = new ByteArray();
            while (_loc3_ !== 0) {
                _loc4_.writeByte(_loc3_ & CustomDataWrapper.MASK_01111111);
                _loc4_.position = _loc4_.length - 1;
                _loc5_ = _loc4_.readByte();
                _loc3_ = _loc3_ >>> CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (_loc3_ > 0) {
                    _loc5_ = _loc5_ | CustomDataWrapper.MASK_10000000;
                }
                _loc2_.writeByte(_loc5_);
            }
            this._data.writeBytes(_loc2_);
        };
        CustomDataWrapper.prototype.writeVarShort = function (param1) {
            var _loc5_ = 0;
            if (param1 > CustomDataWrapper.SHORT_MAX_VALUE || param1 < CustomDataWrapper.SHORT_MIN_VALUE) {
                throw new Error('Forbidden value');
            }
            var _loc2_ = new ByteArray();
            if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                _loc2_.writeByte(param1);
                this._data.writeBytes(_loc2_);
                return;
            }
            var _loc3_ = param1 & 65535;
            var _loc4_ = new ByteArray();
            while (_loc3_ !== 0) {
                _loc4_.writeByte(_loc3_ & CustomDataWrapper.MASK_01111111);
                _loc4_.position = _loc4_.length - 1;
                _loc5_ = _loc4_.readByte();
                _loc3_ = _loc3_ >>> CustomDataWrapper.CHUNCK_BIT_SIZE;
                if (_loc3_ > 0) {
                    _loc5_ = _loc5_ | CustomDataWrapper.MASK_10000000;
                }
                _loc2_.writeByte(_loc5_);
            }
            this._data.writeBytes(_loc2_);
        };
        CustomDataWrapper.prototype.writeVarLong = function (param1) {
            var _loc3_ = 0;
            var _loc2_ = new ByteArray.Int64(param1, 0);
            if (_loc2_.high === 0) {
                this.writeint32(this._data, _loc2_.low);
            }
            else {
                _loc3_ = 0;
                while (_loc3_ < 4) {
                    this._data.writeByte(_loc2_.low & 127 | 128);
                    _loc2_.low = _loc2_.low >>> 7;
                    _loc3_++;
                }
                if ((_loc2_.high & 268435455 << 3) === 0) {
                    this._data.writeByte(_loc2_.high << 4 | _loc2_.low);
                }
                else {
                    this._data.writeByte((_loc2_.high << 4 | _loc2_.low) & 127 | 128);
                    this.writeint32(this._data, _loc2_.high >>> 3);
                }
            }
        };
        CustomDataWrapper.prototype.writeBytes = function (param1, param2, param3) {
            if (param2 === void 0) { param2 = 0; }
            if (param3 === void 0) { param3 = 0; }
            this._data.writeBytes(param1, param2, param3);
        };
        CustomDataWrapper.prototype.writeBoolean = function (param1) {
            this._data.writeBoolean(param1);
        };
        CustomDataWrapper.prototype.writeByte = function (param1) {
            this._data.writeByte(param1);
        };
        CustomDataWrapper.prototype.writeShort = function (param1) {
            this._data.writeShort(param1);
        };
        CustomDataWrapper.prototype.writeInt = function (param1) {
            this._data.writeInt(param1);
        };
        CustomDataWrapper.prototype.writeUnsignedInt = function (param1) {
            this._data.writeUnsignedInt(param1);
        };
        CustomDataWrapper.prototype.writeFloat = function (param1) {
            this._data.writeFloat(param1);
        };
        CustomDataWrapper.prototype.writeDouble = function (param1) {
            this._data.writeDouble(param1);
        };
        CustomDataWrapper.prototype.writeMultiByte = function (param1, param2) {
            this._data.writeMultiByte(param1, param2);
        };
        CustomDataWrapper.prototype.writeUTF = function (param1) {
            this._data.writeUTF(param1);
        };
        CustomDataWrapper.prototype.writeUTFBytes = function (param1) {
            this._data.writeUTFBytes(param1);
        };
        CustomDataWrapper.prototype.writeObject = function (param1) {
        };
        CustomDataWrapper.prototype.readInt64 = function (param1) {
            var _loc3_ = 0;
            var _loc2_ = new ByteArray.Int64(0, 0);
            var _loc4_ = 0;
            while (true) {
                _loc3_ = param1.readUnsignedByte();
                if (_loc4_ === 28) {
                    break;
                }
                if (_loc3_ >= 128) {
                    _loc2_.low = _loc2_.low | (_loc3_ & 127) << _loc4_;
                    _loc4_ = _loc4_ + 7;
                    continue;
                }
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                return _loc2_;
            }
            if (_loc3_ >= 128) {
                _loc3_ = _loc3_ & 127;
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                _loc2_.high = _loc3_ >>> 4;
                _loc4_ = 3;
                while (true) {
                    _loc3_ = param1.readUnsignedByte();
                    if (_loc4_ < 32) {
                        if (_loc3_ >= 128) {
                            _loc2_.high = _loc2_.high | (_loc3_ & 127) << _loc4_;
                        }
                        else {
                            break;
                        }
                    }
                    _loc4_ = _loc4_ + 7;
                }
                _loc2_.high = _loc2_.high | _loc3_ << _loc4_;
                return _loc2_;
            }
            _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
            _loc2_.high = _loc3_ >>> 4;
            return _loc2_;
        };
        CustomDataWrapper.prototype.readUInt64 = function (param1) {
            var _loc3_ = 0;
            var _loc2_ = new ByteArray.UInt64();
            var _loc4_ = 0;
            while (true) {
                _loc3_ = param1.readUnsignedByte();
                if (_loc4_ === 28) {
                    break;
                }
                if (_loc3_ >= 128) {
                    _loc2_.low = _loc2_.low | (_loc3_ & 127) << _loc4_;
                    _loc4_ = _loc4_ + 7;
                    continue;
                }
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                return _loc2_;
            }
            if (_loc3_ >= 128) {
                _loc3_ = _loc3_ & 127;
                _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
                _loc2_.high = _loc3_ >>> 4;
                _loc4_ = 3;
                while (true) {
                    _loc3_ = param1.readUnsignedByte();
                    if (_loc4_ < 32) {
                        if (_loc3_ >= 128) {
                            _loc2_.high = _loc2_.high | (_loc3_ & 127) << _loc4_;
                        }
                        else {
                            break;
                        }
                    }
                    _loc4_ = _loc4_ + 7;
                }
                _loc2_.high = _loc2_.high | _loc3_ << _loc4_;
                return _loc2_;
            }
            _loc2_.low = _loc2_.low | _loc3_ << _loc4_;
            _loc2_.high = _loc3_ >>> 4;
            return _loc2_;
        };
        CustomDataWrapper.prototype.writeint32 = function (param1, param2) {
            while (param2 >= 128) {
                param1.writeByte(param2 & 127 | 128);
                param2 = param2 >>> 7;
            }
            param1.writeByte(param2);
        };
        CustomDataWrapper.INT_SIZE = 32;
        CustomDataWrapper.SHORT_SIZE = 16;
        CustomDataWrapper.SHORT_MIN_VALUE = -32768;
        CustomDataWrapper.SHORT_MAX_VALUE = 32767;
        CustomDataWrapper.UNSIGNED_SHORT_MAX_VALUE = 65536;
        CustomDataWrapper.CHUNCK_BIT_SIZE = 7;
        CustomDataWrapper.MAX_ENCODING_LENGTH = Math.ceil(CustomDataWrapper.INT_SIZE / CustomDataWrapper.CHUNCK_BIT_SIZE);
        CustomDataWrapper.MASK_10000000 = 128;
        CustomDataWrapper.MASK_01111111 = 127;
        return CustomDataWrapper;
    })();
    m.CustomDataWrapper = CustomDataWrapper;
})(m || (m = {}));
module.exports = m;
