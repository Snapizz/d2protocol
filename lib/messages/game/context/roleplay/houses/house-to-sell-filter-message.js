var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var HouseToSellFilterMessage = function() {
  this.areaId = 0;
  this.atLeastNbRoom = 0;
  this.atLeastNbChest = 0;
  this.skillRequested = 0;
  this.maxPrice = 0;
};

util.inherits(HouseToSellFilterMessage, BaseMessage);

HouseToSellFilterMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseToSellFilterMessage(output);
};

HouseToSellFilterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseToSellFilterMessage(input);
};

HouseToSellFilterMessage.prototype.serializeAs_HouseToSellFilterMessage = function(param1) {
  param1.writeInt(this.areaId);
  if (this.atLeastNbRoom < 0) {
    throw new Error("Forbidden value (" + this.atLeastNbRoom + ") on element atLeastNbRoom.");
  } else {
    param1.writeByte(this.atLeastNbRoom);
    if (this.atLeastNbChest < 0) {
      throw new Error("Forbidden value (" + this.atLeastNbChest + ") on element atLeastNbChest.");
    } else {
      param1.writeByte(this.atLeastNbChest);
      if (this.skillRequested < 0) {
        throw new Error("Forbidden value (" + this.skillRequested + ") on element skillRequested.");
      } else {
        param1.writeVarShort(this.skillRequested);
        if (this.maxPrice < 0) {
          throw new Error("Forbidden value (" + this.maxPrice + ") on element maxPrice.");
        } else {
          param1.writeVarInt(this.maxPrice);
          return;
        }
      }
    }
  }
};

HouseToSellFilterMessage.prototype.deserializeAs_HouseToSellFilterMessage = function(param1) {
  this.areaId = param1.readInt();
  this.atLeastNbRoom = param1.readByte();
  if (this.atLeastNbRoom < 0) {
    throw new Error("Forbidden value (" + this.atLeastNbRoom + ") on element of HouseToSellFilterMessage.atLeastNbRoom.");
  } else {
    this.atLeastNbChest = param1.readByte();
    if (this.atLeastNbChest < 0) {
      throw new Error("Forbidden value (" + this.atLeastNbChest + ") on element of HouseToSellFilterMessage.atLeastNbChest.");
    } else {
      this.skillRequested = param1.readVarUhShort();
      if (this.skillRequested < 0) {
        throw new Error("Forbidden value (" + this.skillRequested + ") on element of HouseToSellFilterMessage.skillRequested.");
      } else {
        this.maxPrice = param1.readVarUhInt();
        if (this.maxPrice < 0) {
          throw new Error("Forbidden value (" + this.maxPrice + ") on element of HouseToSellFilterMessage.maxPrice.");
        } else {
          return;
        }
      }
    }
  }
};

HouseToSellFilterMessage.prototype.getMessageId = function() {
  return 6137;
};

HouseToSellFilterMessage.prototype.getClassName = function() {
  return 'HouseToSellFilterMessage';
};

module.exports.id = 6137;
module.exports.class = HouseToSellFilterMessage;
module.exports.getInstance = function() {
  return new HouseToSellFilterMessage();
};