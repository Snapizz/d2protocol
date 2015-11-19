/// <reference path="../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import ByteArray = require('ts-bytearray');

module m {
      export interface ICustomDataOutput {
            writeVarInt(param1: number): void;
            writeVarShort(param1: number): void;
            writeVarLong(param1: number): void;
            writeBytes(param1: ByteArray, param2?: number, param3?: number): void;
            writeBoolean(param1: boolean): void;
            writeByte(param1: number): void;
            writeShort(param1: number): void;
            writeInt(param1: number): void;
            writeUnsignedInt(param1: number): void;
            writeFloat(param1: number): void;
            writeDouble(param1: number): void;
            writeMultiByte(param1: string, param2: string): void;
            writeUTF(param1: string): void;
            writeUTFBytes(param1: string): void;
            writeObject(param1: any): void;
      }
      export interface ICustomDataInput {
            readVarInt(): number;
            readVarUhInt(): number;
            readVarShort(): number;
            readVarUhShort(): number;
            readVarLong(): number;
            readVarUhLong(): number;
            readBytes(param1: ByteArray, param2?: number, param3?: number): void;
            readBoolean(): boolean;
            readByte(): number;
            readUnsignedByte(): number;
            readShort(): number;
            readUnsignedShort(): number;
            readInt(): number;
            readUnsignedInt(): number;
            readFloat(): number;
            readDouble(): number;
            readMultiByte(param1: number, param2: string): string;
            readUTF(): string;
            readUTFBytes(param1: number): string;
            bytesAvailable: number;
            readObject(): any;
      }
      export class CustomDataWrapper implements ICustomDataOutput, ICustomDataInput {
            private static INT_SIZE: number = 32;
            private static SHORT_SIZE: number = 16;
            private static SHORT_MIN_VALUE: number = -32768;
            private static SHORT_MAX_VALUE: number = 32767;
            private static UNSIGNED_SHORT_MAX_VALUE: number = 65536;
            private static CHUNCK_BIT_SIZE: number = 7;
            private static MAX_ENCODING_LENGTH: number = Math.ceil(CustomDataWrapper.INT_SIZE / CustomDataWrapper.CHUNCK_BIT_SIZE);
            private static MASK_10000000: number = 128;
            private static MASK_01111111: number = 127;
            private _data: ByteArray;

            constructor(data: ByteArray) {
                  this._data = data;
            }

            public set position(param1: number) {
                  this._data.position = param1;
            }

            public get position(): number {
                  return this._data.position;
            }

            public readVarInt(): number {
                  var _loc4_: number = 0;
                  var _loc1_: number = 0;
                  var _loc2_: number = 0;
                  var _loc3_: boolean = false;
                  while (_loc2_ < CustomDataWrapper.INT_SIZE) {
                        _loc4_ = this._data.readByte();
                        _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                        if (_loc2_ > 0) {
                              _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                        } else {
                              _loc1_ = _loc1_ + (_loc4_ & CustomDataWrapper.MASK_01111111);
                        }
                        _loc2_ = _loc2_ + CustomDataWrapper.CHUNCK_BIT_SIZE;
                        if (!_loc3_) {
                              return _loc1_;
                        }
                  }
                  throw new Error('Too much data');
            }

            public readVarUhInt(): number {
                  return this.readVarInt();
            }

            public readVarShort(): number {
                  var _loc4_: number = 0;
                  var _loc1_: number = 0;
                  var _loc2_: number = 0;
                  var _loc3_: boolean = false;
                  while (_loc2_ < CustomDataWrapper.SHORT_SIZE) {
                        _loc4_ = this._data.readByte();
                        _loc3_ = (_loc4_ & CustomDataWrapper.MASK_10000000) === CustomDataWrapper.MASK_10000000;
                        if (_loc2_ > 0) {
                              _loc1_ = _loc1_ + ((_loc4_ & CustomDataWrapper.MASK_01111111) << _loc2_);
                        } else {
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
            }

            public readVarUhShort(): number {
                  return this.readVarShort();
            }

            public readVarLong(): number {
                  return this.readInt64(this._data).value();
            }

            public readVarUhLong(): number {
                  return this.readUInt64(this._data).value();
            }

            public readBytes(param1: ByteArray, param2: number = 0, param3: number = 0): void {
                  this._data.readBytes(param1, param2, param3);
            }

            public readBoolean(): boolean {
                  return this._data.readBoolean();
            }

            public readByte(): number {
                  return this._data.readByte();
            }

            public readUnsignedByte(): number {
                  return this._data.readUnsignedByte();
            }

            public readShort(): number {
                  return this._data.readShort();
            }

            public readUnsignedShort(): number {
                  return this._data.readUnsignedShort();
            }

            public readInt(): number {
                  return this._data.readInt();
            }

            public readUnsignedInt(): number {
                  return this._data.readUnsignedInt();
            }

            public readFloat(): number {
                  return this._data.readFloat();
            }

            public readDouble(): number {
                  return this._data.readDouble();
            }

            public readMultiByte(param1: number, param2: string): string {
                  return this._data.readMultiByte(param1, param2);
            }

            public readUTF(): string {
                  return this._data.readUTF();
            }

            public readUTFBytes(param1: number): string {
                  return this._data.readUTFBytes(param1);
            }

            public get bytesAvailable(): number {
                  return this._data.bytesAvailable;
            }

            public readObject(): any {
                  //return this._data.readObject();
                  return null;
            }

            /*public get objectEncoding(): number {
                  return this._data.objectEncoding;
            }
      
            public set objectEncoding(param1: number) {
                  this._data.objectEncoding = param1;
            }*/

            public get endian(): string {
                  return this._data.endian;
            }

            public set endian(param1: string) {
                  this._data.endian = param1;
            }

            public writeVarInt(param1: number): void {
                  var _loc5_: number = 0;
                  var _loc2_: ByteArray = new ByteArray();
                  if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                        _loc2_.writeByte(param1);
                        this._data.writeBytes(_loc2_);
                        return;
                  }
                  var _loc3_: number = param1;
                  var _loc4_: ByteArray = new ByteArray();
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
            }

            public writeVarShort(param1: number): void {
                  var _loc5_: number = 0;
                  if (param1 > CustomDataWrapper.SHORT_MAX_VALUE || param1 < CustomDataWrapper.SHORT_MIN_VALUE) {
                        throw new Error('Forbidden value');
                  }
                  var _loc2_: ByteArray = new ByteArray();
                  if (param1 >= 0 && param1 <= CustomDataWrapper.MASK_01111111) {
                        _loc2_.writeByte(param1);
                        this._data.writeBytes(_loc2_);
                        return;
                  }
                  var _loc3_: any = param1 & 65535;
                  var _loc4_: ByteArray = new ByteArray();
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
            }

            public writeVarLong(param1: number): void {
                  var _loc3_: number = 0;
                  var _loc2_: ByteArray.Int64 = new ByteArray.Int64(param1, 0);
                  if (_loc2_.high === 0) {
                        this.writeint32(this._data, _loc2_.low);
                  } else {
                        _loc3_ = 0;
                        while (_loc3_ < 4) {
                              this._data.writeByte(_loc2_.low & 127 | 128);
                              _loc2_.low = _loc2_.low >>> 7;
                              _loc3_++;
                        }
                        if ((_loc2_.high & 268435455 << 3) === 0) {
                              this._data.writeByte(_loc2_.high << 4 | _loc2_.low);
                        } else {
                              this._data.writeByte((_loc2_.high << 4 | _loc2_.low) & 127 | 128);
                              this.writeint32(this._data, _loc2_.high >>> 3);
                        }
                  }
            }

            public writeBytes(param1: ByteArray, param2: number = 0, param3: number = 0): void {
                  this._data.writeBytes(param1, param2, param3);
            }

            public writeBoolean(param1: boolean): void {
                  this._data.writeBoolean(param1);
            }

            public writeByte(param1: number): void {
                  this._data.writeByte(param1);
            }

            public writeShort(param1: number): void {
                  this._data.writeShort(param1);
            }

            public writeInt(param1: number): void {
                  this._data.writeInt(param1);
            }

            public writeUnsignedInt(param1: number): void {
                  this._data.writeUnsignedInt(param1);
            }

            public writeFloat(param1: number): void {
                  this._data.writeFloat(param1);
            }

            public writeDouble(param1: number): void {
                  this._data.writeDouble(param1);
            }

            public writeMultiByte(param1: string, param2: string): void {
                  this._data.writeMultiByte(param1, param2);
            }

            public writeUTF(param1: string): void {
                  this._data.writeUTF(param1);
            }

            public writeUTFBytes(param1: string): void {
                  this._data.writeUTFBytes(param1);
            }

            public writeObject(param1: any): void {
                  //this._data.writeObject(param1);
            }

            private readInt64(param1: ByteArray): ByteArray.Int64 {
                  var _loc3_: number = 0;
                  var _loc2_: ByteArray.Int64 = new ByteArray.Int64(0, 0);
                  var _loc4_: number = 0;
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
                                    } else {
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
            }

            private readUInt64(param1: ByteArray): ByteArray.UInt64 {
                  var _loc3_: number = 0;
                  var _loc2_: ByteArray.UInt64 = new ByteArray.UInt64();
                  var _loc4_: number = 0;
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
                                    } else {
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
            }

            private writeint32(param1: ByteArray, param2: number): void {
                  while (param2 >= 128) {
                        param1.writeByte(param2 & 127 | 128);
                        param2 = param2 >>> 7;
                  }
                  param1.writeByte(param2);
            }
      }
}

export = m;
