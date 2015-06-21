var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations.js').class;

var AllianceListMessage = function() {
    this.alliances = [];
};

require('util').inherits(AllianceListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceListMessage();
};

AllianceListMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceListMessage(output);
};

AllianceListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceListMessage(input);
};

AllianceListMessage.prototype.serializeAs_AllianceListMessage = function(param1) {
    param1.writeShort(this.alliances.length);
    var _loc2_ = 0;
    while (_loc2_ < this.alliances.length) {
        (this.alliances[_loc2_]).serializeAs_AllianceFactSheetInformations(param1);
        _loc2_++;
    }
};

AllianceListMessage.prototype.deserializeAs_AllianceListMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new AllianceFactSheetInformations();
        _loc4_.deserialize(param1);
        this.alliances.push(_loc4_);
        _loc3_++;
    }
};

AllianceListMessage.prototype.getMessageId = function() {
    return 6408;
};

AllianceListMessage.prototype.getClassName = function() {
    return 'AllianceListMessage';
};

module.exports.id = 6408;
module.exports.AllianceListMessage = AllianceListMessage;