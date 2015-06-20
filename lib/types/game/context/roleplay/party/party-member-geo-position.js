var BaseMessage = require('./party-member-geo-position.js').class,
  util = require('util');

var PartyMemberGeoPosition = function() {
  this.memberId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
};

util.inherits(PartyMemberGeoPosition, BaseMessage);

PartyMemberGeoPosition.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberGeoPosition(output);
};

PartyMemberGeoPosition.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberGeoPosition(input);
};

PartyMemberGeoPosition.prototype.serializeAs_PartyMemberGeoPosition = function(param1) {
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
  } else {
    param1.writeInt(this.memberId);
    if (this.worldX < -255 || this.worldX > 255) {
      throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
    } else {
      param1.writeShort(this.worldX);
      if (this.worldY < -255 || this.worldY > 255) {
        throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
      } else {
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
          throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        } else {
          param1.writeVarShort(this.subAreaId);
          return;
        }
      }
    }
  }
};

PartyMemberGeoPosition.prototype.deserializeAs_PartyMemberGeoPosition = function(param1) {
  this.memberId = param1.readInt();
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element of PartyMemberGeoPosition.memberId.");
  } else {
    this.worldX = param1.readShort();
    if (this.worldX < -255 || this.worldX > 255) {
      throw new Error("Forbidden value (" + this.worldX + ") on element of PartyMemberGeoPosition.worldX.");
    } else {
      this.worldY = param1.readShort();
      if (this.worldY < -255 || this.worldY > 255) {
        throw new Error("Forbidden value (" + this.worldY + ") on element of PartyMemberGeoPosition.worldY.");
      } else {
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
          throw new Error("Forbidden value (" + this.subAreaId + ") on element of PartyMemberGeoPosition.subAreaId.");
        } else {
          return;
        }
      }
    }
  }
};

PartyMemberGeoPosition.prototype.getTypeId = function() {
  return 378;
};

PartyMemberGeoPosition.prototype.getClassName = function() {
  return 'PartyMemberGeoPosition';
};

module.exports.id = 378;
module.exports.class = PartyMemberGeoPosition;
module.exports.getInstance = function() {
  return new PartyMemberGeoPosition();
};