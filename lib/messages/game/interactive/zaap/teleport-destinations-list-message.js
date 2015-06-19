var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TeleportDestinationsListMessage = function() {
  this.teleporterType = 0;
  this.mapIds = [];
  this.subAreaIds = [];
  this.costs = [];
  this.destTeleporterType = [];
};

util.inherits(TeleportDestinationsListMessage, BaseMessage);

TeleportDestinationsListMessage.prototype.serialize = function(output) {
  this.serializeAs_TeleportDestinationsListMessage(output);
};

TeleportDestinationsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TeleportDestinationsListMessage(input);
};

TeleportDestinationsListMessage.prototype.serializeAs_TeleportDestinationsListMessage = function(output) {
  output.writeByte(this.teleporterType);
  output.writeShort(this.mapIds.length);
  var _i2;
  while (_i2 < this.mapIds.length) {
    if (this.mapIds[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.mapIds[_i2]) + ") on element 2 (starting at 1) of mapIds.")));
    };
    output.writeInt(this.mapIds[_i2]);
    _i2++;
  };
  output.writeShort(this.subAreaIds.length);
  var _i3;
  while (_i3 < this.subAreaIds.length) {
    if (this.subAreaIds[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.subAreaIds[_i3]) + ") on element 3 (starting at 1) of subAreaIds.")));
    };
    output.writeVarShort(this.subAreaIds[_i3]);
    _i3++;
  };
  output.writeShort(this.costs.length);
  var _i4;
  while (_i4 < this.costs.length) {
    if (this.costs[_i4] < 0) {
      throw (new Error((("Forbidden value (" + this.costs[_i4]) + ") on element 4 (starting at 1) of costs.")));
    };
    output.writeVarShort(this.costs[_i4]);
    _i4++;
  };
  output.writeShort(this.destTeleporterType.length);
  var _i5;
  while (_i5 < this.destTeleporterType.length) {
    output.writeByte(this.destTeleporterType[_i5]);
    _i5++;
  };
};

TeleportDestinationsListMessage.prototype.deserializeAs_TeleportDestinationsListMessage = function(input) {
  var _val2;
  var _val3;
  var _val4;
  var _val5;
  this.teleporterType = input.readByte();
  if (this.teleporterType < 0) {
    throw (new Error((("Forbidden value (" + this.teleporterType) + ") on element of TeleportDestinationsListMessage.teleporterType.")));
  };
  var _mapIdsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _mapIdsLen) {
    _val2 = input.readInt();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of mapIds.")));
    };
    this.mapIds.push(_val2);
    _i2++;
  };
  var _subAreaIdsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _subAreaIdsLen) {
    _val3 = input.readVarUhShort();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of subAreaIds.")));
    };
    this.subAreaIds.push(_val3);
    _i3++;
  };
  var _costsLen = input.readUnsignedShort();
  var _i4;
  while (_i4 < _costsLen) {
    _val4 = input.readVarUhShort();
    if (_val4 < 0) {
      throw (new Error((("Forbidden value (" + _val4) + ") on elements of costs.")));
    };
    this.costs.push(_val4);
    _i4++;
  };
  var _destTeleporterTypeLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _destTeleporterTypeLen) {
    _val5 = input.readByte();
    if (_val5 < 0) {
      throw (new Error((("Forbidden value (" + _val5) + ") on elements of destTeleporterType.")));
    };
    this.destTeleporterType.push(_val5);
    _i5++;
  };
};

TeleportDestinationsListMessage.prototype.getMessageId = function() {
  return 5960;
};

TeleportDestinationsListMessage.prototype.getClassName = function() {
  return 'TeleportDestinationsListMessage';
};

module.exports.id = 5960;
module.exports.class = TeleportDestinationsListMessage;