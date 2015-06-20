var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceFactsMessage = function() {
  this.infos;
  this.guilds = [];
  this.controlledSubareaIds = [];
  this.leaderCharacterId = 0;
  this.leaderCharacterName = "";
};

util.inherits(AllianceFactsMessage, BaseMessage);

AllianceFactsMessage.prototype.serialize = function(output) {
  this.serializeAs_AllianceFactsMessage(output);
};

AllianceFactsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceFactsMessage(input);
};

AllianceFactsMessage.prototype.serializeAs_AllianceFactsMessage = function(output) {
  output.writeShort(this.infos.getTypeId());
  this.infos.serialize(output);
  output.writeShort(this.guilds.length);
  var _i2 = 0;
  while (_i2 < this.guilds.length) {
    (this.guilds[_i2]).serializeAs_GuildInAllianceInformations(output);
    _i2++;
  };
  output.writeShort(this.controlledSubareaIds.length);
  var _i3 = 0;
  while (_i3 < this.controlledSubareaIds.length) {
    if (this.controlledSubareaIds[_i3] < 0) {
      throw (new Error((("Forbidden value (" + this.controlledSubareaIds[_i3]) + ") on element 3 (starting at 1) of controlledSubareaIds.")));
    };
    output.writeVarShort(this.controlledSubareaIds[_i3]);
    _i3++;
  };
  if (this.leaderCharacterId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderCharacterId) + ") on element leaderCharacterId.")));
  };
  output.writeVarInt(this.leaderCharacterId);
  output.writeUTF(this.leaderCharacterName);
};

AllianceFactsMessage.prototype.deserializeAs_AllianceFactsMessage = function(input) {
  var _item2;
  var _val3 = 0;
  var _id1 = input.readUnsignedShort();
  this.infos = ProtocolTypeManager.getInstance(AllianceFactSheetInformations, _id1);
  this.infos.deserialize(input);
  var _guildsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _guildsLen) {
    _item2 = new GuildInAllianceInformations();
    _item2.deserialize(input);
    this.guilds.push(_item2);
    _i2++;
  };
  var _controlledSubareaIdsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _controlledSubareaIdsLen) {
    _val3 = input.readVarUhShort();
    if (_val3 < 0) {
      throw (new Error((("Forbidden value (" + _val3) + ") on elements of controlledSubareaIds.")));
    };
    this.controlledSubareaIds.push(_val3);
    _i3++;
  };
  this.leaderCharacterId = input.readVarUhInt();
  if (this.leaderCharacterId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderCharacterId) + ") on element of AllianceFactsMessage.leaderCharacterId.")));
  };
  this.leaderCharacterName = input.readUTF();
};

AllianceFactsMessage.prototype.getMessageId = function() {
  return 6414;
};

AllianceFactsMessage.prototype.getClassName = function() {
  return 'AllianceFactsMessage';
};

module.exports.id = 6414;
module.exports.class = AllianceFactsMessage;