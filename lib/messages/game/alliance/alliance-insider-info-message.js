var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations.js');

var AllianceInsiderInfoMessage = function() {
  this.allianceInfos = new AllianceFactSheetInformations();
  this.guilds = [];
  this.prisms = [];
};

util.inherits(AllianceInsiderInfoMessage, BaseMessage);

AllianceInsiderInfoMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceInsiderInfoMessage(output);
};

AllianceInsiderInfoMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceInsiderInfoMessage(input);
};

AllianceInsiderInfoMessage.prototype.serializeAs_AllianceInsiderInfoMessage = function(param1) {
  this.allianceInfos.serializeAs_AllianceFactSheetInformations(param1);
  param1.writeShort(this.guilds.length);
  var _loc2_ = 0;
  while (_loc2_ < this.guilds.length) {
    (this.guilds[_loc2_]).serializeAs_GuildInsiderFactSheetInformations(param1);
    _loc2_++;
  }
  param1.writeShort(this.prisms.length);
  var _loc3_ = 0;
  while (_loc3_ < this.prisms.length) {
    param1.writeShort((this.prisms[_loc3_]).getTypeId());
    (this.prisms[_loc3_]).serialize(param1);
    _loc3_++;
  }
};

AllianceInsiderInfoMessage.prototype.deserializeAs_AllianceInsiderInfoMessage = function(param1) {
  var _loc6_ = null;
  var _loc7_ = 0;
  var _loc8_ = null;
  this.allianceInfos = new AllianceFactSheetInformations();
  this.allianceInfos.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc6_ = new GuildInsiderFactSheetInformations();
    _loc6_.deserialize(param1);
    this.guilds.push(_loc6_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc7_ = param1.readUnsignedShort();
    _loc8_ = ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _loc7_);
    _loc8_.deserialize(param1);
    this.prisms.push(_loc8_);
    _loc5_++;
  }
};

AllianceInsiderInfoMessage.prototype.getMessageId = function() {
  return 6403;
};

AllianceInsiderInfoMessage.prototype.getClassName = function() {
  return 'AllianceInsiderInfoMessage';
};

module.exports.id = 6403;
module.exports.class = AllianceInsiderInfoMessage;