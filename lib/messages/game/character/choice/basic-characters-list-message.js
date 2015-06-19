var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicCharactersListMessage = function() {
  this.characters = [];
};

util.inherits(BasicCharactersListMessage, BaseMessage);

BasicCharactersListMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicCharactersListMessage(output);
};

BasicCharactersListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicCharactersListMessage(input);
};

BasicCharactersListMessage.prototype.serializeAs_BasicCharactersListMessage = function(output) {
  output.writeShort(this.characters.length);
  var _i1;
  while (_i1 < this.characters.length) {
    output.writeShort((this.characters[_i1]).getTypeId());
    (this.characters[_i1]).serialize(output);
    _i1++;
  };
};

BasicCharactersListMessage.prototype.deserializeAs_BasicCharactersListMessage = function(input) {
  var _id1;
  var _item1;
  var _charactersLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _charactersLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(CharacterBaseInformations, _id1);
    _item1.deserialize(input);
    this.characters.push(_item1);
    _i1++;
  };
};

BasicCharactersListMessage.prototype.getMessageId = function() {
  return 6475;
};

BasicCharactersListMessage.prototype.getClassName = function() {
  return 'BasicCharactersListMessage';
};

module.exports.id = 6475;
module.exports.class = BasicCharactersListMessage;