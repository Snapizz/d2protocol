var d2com = require('d2com'),
  BaseMessage = require('./characters-list-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharactersListWithRemodelingMessage = function() {
  this.charactersToRemodel = [];
};

util.inherits(CharactersListWithRemodelingMessage, BaseMessage);

CharactersListWithRemodelingMessage.prototype.serialize = function(output) {
  this.serializeAs_CharactersListWithRemodelingMessage(output);
};

CharactersListWithRemodelingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharactersListWithRemodelingMessage(input);
};

CharactersListWithRemodelingMessage.prototype.serializeAs_CharactersListWithRemodelingMessage = function(output) {
  this.serializeAs_CharactersListMessage(output);
  output.writeShort(this.charactersToRemodel.length);
  var _i1;
  while (_i1 < this.charactersToRemodel.length) {
    (this.charactersToRemodel[_i1]).serializeAs_CharacterToRemodelInformations(output);
    _i1++;
  };
};

CharactersListWithRemodelingMessage.prototype.deserializeAs_CharactersListWithRemodelingMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _charactersToRemodelLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _charactersToRemodelLen) {
    _item1 = new CharacterToRemodelInformations();
    _item1.deserialize(input);
    this.charactersToRemodel.push(_item1);
    _i1++;
  };
};

CharactersListWithRemodelingMessage.prototype.getMessageId = function() {
  return 6550;
};

CharactersListWithRemodelingMessage.prototype.getClassName = function() {
  return 'CharactersListWithRemodelingMessage';
};

module.exports.id = 6550;
module.exports.class = CharactersListWithRemodelingMessage;