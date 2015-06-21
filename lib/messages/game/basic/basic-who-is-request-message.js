var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var BasicWhoIsRequestMessage = function() {
    this.verbose = false;
    this.search = "";
};

require('util').inherits(BasicWhoIsRequestMessage, d2com.NetworkMessage.class);

BasicWhoIsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_BasicWhoIsRequestMessage(output);
};

BasicWhoIsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_BasicWhoIsRequestMessage(input);
};

BasicWhoIsRequestMessage.prototype.serializeAs_BasicWhoIsRequestMessage = function(param1) {
    param1.writeBoolean(this.verbose);
    param1.writeUTF(this.search);
};

BasicWhoIsRequestMessage.prototype.deserializeAs_BasicWhoIsRequestMessage = function(param1) {
    this.verbose = param1.readBoolean();
    this.search = param1.readUTF();
};

BasicWhoIsRequestMessage.prototype.getMessageId = function() {
    return 181;
};

BasicWhoIsRequestMessage.prototype.getClassName = function() {
    return 'BasicWhoIsRequestMessage';
};

module.exports.id = 181;
module.exports.class = BasicWhoIsRequestMessage;
module.exports.getInstance = function() {
    return new BasicWhoIsRequestMessage;
};