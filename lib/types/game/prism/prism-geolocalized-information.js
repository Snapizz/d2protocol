var BaseMessage = require('./prism-subarea-empty-info.js').class,
  util = require('util');

var PrismGeolocalizedInformation = function() {
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.prism;
};

util.inherits(PrismGeolocalizedInformation, BaseMessage);

PrismGeolocalizedInformation.prototype.serialize = function(output) {
  this.serializeAs_PrismGeolocalizedInformation(output);
};

PrismGeolocalizedInformation.prototype.deserialize = function(input) {
  this.deserializeAs_PrismGeolocalizedInformation(input);
};

PrismGeolocalizedInformation.prototype.serializeAs_PrismGeolocalizedInformation = function(output) {
  this.serializeAs_PrismSubareaEmptyInfo(output);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  output.writeShort(this.prism.getTypeId());
  this.prism.serialize(output);
};

PrismGeolocalizedInformation.prototype.deserializeAs_PrismGeolocalizedInformation = function(input) {
  this.deserialize(input);
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of PrismGeolocalizedInformation.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of PrismGeolocalizedInformation.worldY.")));
  };
  this.mapId = input.readInt();
  var _id4 = input.readUnsignedShort();
  this.prism = ProtocolTypeManager.getInstance(PrismInformation, _id4);
  this.prism.deserialize(input);
};

PrismGeolocalizedInformation.prototype.getTypeId = function() {
  return 434;
};

PrismGeolocalizedInformation.prototype.getClassName = function() {
  return 'PrismGeolocalizedInformation';
};

module.exports.id = 434;
module.exports.class = PrismGeolocalizedInformation;