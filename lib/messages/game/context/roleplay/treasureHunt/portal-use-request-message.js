var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PortalUseRequestMessage = function() {
    this.portalId = 0;
};

require('util').inherits(PortalUseRequestMessage, d2com.NetworkMessage.class);

PortalUseRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PortalUseRequestMessage(output);
};

PortalUseRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PortalUseRequestMessage(input);
};

PortalUseRequestMessage.prototype.serializeAs_PortalUseRequestMessage = function(param1) {
    if (this.portalId < 0) {
        throw new Error("Forbidden value (" + this.portalId + ") on element portalId.");
    } else {
        param1.writeVarInt(this.portalId);
        return;
    }
};

PortalUseRequestMessage.prototype.deserializeAs_PortalUseRequestMessage = function(param1) {
    this.portalId = param1.readVarUhInt();
    if (this.portalId < 0) {
        throw new Error("Forbidden value (" + this.portalId + ") on element of PortalUseRequestMessage.portalId.");
    } else {
        return;
    }
};

PortalUseRequestMessage.prototype.getMessageId = function() {
    return 6492;
};

PortalUseRequestMessage.prototype.getClassName = function() {
    return 'PortalUseRequestMessage';
};

module.exports.id = 6492;
module.exports.class = PortalUseRequestMessage;
module.exports.getInstance = function() {
    return new PortalUseRequestMessage;
};