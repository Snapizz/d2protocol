var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TaxCollectorAttackedMessage = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.guild;
};

util.inherits(TaxCollectorAttackedMessage, BaseMessage);

TaxCollectorAttackedMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorAttackedMessage(output);
};

TaxCollectorAttackedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorAttackedMessage(input);
};

TaxCollectorAttackedMessage.prototype.serializeAs_TaxCollectorAttackedMessage = function(output) {
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element firstNameId.")));
  };
  output.writeVarShort(this.firstNameId);
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element lastNameId.")));
  };
  output.writeVarShort(this.lastNameId);
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
  this.guild.serializeAs_BasicGuildInformations(output);
};

TaxCollectorAttackedMessage.prototype.deserializeAs_TaxCollectorAttackedMessage = function(input) {
  this.firstNameId = input.readVarUhShort();
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element of TaxCollectorAttackedMessage.firstNameId.")));
  };
  this.lastNameId = input.readVarUhShort();
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element of TaxCollectorAttackedMessage.lastNameId.")));
  };
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of TaxCollectorAttackedMessage.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of TaxCollectorAttackedMessage.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of TaxCollectorAttackedMessage.subAreaId.")));
  };
  this.guild = new BasicGuildInformations();
  this.guild.deserialize(input);
};

TaxCollectorAttackedMessage.prototype.getMessageId = function() {
  return 5918;
};

TaxCollectorAttackedMessage.prototype.getClassName = function() {
  return 'TaxCollectorAttackedMessage';
};

module.exports.id = 5918;
module.exports.class = TaxCollectorAttackedMessage;