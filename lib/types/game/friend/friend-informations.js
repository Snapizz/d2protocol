var FriendInformations = function() {
  this.playerState = 99;
  this.lastConnection = 0;
  this.achievementPoints = 0;
};



FriendInformations.prototype.serialize = function(output) {
  this.serializeAs_FriendInformations(output);
};

FriendInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FriendInformations(input);
};

FriendInformations.prototype.serializeAs_FriendInformations = function(output) {
  this.serializeAs_AbstractContactInformations(param1);
  param1.writeByte(this.playerState);
  if (this.lastConnection < 0) {
    throw new Error("Forbidden value (" + this.lastConnection + ") on element lastConnection.");
  } else {
    param1.writeVarShort(this.lastConnection);
    param1.writeInt(this.achievementPoints);
    return;
  }
};

FriendInformations.prototype.deserializeAs_FriendInformations = function(input) {
  this.deserialize(param1);
  this.playerState = param1.readByte();
  if (this.playerState < 0) {
    throw new Error("Forbidden value (" + this.playerState + ") on element of FriendInformations.playerState.");
  } else {
    this.lastConnection = param1.readVarUhShort();
    if (this.lastConnection < 0) {
      throw new Error("Forbidden value (" + this.lastConnection + ") on element of FriendInformations.lastConnection.");
    } else {
      this.achievementPoints = param1.readInt();
      return;
    }
  }
};

FriendInformations.prototype.getTypeId = function() {
  return 78;
};

FriendInformations.prototype.getClassName = function() {
  return 'FriendInformations';
};

module.exports.id = 78;
module.exports.class = FriendInformations;