var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var MapRunningFightListRequestMessage = function() {

};

require('util').inherits(MapRunningFightListRequestMessage, d2com.NetworkMessage.class);

MapRunningFightListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_MapRunningFightListRequestMessage(output);
};

MapRunningFightListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapRunningFightListRequestMessage(input);
};

MapRunningFightListRequestMessage.prototype.serializeAs_MapRunningFightListRequestMessage = function(param1) {

};

MapRunningFightListRequestMessage.prototype.deserializeAs_MapRunningFightListRequestMessage = function(param1) {

};

MapRunningFightListRequestMessage.prototype.getMessageId = function() {
    return 5742;
};

MapRunningFightListRequestMessage.prototype.getClassName = function() {
    return 'MapRunningFightListRequestMessage';
};

module.exports.id = 5742;
module.exports.class = MapRunningFightListRequestMessage;
module.exports.getInstance = function() {
    return new MapRunningFightListRequestMessage;
};