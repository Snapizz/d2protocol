var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterCreationRequestMessage = function() {
  this.name = "";
  this.breed = 0;
  this.sex = false;
  this.colors = [];
  this.cosmeticId = 0;
};

util.inherits(CharacterCreationRequestMessage, BaseMessage);

CharacterCreationRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterCreationRequestMessage(output);
};

CharacterCreationRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterCreationRequestMessage(input);
};

CharacterCreationRequestMessage.prototype.serializeAs_CharacterCreationRequestMessage = function(output) {
  output.writeUTF(this.name);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  var _i4;
  while (_i4 < 5) {
    output.writeInt(this.colors[_i4]);
    _i4++;
  };
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element cosmeticId.")));
  };
  output.writeVarShort(this.cosmeticId);
};

CharacterCreationRequestMessage.prototype.deserializeAs_CharacterCreationRequestMessage = function(input) {
  this.name = input.readUTF();
  this.breed = input.readByte();
  if ((((this.breed < PlayableBreedEnum.Feca)) || ((this.breed > PlayableBreedEnum.Eliatrope)))) {
    throw (new Error((("Forbidden value (" + this.breed) + ") on element of CharacterCreationRequestMessage.breed.")));
  };
  this.sex = input.readBoolean();
  var _i4;
  while (_i4 < 5) {
    this.colors[_i4] = input.readInt();
    _i4++;
  };
  this.cosmeticId = input.readVarUhShort();
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element of CharacterCreationRequestMessage.cosmeticId.")));
  };
};

CharacterCreationRequestMessage.prototype.getMessageId = function() {
  return 160;
};

CharacterCreationRequestMessage.prototype.getClassName = function() {
  return 'CharacterCreationRequestMessage';
};

module.exports.id = 160;
module.exports.class = CharacterCreationRequestMessage;