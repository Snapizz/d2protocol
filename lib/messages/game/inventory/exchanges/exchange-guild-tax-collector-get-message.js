var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeGuildTaxCollectorGetMessage = function() {
  this.collectorName = "";
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.userName = "";
  this.experience = 0;
  this.objectsInfos = [];
};

util.inherits(ExchangeGuildTaxCollectorGetMessage, BaseMessage);

ExchangeGuildTaxCollectorGetMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeGuildTaxCollectorGetMessage(output);
};

ExchangeGuildTaxCollectorGetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeGuildTaxCollectorGetMessage(input);
};

ExchangeGuildTaxCollectorGetMessage.prototype.serializeAs_ExchangeGuildTaxCollectorGetMessage = function(param1) {
  param1.writeUTF(this.collectorName);
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
        param1.writeUTF(this.userName);
        if (this.experience < -9.007199254740992E15 || this.experience > 9.007199254740992E15) {
          throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        } else {
          param1.writeDouble(this.experience);
          param1.writeShort(this.objectsInfos.length);
          var _loc2_ = 0;
          while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemGenericQuantity(param1);
            _loc2_++;
          }
          return;
        }
      }
    }
  }
};

ExchangeGuildTaxCollectorGetMessage.prototype.deserializeAs_ExchangeGuildTaxCollectorGetMessage = function(param1) {
  var _loc4_ = null;
  this.collectorName = param1.readUTF();
  this.worldX = param1.readShort();
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeGuildTaxCollectorGetMessage.worldX.");
  } else {
    this.worldY = param1.readShort();
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeGuildTaxCollectorGetMessage.worldY.");
    } else {
      this.mapId = param1.readInt();
      this.subAreaId = param1.readVarUhShort();
      if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of ExchangeGuildTaxCollectorGetMessage.subAreaId.");
      } else {
        this.userName = param1.readUTF();
        this.experience = param1.readDouble();
        if (this.experience < -9.007199254740992E15 || this.experience > 9.007199254740992E15) {
          throw new Error("Forbidden value (" + this.experience + ") on element of ExchangeGuildTaxCollectorGetMessage.experience.");
        } else {
          var _loc2_ = param1.readUnsignedShort();
          var _loc3_ = 0;
          while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemGenericQuantity();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
          }
          return;
        }
      }
    }
  }
};

ExchangeGuildTaxCollectorGetMessage.prototype.getMessageId = function() {
  return 5762;
};

ExchangeGuildTaxCollectorGetMessage.prototype.getClassName = function() {
  return 'ExchangeGuildTaxCollectorGetMessage';
};

module.exports.id = 5762;
module.exports.class = ExchangeGuildTaxCollectorGetMessage;