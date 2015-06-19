var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuildInfosUpgradeMessage = function() {
  this.maxTaxCollectorsCount = 0;
  this.taxCollectorsCount = 0;
  this.taxCollectorLifePoints = 0;
  this.taxCollectorDamagesBonuses = 0;
  this.taxCollectorPods = 0;
  this.taxCollectorProspecting = 0;
  this.taxCollectorWisdom = 0;
  this.boostPoints = 0;
  this.spellId = [];
  this.spellLevel = [];
};

util.inherits(GuildInfosUpgradeMessage, BaseMessage);

GuildInfosUpgradeMessage.prototype.serialize = function(output) {
  this.serializeAs_GuildInfosUpgradeMessage(output);
};

GuildInfosUpgradeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuildInfosUpgradeMessage(input);
};

GuildInfosUpgradeMessage.prototype.serializeAs_GuildInfosUpgradeMessage = function(output) {
  if (this.maxTaxCollectorsCount < 0) {
    throw (new Error((("Forbidden value (" + this.maxTaxCollectorsCount) + ") on element maxTaxCollectorsCount.")));
  };
  output.writeByte(this.maxTaxCollectorsCount);
  if (this.taxCollectorsCount < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorsCount) + ") on element taxCollectorsCount.")));
  };
  output.writeByte(this.taxCollectorsCount);
  if (this.taxCollectorLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorLifePoints) + ") on element taxCollectorLifePoints.")));
  };
  output.writeVarShort(this.taxCollectorLifePoints);
  if (this.taxCollectorDamagesBonuses < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorDamagesBonuses) + ") on element taxCollectorDamagesBonuses.")));
  };
  output.writeVarShort(this.taxCollectorDamagesBonuses);
  if (this.taxCollectorPods < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorPods) + ") on element taxCollectorPods.")));
  };
  output.writeVarShort(this.taxCollectorPods);
  if (this.taxCollectorProspecting < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorProspecting) + ") on element taxCollectorProspecting.")));
  };
  output.writeVarShort(this.taxCollectorProspecting);
  if (this.taxCollectorWisdom < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorWisdom) + ") on element taxCollectorWisdom.")));
  };
  output.writeVarShort(this.taxCollectorWisdom);
  if (this.boostPoints < 0) {
    throw (new Error((("Forbidden value (" + this.boostPoints) + ") on element boostPoints.")));
  };
  output.writeVarShort(this.boostPoints);
  output.writeShort(this.spellId.length);
  var _i9;
  while (_i9 < this.spellId.length) {
    if (this.spellId[_i9] < 0) {
      throw (new Error((("Forbidden value (" + this.spellId[_i9]) + ") on element 9 (starting at 1) of spellId.")));
    };
    output.writeVarShort(this.spellId[_i9]);
    _i9++;
  };
  output.writeShort(this.spellLevel.length);
  var _i10;
  while (_i10 < this.spellLevel.length) {
    if (this.spellLevel[_i10] < 0) {
      throw (new Error((("Forbidden value (" + this.spellLevel[_i10]) + ") on element 10 (starting at 1) of spellLevel.")));
    };
    output.writeByte(this.spellLevel[_i10]);
    _i10++;
  };
};

GuildInfosUpgradeMessage.prototype.deserializeAs_GuildInfosUpgradeMessage = function(input) {
  var _val9;
  var _val10;
  this.maxTaxCollectorsCount = input.readByte();
  if (this.maxTaxCollectorsCount < 0) {
    throw (new Error((("Forbidden value (" + this.maxTaxCollectorsCount) + ") on element of GuildInfosUpgradeMessage.maxTaxCollectorsCount.")));
  };
  this.taxCollectorsCount = input.readByte();
  if (this.taxCollectorsCount < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorsCount) + ") on element of GuildInfosUpgradeMessage.taxCollectorsCount.")));
  };
  this.taxCollectorLifePoints = input.readVarUhShort();
  if (this.taxCollectorLifePoints < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorLifePoints) + ") on element of GuildInfosUpgradeMessage.taxCollectorLifePoints.")));
  };
  this.taxCollectorDamagesBonuses = input.readVarUhShort();
  if (this.taxCollectorDamagesBonuses < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorDamagesBonuses) + ") on element of GuildInfosUpgradeMessage.taxCollectorDamagesBonuses.")));
  };
  this.taxCollectorPods = input.readVarUhShort();
  if (this.taxCollectorPods < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorPods) + ") on element of GuildInfosUpgradeMessage.taxCollectorPods.")));
  };
  this.taxCollectorProspecting = input.readVarUhShort();
  if (this.taxCollectorProspecting < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorProspecting) + ") on element of GuildInfosUpgradeMessage.taxCollectorProspecting.")));
  };
  this.taxCollectorWisdom = input.readVarUhShort();
  if (this.taxCollectorWisdom < 0) {
    throw (new Error((("Forbidden value (" + this.taxCollectorWisdom) + ") on element of GuildInfosUpgradeMessage.taxCollectorWisdom.")));
  };
  this.boostPoints = input.readVarUhShort();
  if (this.boostPoints < 0) {
    throw (new Error((("Forbidden value (" + this.boostPoints) + ") on element of GuildInfosUpgradeMessage.boostPoints.")));
  };
  var _spellIdLen = input.readUnsignedShort();
  var _i9;
  while (_i9 < _spellIdLen) {
    _val9 = input.readVarUhShort();
    if (_val9 < 0) {
      throw (new Error((("Forbidden value (" + _val9) + ") on elements of spellId.")));
    };
    this.spellId.push(_val9);
    _i9++;
  };
  var _spellLevelLen = input.readUnsignedShort();
  var _i10;
  while (_i10 < _spellLevelLen) {
    _val10 = input.readByte();
    if (_val10 < 0) {
      throw (new Error((("Forbidden value (" + _val10) + ") on elements of spellLevel.")));
    };
    this.spellLevel.push(_val10);
    _i10++;
  };
};

GuildInfosUpgradeMessage.prototype.getMessageId = function() {
  return 5636;
};

GuildInfosUpgradeMessage.prototype.getClassName = function() {
  return 'GuildInfosUpgradeMessage';
};

module.exports.id = 5636;
module.exports.class = GuildInfosUpgradeMessage;