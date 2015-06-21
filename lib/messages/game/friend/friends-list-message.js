var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var FriendInformations = require('../../../types/game/friend/friend-informations.js').class;

var FriendsListMessage = module.exports = function() {
    this.friendsList = [];

    return this;
};

require('util').inherits(FriendsListMessage, d2com.NetworkMessage.class);

FriendsListMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendsListMessage(output);
};

FriendsListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendsListMessage(input);
};

FriendsListMessage.prototype.serializeAs_FriendsListMessage = function(param1) {
    param1.writeShort(this.friendsList.length);
    var _loc2_ = 0;
    while (_loc2_ < this.friendsList.length) {
        param1.writeShort((this.friendsList[_loc2_]).getTypeId());
        (this.friendsList[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

FriendsListMessage.prototype.deserializeAs_FriendsListMessage = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
        _loc5_ = ProtocolTypeManager.getInstance(FriendInformations, _loc4_);
        _loc5_.deserialize(param1);
        this.friendsList.push(_loc5_);
        _loc3_++;
    }
};

FriendsListMessage.prototype.getMessageId = function() {
    return 4002;
};

FriendsListMessage.prototype.getClassName = function() {
    return 'FriendsListMessage';
};

module.exports.id = 4002;