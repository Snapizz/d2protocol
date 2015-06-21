var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FriendInformations = require('../../../types/game/friend/friend-informations.js').FriendInformations;

var FriendUpdateMessage = function() {
    this.friendUpdated = new FriendInformations();
};

require('util').inherits(FriendUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendUpdateMessage();
};

FriendUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendUpdateMessage(output);
};

FriendUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendUpdateMessage(input);
};

FriendUpdateMessage.prototype.serializeAs_FriendUpdateMessage = function(param1) {
    param1.writeShort(this.friendUpdated.getTypeId());
    this.friendUpdated.serialize(param1);
};

FriendUpdateMessage.prototype.deserializeAs_FriendUpdateMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.friendUpdated = ProtocolTypeManager.getInstance(FriendInformations, _loc2_);
    this.friendUpdated.deserialize(param1);
};

FriendUpdateMessage.prototype.getMessageId = function() {
    return 5924;
};

FriendUpdateMessage.prototype.getClassName = function() {
    return 'FriendUpdateMessage';
};

module.exports.id = 5924;
module.exports.FriendUpdateMessage = FriendUpdateMessage;