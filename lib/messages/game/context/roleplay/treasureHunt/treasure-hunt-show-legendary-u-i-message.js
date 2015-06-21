var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TreasureHuntShowLegendaryUIMessage = module.exports = function() {
    this.availableLegendaryIds = [];

    return this;
};

require('util').inherits(TreasureHuntShowLegendaryUIMessage, d2com.NetworkMessage.class);

TreasureHuntShowLegendaryUIMessage.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntShowLegendaryUIMessage(output);
};

TreasureHuntShowLegendaryUIMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntShowLegendaryUIMessage(input);
};

TreasureHuntShowLegendaryUIMessage.prototype.serializeAs_TreasureHuntShowLegendaryUIMessage = function(param1) {
    param1.writeShort(this.availableLegendaryIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.availableLegendaryIds.length) {
        if (this.availableLegendaryIds[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.availableLegendaryIds[_loc2_] + ") on element 1 (starting at 1) of availableLegendaryIds.");
        } else {
            param1.writeVarShort(this.availableLegendaryIds[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

TreasureHuntShowLegendaryUIMessage.prototype.deserializeAs_TreasureHuntShowLegendaryUIMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of availableLegendaryIds.");
        } else {
            this.availableLegendaryIds.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

TreasureHuntShowLegendaryUIMessage.prototype.getMessageId = function() {
    return 6498;
};

TreasureHuntShowLegendaryUIMessage.prototype.getClassName = function() {
    return 'TreasureHuntShowLegendaryUIMessage';
};

module.exports.id = 6498;