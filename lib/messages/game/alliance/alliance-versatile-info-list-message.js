var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AllianceVersatileInformations = require('../../../types/game/social/alliance-versatile-informations.js').class;

var AllianceVersatileInfoListMessage = function() {
    this.alliances = [];
};

require('util').inherits(AllianceVersatileInfoListMessage, d2com.NetworkMessage.class);

AllianceVersatileInfoListMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceVersatileInfoListMessage(output);
};

AllianceVersatileInfoListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceVersatileInfoListMessage(input);
};

AllianceVersatileInfoListMessage.prototype.serializeAs_AllianceVersatileInfoListMessage = function(param1) {
    param1.writeShort(this.alliances.length);
    var _loc2_ = 0;
    while (_loc2_ < this.alliances.length) {
        (this.alliances[_loc2_]).serializeAs_AllianceVersatileInformations(param1);
        _loc2_++;
    }
};

AllianceVersatileInfoListMessage.prototype.deserializeAs_AllianceVersatileInfoListMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new AllianceVersatileInformations();
        _loc4_.deserialize(param1);
        this.alliances.push(_loc4_);
        _loc3_++;
    }
};

AllianceVersatileInfoListMessage.prototype.getMessageId = function() {
    return 6436;
};

AllianceVersatileInfoListMessage.prototype.getClassName = function() {
    return 'AllianceVersatileInfoListMessage';
};

module.exports.id = 6436;
module.exports.class = AllianceVersatileInfoListMessage;
module.exports.getInstance = function() {
    return new AllianceVersatileInfoListMessage;
};