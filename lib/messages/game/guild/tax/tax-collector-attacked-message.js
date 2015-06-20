var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');

var BasicGuildInformations = require('../../../../types/game/context/roleplay/basic-guild-informations.js').class;

var TaxCollectorAttackedMessage = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.guild = new BasicGuildInformations();
};

util.inherits(TaxCollectorAttackedMessage, BaseMessage);

TaxCollectorAttackedMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorAttackedMessage(output);
};

TaxCollectorAttackedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorAttackedMessage(input);
};

TaxCollectorAttackedMessage.prototype.serializeAs_TaxCollectorAttackedMessage = function(param1) {
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
  } else {
    param1.writeVarShort(this.firstNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
      } else {
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        } else {
          param1.writeShort(this.worldY);
          param1.writeInt(this.mapId);
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
          } else {
            param1.writeVarShort(this.subAreaId);
            this.guild.serializeAs_BasicGuildInformations(param1);
            return;
          }
        }
      }
    }
  }
};

TaxCollectorAttackedMessage.prototype.deserializeAs_TaxCollectorAttackedMessage = function(param1) {
  this.firstNameId = param1.readVarUhShort();
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element of TaxCollectorAttackedMessage.firstNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorAttackedMessage.lastNameId.");
    } else {
      this.worldX = param1.readShort();
      if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of TaxCollectorAttackedMessage.worldX.");
      } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
          throw new Error("Forbidden value (" + this.worldY + ") on element of TaxCollectorAttackedMessage.worldY.");
        } else {
          this.mapId = param1.readInt();
          this.subAreaId = param1.readVarUhShort();
          if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of TaxCollectorAttackedMessage.subAreaId.");
          } else {
            this.guild = new BasicGuildInformations();
            this.guild.deserialize(param1);
            return;
          }
        }
      }
    }
  }
};

TaxCollectorAttackedMessage.prototype.getMessageId = function() {
  return 5918;
};

TaxCollectorAttackedMessage.prototype.getClassName = function() {
  return 'TaxCollectorAttackedMessage';
};

module.exports.id = 5918;
module.exports.class = TaxCollectorAttackedMessage;
module.exports.getInstance = function() {
  return new TaxCollectorAttackedMessage();
};