var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChallengeDungeonStackedBonusMessage = function() {
  this.dungeonId = 0;
  this.xpBonus = 0;
  this.dropBonus = 0;
};

util.inherits(ChallengeDungeonStackedBonusMessage, BaseMessage);

ChallengeDungeonStackedBonusMessage.prototype.serialize = function(output) {
  this.serializeAs_ChallengeDungeonStackedBonusMessage(output);
};

ChallengeDungeonStackedBonusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChallengeDungeonStackedBonusMessage(input);
};

ChallengeDungeonStackedBonusMessage.prototype.serializeAs_ChallengeDungeonStackedBonusMessage = function(output) {
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element dungeonId.")));
  };
  output.writeInt(this.dungeonId);
  if (this.xpBonus < 0) {
    throw (new Error((("Forbidden value (" + this.xpBonus) + ") on element xpBonus.")));
  };
  output.writeInt(this.xpBonus);
  if (this.dropBonus < 0) {
    throw (new Error((("Forbidden value (" + this.dropBonus) + ") on element dropBonus.")));
  };
  output.writeInt(this.dropBonus);
};

ChallengeDungeonStackedBonusMessage.prototype.deserializeAs_ChallengeDungeonStackedBonusMessage = function(input) {
  this.dungeonId = input.readInt();
  if (this.dungeonId < 0) {
    throw (new Error((("Forbidden value (" + this.dungeonId) + ") on element of ChallengeDungeonStackedBonusMessage.dungeonId.")));
  };
  this.xpBonus = input.readInt();
  if (this.xpBonus < 0) {
    throw (new Error((("Forbidden value (" + this.xpBonus) + ") on element of ChallengeDungeonStackedBonusMessage.xpBonus.")));
  };
  this.dropBonus = input.readInt();
  if (this.dropBonus < 0) {
    throw (new Error((("Forbidden value (" + this.dropBonus) + ") on element of ChallengeDungeonStackedBonusMessage.dropBonus.")));
  };
};

ChallengeDungeonStackedBonusMessage.prototype.getMessageId = function() {
  return 6151;
};

ChallengeDungeonStackedBonusMessage.prototype.getClassName = function() {
  return 'ChallengeDungeonStackedBonusMessage';
};

module.exports.id = 6151;
module.exports.class = ChallengeDungeonStackedBonusMessage;