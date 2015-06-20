var BaseMessage = require('./friend-spouse-informations.js').class,
  util = require('util');

var FriendSpouseOnlineInformations = function() {
  this.mapId = 0;
  this.subAreaId = 0;
  this.inFight = false;
  this.followSpouse = false;
};

util.inherits(FriendSpouseOnlineInformations, BaseMessage);

FriendSpouseOnlineInformations.prototype.serialize = function(output) {
  this.serializeAs_FriendSpouseOnlineInformations(output);
};

FriendSpouseOnlineInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FriendSpouseOnlineInformations(input);
};

FriendSpouseOnlineInformations.prototype.serializeAs_FriendSpouseOnlineInformations = function(output) {
  this.serializeAs_FriendSpouseInformations(output);
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.inFight);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.followSpouse);
  output.writeByte(_box0);
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element mapId.")));
  };
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
};

FriendSpouseOnlineInformations.prototype.deserializeAs_FriendSpouseOnlineInformations = function(input) {
  this.deserialize(input);
  var _box0 = input.readByte();
  this.inFight = BooleanByteWrapper.getFlag(_box0, 0);
  this.followSpouse = BooleanByteWrapper.getFlag(_box0, 1);
  this.mapId = input.readInt();
  if (this.mapId < 0) {
    throw (new Error((("Forbidden value (" + this.mapId) + ") on element of FriendSpouseOnlineInformations.mapId.")));
  };
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of FriendSpouseOnlineInformations.subAreaId.")));
  };
};

FriendSpouseOnlineInformations.prototype.getTypeId = function() {
  return 93;
};

FriendSpouseOnlineInformations.prototype.getClassName = function() {
  return 'FriendSpouseOnlineInformations';
};

module.exports.id = 93;
module.exports.class = FriendSpouseOnlineInformations;