var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var HouseGuildRightsViewMessage = function() {

};

require('util').inherits(HouseGuildRightsViewMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new HouseGuildRightsViewMessage();
};

HouseGuildRightsViewMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseGuildRightsViewMessage(output);
};

HouseGuildRightsViewMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseGuildRightsViewMessage(input);
};

HouseGuildRightsViewMessage.prototype.serializeAs_HouseGuildRightsViewMessage = function(param1) {

};

HouseGuildRightsViewMessage.prototype.deserializeAs_HouseGuildRightsViewMessage = function(param1) {

};

HouseGuildRightsViewMessage.prototype.getMessageId = function() {
    return 5700;
};

HouseGuildRightsViewMessage.prototype.getClassName = function() {
    return 'HouseGuildRightsViewMessage';
};

module.exports.id = 5700;
module.exports.HouseGuildRightsViewMessage = HouseGuildRightsViewMessage;