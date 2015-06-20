var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntShowLegendaryUIMessage = function() {
  this.availableLegendaryIds = [];
};

util.inherits(TreasureHuntShowLegendaryUIMessage, BaseMessage);

TreasureHuntShowLegendaryUIMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntShowLegendaryUIMessage(output);
};

TreasureHuntShowLegendaryUIMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntShowLegendaryUIMessage(input);
};

TreasureHuntShowLegendaryUIMessage.prototype.serializeAs_TreasureHuntShowLegendaryUIMessage = function(output) {
  output.writeShort(this.availableLegendaryIds.length);
  var _i1 = 0;
  while (_i1 < this.availableLegendaryIds.length) {
    if (this.availableLegendaryIds[_i1] < 0) {
      throw (new Error((("Forbidden value (" + this.availableLegendaryIds[_i1]) + ") on element 1 (starting at 1) of availableLegendaryIds.")));
    };
    output.writeVarShort(this.availableLegendaryIds[_i1]);
    _i1++;
  };
};

TreasureHuntShowLegendaryUIMessage.prototype.deserializeAs_TreasureHuntShowLegendaryUIMessage = function(input) {
  var _val1 = 0;
  var _availableLegendaryIdsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _availableLegendaryIdsLen) {
    _val1 = input.readVarUhShort();
    if (_val1 < 0) {
      throw (new Error((("Forbidden value (" + _val1) + ") on elements of availableLegendaryIds.")));
    };
    this.availableLegendaryIds.push(_val1);
    _i1++;
  };
};

TreasureHuntShowLegendaryUIMessage.prototype.getMessageId = function() {
  return 6498;
};

TreasureHuntShowLegendaryUIMessage.prototype.getClassName = function() {
  return 'TreasureHuntShowLegendaryUIMessage';
};

module.exports.id = 6498;
module.exports.class = TreasureHuntShowLegendaryUIMessage;