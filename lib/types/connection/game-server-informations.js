var GameServerInformations = function() {
  this.id = 0;
  this.status = 1;
  this.completion = 0;
  this.isSelectable = false;
  this.charactersCount = 0;
  this.date = 0;
};



GameServerInformations.prototype.serialize = function(output) {
  this.serializeAs_GameServerInformations(output);
};

GameServerInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameServerInformations(input);
};

GameServerInformations.prototype.serializeAs_GameServerInformations = function(output) {
  if ((((this.id < 0)) || ((this.id > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeShort(this.id);
  output.writeByte(this.status);
  output.writeByte(this.completion);
  output.writeBoolean(this.isSelectable);
  if (this.charactersCount < 0) {
    throw (new Error((("Forbidden value (" + this.charactersCount) + ") on element charactersCount.")));
  };
  output.writeByte(this.charactersCount);
  if ((((this.date < -9007199254740992)) || ((this.date > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.date) + ") on element date.")));
  };
  output.writeDouble(this.date);
};

GameServerInformations.prototype.deserializeAs_GameServerInformations = function(input) {
  this.id = input.readUnsignedShort();
  if ((((this.id < 0)) || ((this.id > 0xFFFF)))) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of GameServerInformations.id.")));
  };
  this.status = input.readByte();
  if (this.status < 0) {
    throw (new Error((("Forbidden value (" + this.status) + ") on element of GameServerInformations.status.")));
  };
  this.completion = input.readByte();
  if (this.completion < 0) {
    throw (new Error((("Forbidden value (" + this.completion) + ") on element of GameServerInformations.completion.")));
  };
  this.isSelectable = input.readBoolean();
  this.charactersCount = input.readByte();
  if (this.charactersCount < 0) {
    throw (new Error((("Forbidden value (" + this.charactersCount) + ") on element of GameServerInformations.charactersCount.")));
  };
  this.date = input.readDouble();
  if ((((this.date < -9007199254740992)) || ((this.date > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.date) + ") on element of GameServerInformations.date.")));
  };
};

GameServerInformations.prototype.getTypeId = function() {
  return 25;
};

GameServerInformations.prototype.getClassName = function() {
  return 'GameServerInformations';
};

module.exports.id = 25;
module.exports.class = GameServerInformations;