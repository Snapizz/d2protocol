var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var FriendsListMessage = function() {
  this.friendsList = [];
};

util.inherits(FriendsListMessage, BaseMessage);

FriendsListMessage.prototype.serialize = function(output) {
  this.serializeAs_FriendsListMessage(output);
};

FriendsListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_FriendsListMessage(input);
};

FriendsListMessage.prototype.serializeAs_FriendsListMessage = function(output) {
  output.writeShort(this.friendsList.length);
  var _i1;
  while (_i1 < this.friendsList.length) {
    output.writeShort((this.friendsList[_i1]).getTypeId());
    (this.friendsList[_i1]).serialize(output);
    _i1++;
  };
};

FriendsListMessage.prototype.deserializeAs_FriendsListMessage = function(input) {
  var _id1;
  var _item1;
  var _friendsListLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _friendsListLen) {
    _id1 = input.readUnsignedShort();
    _item1 = ProtocolTypeManager.getInstance(FriendInformations, _id1);
    _item1.deserialize(input);
    this.friendsList.push(_item1);
    _i1++;
  };
};

FriendsListMessage.prototype.getMessageId = function() {
  return 4002;
};

FriendsListMessage.prototype.getClassName = function() {
  return 'FriendsListMessage';
};

module.exports.id = 4002;
module.exports.class = FriendsListMessage;