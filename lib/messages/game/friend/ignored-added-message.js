var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var IgnoredInformations = require('../../../types/game/friend/ignored-informations.js').IgnoredInformations;

var IgnoredAddedMessage = function() {
    this.ignoreAdded = new IgnoredInformations();
    this.session = false;
};

require('util').inherits(IgnoredAddedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IgnoredAddedMessage();
};

IgnoredAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_IgnoredAddedMessage(output);
};

IgnoredAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IgnoredAddedMessage(input);
};

IgnoredAddedMessage.prototype.serializeAs_IgnoredAddedMessage = function(param1) {
    param1.writeShort(this.ignoreAdded.getTypeId());
    this.ignoreAdded.serialize(param1);
    param1.writeBoolean(this.session);
};

IgnoredAddedMessage.prototype.deserializeAs_IgnoredAddedMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.ignoreAdded = ProtocolTypeManager.getInstance(IgnoredInformations, _loc2_);
    this.ignoreAdded.deserialize(param1);
    this.session = param1.readBoolean();
};

IgnoredAddedMessage.prototype.getMessageId = function() {
    return 5678;
};

IgnoredAddedMessage.prototype.getClassName = function() {
    return 'IgnoredAddedMessage';
};

module.exports.id = 5678;
module.exports.IgnoredAddedMessage = IgnoredAddedMessage;