var BaseMessage = require('./prism-information.js').class,
  util = require('util');

var AllianceInsiderPrismInformation = function() {
  this.lastTimeSlotModificationDate = 0;
  this.lastTimeSlotModificationAuthorGuildId = 0;
  this.lastTimeSlotModificationAuthorId = 0;
  this.lastTimeSlotModificationAuthorName = "";
  this.modulesItemIds = [];
};

util.inherits(AllianceInsiderPrismInformation, BaseMessage);

AllianceInsiderPrismInformation.prototype.serialize = function(output) {
  this.serializeAs_AllianceInsiderPrismInformation(output);
};

AllianceInsiderPrismInformation.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceInsiderPrismInformation(input);
};

AllianceInsiderPrismInformation.prototype.serializeAs_AllianceInsiderPrismInformation = function(output) {
  this.serializeAs_PrismInformation(output);
  if (this.lastTimeSlotModificationDate < 0) {
    throw (new Error((("Forbidden value (" + this.lastTimeSlotModificationDate) + ") on element lastTimeSlotModificationDate.")));
  };
  output.writeInt(this.lastTimeSlotModificationDate);
  if (this.lastTimeSlotModificationAuthorGuildId < 0) {
    throw (new Error((("Forbidden value (" + this.lastTimeSlotModificationAuthorGuildId) + ") on element lastTimeSlotModificationAuthorGuildId.")));
  };
  output.writeVarInt(this.lastTimeSlotModificationAuthorGuildId);
  if (this.lastTimeSlotModificationAuthorId < 0) {
    throw (new Error((("Forbidden value (" + this.lastTimeSlotModificationAuthorId) + ") on element lastTimeSlotModificationAuthorId.")));
  };
  output.writeVarInt(this.lastTimeSlotModificationAuthorId);
  output.writeUTF(this.lastTimeSlotModificationAuthorName);
  output.writeShort(this.modulesItemIds.length);
  var _i5;
  while (_i5 < this.modulesItemIds.length) {
    if (this.modulesItemIds[_i5] < 0) {
      throw (new Error((("Forbidden value (" + this.modulesItemIds[_i5]) + ") on element 5 (starting at 1) of modulesItemIds.")));
    };
    output.writeVarInt(this.modulesItemIds[_i5]);
    _i5++;
  };
};

AllianceInsiderPrismInformation.prototype.deserializeAs_AllianceInsiderPrismInformation = function(input) {
  var _val5;
  this.deserialize(input);
  this.lastTimeSlotModificationDate = input.readInt();
  if (this.lastTimeSlotModificationDate < 0) {
    throw (new Error((("Forbidden value (" + this.lastTimeSlotModificationDate) + ") on element of AllianceInsiderPrismInformation.lastTimeSlotModificationDate.")));
  };
  this.lastTimeSlotModificationAuthorGuildId = input.readVarUhInt();
  if (this.lastTimeSlotModificationAuthorGuildId < 0) {
    throw (new Error((("Forbidden value (" + this.lastTimeSlotModificationAuthorGuildId) + ") on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorGuildId.")));
  };
  this.lastTimeSlotModificationAuthorId = input.readVarUhInt();
  if (this.lastTimeSlotModificationAuthorId < 0) {
    throw (new Error((("Forbidden value (" + this.lastTimeSlotModificationAuthorId) + ") on element of AllianceInsiderPrismInformation.lastTimeSlotModificationAuthorId.")));
  };
  this.lastTimeSlotModificationAuthorName = input.readUTF();
  var _modulesItemIdsLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _modulesItemIdsLen) {
    _val5 = input.readVarUhInt();
    if (_val5 < 0) {
      throw (new Error((("Forbidden value (" + _val5) + ") on elements of modulesItemIds.")));
    };
    this.modulesItemIds.push(_val5);
    _i5++;
  };
};

AllianceInsiderPrismInformation.prototype.getTypeId = function() {
  return 431;
};

AllianceInsiderPrismInformation.prototype.getClassName = function() {
  return 'AllianceInsiderPrismInformation';
};

module.exports.id = 431;
module.exports.class = AllianceInsiderPrismInformation;