var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightPlacementSwapPositionsMessage = function() {
  this.dispositions = [];
};

util.inherits(GameFightPlacementSwapPositionsMessage, BaseMessage);

GameFightPlacementSwapPositionsMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsMessage(output);
};

GameFightPlacementSwapPositionsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsMessage(input);
};

GameFightPlacementSwapPositionsMessage.prototype.serializeAs_GameFightPlacementSwapPositionsMessage = function(output) {
  var _i1 = 0;
  while (_i1 < 2) {
    this.dispositions[_i1].serializeAs_IdentifiedEntityDispositionInformations(output);
    _i1++;
  };
};

GameFightPlacementSwapPositionsMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsMessage = function(input) {
  var _i1 = 0;
  while (_i1 < 2) {
    this.dispositions[_i1] = new IdentifiedEntityDispositionInformations();
    this.dispositions[_i1].deserialize(input);
    _i1++;
  };
};

GameFightPlacementSwapPositionsMessage.prototype.getMessageId = function() {
  return 6544;
};

GameFightPlacementSwapPositionsMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsMessage';
};

module.exports.id = 6544;
module.exports.class = GameFightPlacementSwapPositionsMessage;