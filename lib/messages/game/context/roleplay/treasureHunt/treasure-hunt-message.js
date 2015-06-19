var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntMessage = function() {
  this.questType = 0;
  this.startMapId = 0;
  this.knownStepsList = [];
  this.totalStepCount = 0;
  this.checkPointCurrent = 0;
  this.checkPointTotal = 0;
  this.availableRetryCount = 0;
  this.flags = [];
};

util.inherits(TreasureHuntMessage, BaseMessage);

TreasureHuntMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntMessage(output);
};

TreasureHuntMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntMessage(input);
};

TreasureHuntMessage.prototype.serializeAs_TreasureHuntMessage = function(output) {
  output.writeByte(this.questType);
  output.writeInt(this.startMapId);
  output.writeShort(this.knownStepsList.length);
  var _i3;
  while (_i3 < this.knownStepsList.length) {
    output.writeShort((this.knownStepsList[_i3]).getTypeId());
    (this.knownStepsList[_i3]).serialize(output);
    _i3++;
  };
  if (this.totalStepCount < 0) {
    throw (new Error((("Forbidden value (" + this.totalStepCount) + ") on element totalStepCount.")));
  };
  output.writeByte(this.totalStepCount);
  if (this.checkPointCurrent < 0) {
    throw (new Error((("Forbidden value (" + this.checkPointCurrent) + ") on element checkPointCurrent.")));
  };
  output.writeVarInt(this.checkPointCurrent);
  if (this.checkPointTotal < 0) {
    throw (new Error((("Forbidden value (" + this.checkPointTotal) + ") on element checkPointTotal.")));
  };
  output.writeVarInt(this.checkPointTotal);
  output.writeInt(this.availableRetryCount);
  output.writeShort(this.flags.length);
  var _i8;
  while (_i8 < this.flags.length) {
    (this.flags[_i8]).serializeAs_TreasureHuntFlag(output);
    _i8++;
  };
};

TreasureHuntMessage.prototype.deserializeAs_TreasureHuntMessage = function(input) {
  var _id3;
  var _item3;
  var _item8;
  this.questType = input.readByte();
  if (this.questType < 0) {
    throw (new Error((("Forbidden value (" + this.questType) + ") on element of TreasureHuntMessage.questType.")));
  };
  this.startMapId = input.readInt();
  var _knownStepsListLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _knownStepsListLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(TreasureHuntStep, _id3);
    _item3.deserialize(input);
    this.knownStepsList.push(_item3);
    _i3++;
  };
  this.totalStepCount = input.readByte();
  if (this.totalStepCount < 0) {
    throw (new Error((("Forbidden value (" + this.totalStepCount) + ") on element of TreasureHuntMessage.totalStepCount.")));
  };
  this.checkPointCurrent = input.readVarUhInt();
  if (this.checkPointCurrent < 0) {
    throw (new Error((("Forbidden value (" + this.checkPointCurrent) + ") on element of TreasureHuntMessage.checkPointCurrent.")));
  };
  this.checkPointTotal = input.readVarUhInt();
  if (this.checkPointTotal < 0) {
    throw (new Error((("Forbidden value (" + this.checkPointTotal) + ") on element of TreasureHuntMessage.checkPointTotal.")));
  };
  this.availableRetryCount = input.readInt();
  var _flagsLen = input.readUnsignedShort();
  var _i8;
  while (_i8 < _flagsLen) {
    _item8 = new TreasureHuntFlag();
    _item8.deserialize(input);
    this.flags.push(_item8);
    _i8++;
  };
};

TreasureHuntMessage.prototype.getMessageId = function() {
  return 6486;
};

TreasureHuntMessage.prototype.getClassName = function() {
  return 'TreasureHuntMessage';
};

module.exports.id = 6486;
module.exports.class = TreasureHuntMessage;