var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var DungeonPartyFinderAvailableDungeonsRequestMessage = function() {

};

require('util').inherits(DungeonPartyFinderAvailableDungeonsRequestMessage, d2com.NetworkMessage.class);

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(output);
};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage(input);
};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.serializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage = function(param1) {

};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.deserializeAs_DungeonPartyFinderAvailableDungeonsRequestMessage = function(param1) {

};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.getMessageId = function() {
    return 6240;
};

DungeonPartyFinderAvailableDungeonsRequestMessage.prototype.getClassName = function() {
    return 'DungeonPartyFinderAvailableDungeonsRequestMessage';
};

module.exports.id = 6240;
module.exports.class = DungeonPartyFinderAvailableDungeonsRequestMessage;
module.exports.getInstance = function() {
    return new DungeonPartyFinderAvailableDungeonsRequestMessage;
};