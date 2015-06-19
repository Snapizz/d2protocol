var PartyMemberGeoPosition = function() {
  this.memberId = 0;
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
};



PartyMemberGeoPosition.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberGeoPosition(output);
};

PartyMemberGeoPosition.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberGeoPosition(input);
};

PartyMemberGeoPosition.prototype.serializeAs_PartyMemberGeoPosition = function(output) {
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element memberId.")));
  };
  output.writeInt(this.memberId);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
};

PartyMemberGeoPosition.prototype.deserializeAs_PartyMemberGeoPosition = function(input) {
  this.memberId = input.readInt();
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element of PartyMemberGeoPosition.memberId.")));
  };
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of PartyMemberGeoPosition.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of PartyMemberGeoPosition.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of PartyMemberGeoPosition.subAreaId.")));
  };
};

PartyMemberGeoPosition.prototype.getTypeId = function() {
  return 378;
};

PartyMemberGeoPosition.prototype.getClassName = function() {
  return 'PartyMemberGeoPosition';
};

module.exports.id = 378;
module.exports.class = PartyMemberGeoPosition;