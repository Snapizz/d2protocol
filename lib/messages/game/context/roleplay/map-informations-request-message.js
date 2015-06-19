var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapInformationsRequestMessage = function() {
  this.mapId = 0;
};

util.inherits(MapInformationsRequestMessage, BaseMessage);

MapInformationsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_MapInformationsRequestMessage(output);
};

MapInformationsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapInformationsRequestMessage(input);
};

MapInformationsRequestMessage.prototype.serializeAs_MapInformationsRequestMessage = function(output) {
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
};

MapInformationsRequestMessage.prototype.deserializeAs_MapInformationsRequestMessage = function(input) {
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of MapInformationsRequestMessage.mapId.")));
  };
};

MapInformationsRequestMessage.prototype.getMessageId = function() {
  return 225;
};

MapInformationsRequestMessage.prototype.getClassName = function() {
  return 'MapInformationsRequestMessage';
};

module.exports.id = 225;
module.exports.class = MapInformationsRequestMessage;