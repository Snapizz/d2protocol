var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FriendInformations = require('../../../types/game/friend/friend-informations.js').class;

var FriendAddedMessage = module.exports = function() {
    this.friendAdded = new FriendInformations();

    return this;
};

require('util').inherits(FriendAddedMessage, d2com.NetworkMessage.class);

FriendAddedMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendAddedMessage(output);
};

FriendAddedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendAddedMessage(input);
};

FriendAddedMessage.prototype.serializeAs_FriendAddedMessage = function(param1) {
    param1.writeShort(this.friendAdded.getTypeId());
    this.friendAdded.serialize(param1);
};

FriendAddedMessage.prototype.deserializeAs_FriendAddedMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.friendAdded = ProtocolTypeManager.getInstance(FriendInformations, _loc2_);
    this.friendAdded.deserialize(param1);
};

FriendAddedMessage.prototype.getMessageId = function() {
    return 5599;
};

FriendAddedMessage.prototype.getClassName = function() {
    return 'FriendAddedMessage';
};

module.exports.id = 5599;