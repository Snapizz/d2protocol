var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var AllianceInsiderInfoMessage = function() {
  this.allianceInfos;
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

AllianceInsiderInfoMessage.prototype.serializeAs_AllianceInsiderInfoMessage = function(output) {
  this.allianceInfos.serializeAs_AllianceFactSheetInformations(output);
  output.writeShort(this.guilds.length);
  var _i2;
  while (_i2 < this.guilds.length) {
    (this.guilds[_i2]).serializeAs_GuildInsiderFactSheetInformations(output);
    _i2++;
  };
  output.writeShort(this.prisms.length);
  var _i3;
  while (_i3 < this.prisms.length) {
    output.writeShort((this.prisms[_i3]).getTypeId());
    (this.prisms[_i3]).serialize(output);
    _i3++;
  };
};

AllianceInsiderInfoMessage.prototype.deserializeAs_AllianceInsiderInfoMessage = function(input) {
  var _item2;
  var _id3;
  var _item3;
  this.allianceInfos = new AllianceFactSheetInformations();
  this.allianceInfos.deserialize(input);
  var _guildsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _guildsLen) {
    _item2 = new GuildInsiderFactSheetInformations();
    _item2.deserialize(input);
    this.guilds.push(_item2);
    _i2++;
  };
  var _prismsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _prismsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _id3);
    _item3.deserialize(input);
    this.prisms.push(_item3);
    _i3++;
  };
};

AllianceInsiderInfoMessage.prototype.getMessageId = function() {
  return 6403;
};

AllianceInsiderInfoMessage.prototype.getClassName = function() {
  return 'AllianceInsiderInfoMessage';
};

module.exports.id = 6403;
module.exports.class = AllianceInsiderInfoMessage;