var GameRolePlayNpcQuestFlag = function() {
  this.questsToValidId = [];
  this.questsToStartId = [];
};



GameRolePlayNpcQuestFlag.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayNpcQuestFlag(output);
};

GameRolePlayNpcQuestFlag.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayNpcQuestFlag(input);
};

GameRolePlayNpcQuestFlag.prototype.serializeAs_GameRolePlayNpcQuestFlag = function(output) {
  output.writeShort(this.questsToValidId.length);
  var _i1 = 0;
  while (_i1 < this.questsToValidId.length) {
    if (this.questsToValidId[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.questsToValidId[_i1]) + ") on element 1 (starting at 1) of questsToValidId.")));
    };
    output.writeVarShort(this.questsToValidId[_i1]);
    _i1++;
  };
  output.writeShort(this.questsToStartId.length);
  var _i2 = 0;
  while (_i2 < this.questsToStartId.length) {
    if (this.questsToStartId[_i2] < 0) {
      throw (new Error((("Forbidden value (" + this.questsToStartId[_i2]) + ") on element 2 (starting at 1) of questsToStartId.")));
    };
    output.writeVarShort(this.questsToStartId[_i2]);
    _i2++;
  };
};

GameRolePlayNpcQuestFlag.prototype.deserializeAs_GameRolePlayNpcQuestFlag = function(input) {
  var _val1 = 0;
  var _val2 = 0;
  var _questsToValidIdLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _questsToValidIdLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of questsToValidId.")));
    };
    this.questsToValidId.push(_val1);
    _i1++;
  };
  var _questsToStartIdLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _questsToStartIdLen) {
    _val2 = input.readVarUhShort();
    if (_val2 < 0) {
      throw (new Error((("Forbidden value (" + _val2) + ") on elements of questsToStartId.")));
    };
    this.questsToStartId.push(_val2);
    _i2++;
  };
};

GameRolePlayNpcQuestFlag.prototype.getTypeId = function() {
  return 384;
};

GameRolePlayNpcQuestFlag.prototype.getClassName = function() {
  return 'GameRolePlayNpcQuestFlag';
};

module.exports.id = 384;
module.exports.class = GameRolePlayNpcQuestFlag;