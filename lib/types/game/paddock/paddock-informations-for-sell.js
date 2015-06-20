var BaseMessage = require('./paddock-informations-for-sell.js').class,
  util = require('util');

var PaddockInformationsForSell = function() {
  this.guildOwner = "";
  this.worldX = 0;
  this.worldY = 0;
  this.subAreaId = 0;
  this.nbMount = 0;
  this.nbObject = 0;
  this.price = 0;
};

util.inherits(PaddockInformationsForSell, BaseMessage);

PaddockInformationsForSell.prototype.serialize = function(output) {
  this.serializeAs_PaddockInformationsForSell(output);
};

PaddockInformationsForSell.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockInformationsForSell(input);
};

PaddockInformationsForSell.prototype.serializeAs_PaddockInformationsForSell = function(param1) {
  param1.writeUTF(this.guildOwner);
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
  } else {
    param1.writeShort(this.worldX);
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
    } else {
      param1.writeShort(this.worldY);
      if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
      } else {
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.nbMount);
        param1.writeByte(this.nbObject);
        if (this.price < 0) {
          throw new Error("Forbidden value (" + this.price + ") on element price.");
        } else {
          param1.writeVarInt(this.price);
          return;
        }
      }
    }
  }
};

PaddockInformationsForSell.prototype.deserializeAs_PaddockInformationsForSell = function(param1) {
  this.guildOwner = param1.readUTF();
  this.worldX = param1.readShort();
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element of PaddockInformationsForSell.worldX.");
  } else {
    this.worldY = param1.readShort();
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element of PaddockInformationsForSell.worldY.");
    } else {
      this.subAreaId = param1.readVarUhShort();
      if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of PaddockInformationsForSell.subAreaId.");
      } else {
        this.nbMount = param1.readByte();
        this.nbObject = param1.readByte();
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
          throw new Error("Forbidden value (" + this.price + ") on element of PaddockInformationsForSell.price.");
        } else {
          return;
        }
      }
    }
  }
};

PaddockInformationsForSell.prototype.getTypeId = function() {
  return 222;
};

PaddockInformationsForSell.prototype.getClassName = function() {
  return 'PaddockInformationsForSell';
};

module.exports.id = 222;
module.exports.class = PaddockInformationsForSell;
module.exports.getInstance = function() {
  return new PaddockInformationsForSell();
};