var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var IdentificationMessage = function() {
  this.version;
  this.lang = "";
  this.credentials = [];
  this.serverId = 0;
  this.autoconnect = false;
  this.useCertificate = false;
  this.useLoginToken = false;
  this.sessionOptionalSalt = 0;
  this.failedAttempts = [];
};

util.inherits(IdentificationMessage, BaseMessage);

IdentificationMessage.prototype.serialize = function(output) {
  this.serializeAs_IdentificationMessage(output);
};

IdentificationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_IdentificationMessage(input);
};

IdentificationMessage.prototype.serializeAs_IdentificationMessage = function(output) {
  var _loc2_ = 0;
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.autoconnect);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.useCertificate);
  _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 2, this.useLoginToken);
  param1.writeByte(_loc2_);
  this.version.serializeAs_VersionExtended(param1);
  param1.writeUTF(this.lang);
  param1.writeVarInt(this.credentials.length);
  var _loc3_ = 0;
  while (_loc3_ < this.credentials.length) {
    param1.writeByte(this.credentials[_loc3_]);
    _loc3_++;
  }
  param1.writeShort(this.serverId);
  if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.sessionOptionalSalt + ") on element sessionOptionalSalt.");
  } else {
    param1.writeDouble(this.sessionOptionalSalt);
    param1.writeShort(this.failedAttempts.length);
    var _loc4_ = 0;
    while (_loc4_ < this.failedAttempts.length) {
      if (this.failedAttempts[_loc4_] < 0) {
        throw new Error("Forbidden value (" + this.failedAttempts[_loc4_] + ") on element 9 (starting at 1) of failedAttempts.");
      } else {
        param1.writeVarShort(this.failedAttempts[_loc4_]);
        _loc4_++;
        continue;
      }
    }
    return;
  }
};

IdentificationMessage.prototype.deserializeAs_IdentificationMessage = function(input) {
  var _loc7_ = 0;
  var _loc8_ = 0;
  var _loc2_ = param1.readByte();
  this.autoconnect = BooleanByteWrapper.getFlag(_loc2_, 0);
  this.useCertificate = BooleanByteWrapper.getFlag(_loc2_, 1);
  this.useLoginToken = BooleanByteWrapper.getFlag(_loc2_, 2);
  this.version = new VersionExtended();
  this.version.deserialize(param1);
  this.lang = param1.readUTF();
  var _loc3_ = param1.readVarInt();
  var _loc4_ = 0;
  while (_loc4_ < _loc3_) {
    _loc7_ = param1.readByte();
    this.credentials.push(_loc7_);
    _loc4_++;
  }
  this.serverId = param1.readShort();
  this.sessionOptionalSalt = param1.readDouble();
  if (this.sessionOptionalSalt < -9.007199254740992E15 || this.sessionOptionalSalt > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.sessionOptionalSalt + ") on element of IdentificationMessage.sessionOptionalSalt.");
  } else {
    var _loc5_ = param1.readUnsignedShort();
    var _loc6_ = 0;
    while (_loc6_ < _loc5_) {
      _loc8_ = param1.readVarUhShort();
      if (_loc8_ < 0) {
        throw new Error("Forbidden value (" + _loc8_ + ") on elements of failedAttempts.");
      } else {
        this.failedAttempts.push(_loc8_);
        _loc6_++;
        continue;
      }
    }
    return;
  }
};

IdentificationMessage.prototype.getMessageId = function() {
  return 4;
};

IdentificationMessage.prototype.getClassName = function() {
  return 'IdentificationMessage';
};

module.exports.id = 4;
module.exports.class = IdentificationMessage;