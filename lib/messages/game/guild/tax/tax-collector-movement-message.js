var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TaxCollectorMovementMessage = function() {
  this.hireOrFire = false;
  this.basicInfos;
  this.playerId = 0;
  this.playerName = "";
};

util.inherits(TaxCollectorMovementMessage, BaseMessage);

TaxCollectorMovementMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorMovementMessage(output);
};

TaxCollectorMovementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorMovementMessage(input);
};

TaxCollectorMovementMessage.prototype.serializeAs_TaxCollectorMovementMessage = function(output) {
  output.writeBoolean(this.hireOrFire);
  this.basicInfos.serializeAs_TaxCollectorBasicInformations(output);
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element playerId.")));
  };
  output.writeVarInt(this.playerId);
  output.writeUTF(this.playerName);
};

TaxCollectorMovementMessage.prototype.deserializeAs_TaxCollectorMovementMessage = function(input) {
  this.hireOrFire = input.readBoolean();
  this.basicInfos = new TaxCollectorBasicInformations();
  this.basicInfos.deserialize(input);
  this.playerId = input.readVarUhInt();
  if (this.playerId < 0) {
    throw (new Error((("Forbidden value (" + this.playerId) + ") on element of TaxCollectorMovementMessage.playerId.")));
  };
  this.playerName = input.readUTF();
};

TaxCollectorMovementMessage.prototype.getMessageId = function() {
  return 5633;
};

TaxCollectorMovementMessage.prototype.getClassName = function() {
  return 'TaxCollectorMovementMessage';
};

module.exports.id = 5633;
module.exports.class = TaxCollectorMovementMessage;