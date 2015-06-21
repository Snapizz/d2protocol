var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismInfoJoinLeaveRequestMessage = function() {
    this.join = false;
};

require('util').inherits(PrismInfoJoinLeaveRequestMessage, d2com.NetworkMessage.class);

PrismInfoJoinLeaveRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismInfoJoinLeaveRequestMessage(output);
};

PrismInfoJoinLeaveRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismInfoJoinLeaveRequestMessage(input);
};

PrismInfoJoinLeaveRequestMessage.prototype.serializeAs_PrismInfoJoinLeaveRequestMessage = function(param1) {
    param1.writeBoolean(this.join);
};

PrismInfoJoinLeaveRequestMessage.prototype.deserializeAs_PrismInfoJoinLeaveRequestMessage = function(param1) {
    this.join = param1.readBoolean();
};

PrismInfoJoinLeaveRequestMessage.prototype.getMessageId = function() {
    return 5844;
};

PrismInfoJoinLeaveRequestMessage.prototype.getClassName = function() {
    return 'PrismInfoJoinLeaveRequestMessage';
};

module.exports.id = 5844;
module.exports.class = PrismInfoJoinLeaveRequestMessage;
module.exports.getInstance = function() {
    return new PrismInfoJoinLeaveRequestMessage;
};