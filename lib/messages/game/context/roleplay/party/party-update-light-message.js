var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyUpdateLightMessage = function() {
  this.id = 0;
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.prospecting = 0;
  this.regenRate = 0;
};

util.inherits(PartyUpdateLightMessage, BaseMessage);

PartyUpdateLightMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyUpdateLightMessage(output);
};

PartyUpdateLightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyUpdateLightMessage(input);
};

PartyUpdateLightMessage.prototype.serializeAs_PartyUpdateLightMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(param1);
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeVarInt(this.id);
    if (this.lifePoints < 0) {
      throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
    } else {
      param1.writeVarInt(this.lifePoints);
      if (this.maxLifePoints < 0) {
        throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
      } else {
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
          throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
        } else {
          param1.writeVarShort(this.prospecting);
          if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
          } else {
            param1.writeByte(this.regenRate);
            return;
          }
        }
      }
    }
  }
};

PartyUpdateLightMessage.prototype.deserializeAs_PartyUpdateLightMessage = function(input) {
  this.deserialize(param1);
  this.id = param1.readVarUhInt();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of PartyUpdateLightMessage.id.");
  } else {
    this.lifePoints = param1.readVarUhInt();
    if (this.lifePoints < 0) {
      throw new Error("Forbidden value (" + this.lifePoints + ") on element of PartyUpdateLightMessage.lifePoints.");
    } else {
      this.maxLifePoints = param1.readVarUhInt();
      if (this.maxLifePoints < 0) {
        throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of PartyUpdateLightMessage.maxLifePoints.");
      } else {
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
          throw new Error("Forbidden value (" + this.prospecting + ") on element of PartyUpdateLightMessage.prospecting.");
        } else {
          this.regenRate = param1.readUnsignedByte();
          if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error("Forbidden value (" + this.regenRate + ") on element of PartyUpdateLightMessage.regenRate.");
          } else {
            return;
          }
        }
      }
    }
  }
};

PartyUpdateLightMessage.prototype.getMessageId = function() {
  return 6054;
};

PartyUpdateLightMessage.prototype.getClassName = function() {
  return 'PartyUpdateLightMessage';
};

module.exports.id = 6054;
module.exports.class = PartyUpdateLightMessage;