var BaseMessage = require('./paddock-informations.js').class,
  util = require('util');

var PaddockContentInformations = function() {
  this.paddockId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.abandonned = false;
  this.mountsInformations = [];
};

util.inherits(PaddockContentInformations, BaseMessage);

PaddockContentInformations.prototype.serialize = function(output) {
  this.serializeAs_PaddockContentInformations(output);
};

PaddockContentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockContentInformations(input);
};

PaddockContentInformations.prototype.serializeAs_PaddockContentInformations = function(output) {
  this.serializeAs_PaddockInformations(output);
  output.writeInt(this.paddockId);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeBoolean(this.abandonned);
  output.writeShort(this.mountsInformations.length);
  var _i7 = 0;
  while (_i7 < this.mountsInformations.length) {
    (this.mountsInformations[_i7]).serializeAs_MountInformationsForPaddock(output);
    _i7++;
  };
};

PaddockContentInformations.prototype.deserializeAs_PaddockContentInformations = function(input) {
  var _item7;
  this.deserialize(input);
  this.paddockId = input.readInt();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of PaddockContentInformations.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of PaddockContentInformations.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PaddockContentInformations.subAreaId.")));
  };
  this.abandonned = input.readBoolean();
  var _mountsInformationsLen = input.readUnsignedShort();
  var _i7 = 0;
  while (_i7 < _mountsInformationsLen) {
    _item7 = new MountInformationsForPaddock();
    _item7.deserialize(input);
    this.mountsInformations.push(_item7);
    _i7++;
  };
};

PaddockContentInformations.prototype.getTypeId = function() {
  return 183;
};

PaddockContentInformations.prototype.getClassName = function() {
  return 'PaddockContentInformations';
};

module.exports.id = 183;
module.exports.class = PaddockContentInformations;