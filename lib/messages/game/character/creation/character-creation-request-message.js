var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

CharacterCreationRequestMessage.prototype.serializeAs_CharacterCreationRequestMessage = function(param1) {
  param1.writeUTF(this.name);
  param1.writeByte(this.breed);
  param1.writeBoolean(this.sex);
  var _loc2_ = 0;
  while (_loc2_ < 5) {
    param1.writeInt(this.colors[_loc2_]);
    _loc2_++;
  }
  if (this.cosmeticId < 0) {
    throw new Error("Forbidden value (" + this.cosmeticId + ") on element cosmeticId.");
  } else {
    param1.writeVarShort(this.cosmeticId);
    return;
  }
};

CharacterCreationRequestMessage.prototype.deserializeAs_CharacterCreationRequestMessage = function(param1) {
  this.name = param1.readUTF();
  this.breed = param1.readByte();
  if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
    throw new Error("Forbidden value (" + this.breed + ") on element of CharacterCreationRequestMessage.breed.");
  } else {
    this.sex = param1.readBoolean();
    var _loc2_ = 0;
    while (_loc2_ < 5) {
      this.colors[_loc2_] = param1.readInt();
      _loc2_++;
    }
    this.cosmeticId = param1.readVarUhShort();
    if (this.cosmeticId < 0) {
      throw new Error("Forbidden value (" + this.cosmeticId + ") on element of CharacterCreationRequestMessage.cosmeticId.");
    } else {
      return;
    }
  }
};

CharacterCreationRequestMessage.prototype.getMessageId = function() {
  return 160;
};

CharacterCreationRequestMessage.prototype.getClassName = function() {
  return 'CharacterCreationRequestMessage';
};

module.exports.id = 160;
module.exports.class = CharacterCreationRequestMessage;
module.exports.getInstance = function() {
  return new CharacterCreationRequestMessage();
};