var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var MapFightCountMessage = function() {
  this.fightCount = 0;
};

util.inherits(MapFightCountMessage, BaseMessage);

MapFightCountMessage.prototype.serialize = function(output) {
  this.serializeAs_MapFightCountMessage(output);
};

MapFightCountMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapFightCountMessage(input);
};

MapFightCountMessage.prototype.serializeAs_MapFightCountMessage = function(param1) {
  if (this.fightCount < 0) {
    throw new Error("Forbidden value (" + this.fightCount + ") on element fightCount.");
  } else {
    param1.writeVarShort(this.fightCount);
    return;
  }
};

MapFightCountMessage.prototype.deserializeAs_MapFightCountMessage = function(param1) {
  this.fightCount = param1.readVarUhShort();
  if (this.fightCount < 0) {
    throw new Error("Forbidden value (" + this.fightCount + ") on element of MapFightCountMessage.fightCount.");
  } else {
    return;
  }
};

MapFightCountMessage.prototype.getMessageId = function() {
  return 210;
};

MapFightCountMessage.prototype.getClassName = function() {
  return 'MapFightCountMessage';
};

module.exports.id = 210;
module.exports.class = MapFightCountMessage;
module.exports.getInstance = function() {
  return new MapFightCountMessage();
};