var HouseInformationsForGuild = function() {
  this.houseId = 0;
  this.modelId = 0;
  this.ownerName = "";
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.skillListIds = [];
  this.guildshareParams = 0;
};



HouseInformationsForGuild.prototype.serialize = function(output) {
  this.serializeAs_HouseInformationsForGuild(output);
};

HouseInformationsForGuild.prototype.deserialize = function(input) {
  this.deserializeAs_HouseInformationsForGuild(input);
};

HouseInformationsForGuild.prototype.serializeAs_HouseInformationsForGuild = function(output) {
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element houseId.")));
  };
  output.writeInt(this.houseId);
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element modelId.")));
  };
  output.writeVarInt(this.modelId);
  output.writeUTF(this.ownerName);
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
  output.writeShort(this.skillListIds.length);
  var _i8 = 0;
  while (_i8 < this.skillListIds.length) {
    output.writeInt(this.skillListIds[_i8]);
    _i8++;
  };
  if (this.guildshareParams < 0) {
    throw (new Error((("Forbidden value (" + this.guildshareParams) + ") on element guildshareParams.")));
  };
  output.writeVarInt(this.guildshareParams);
};

HouseInformationsForGuild.prototype.deserializeAs_HouseInformationsForGuild = function(input) {
  var _val8 = 0;
  this.houseId = input.readInt();
  if (this.houseId < 0) {
    throw (new Error((("Forbidden value (" + this.houseId) + ") on element of HouseInformationsForGuild.houseId.")));
  };
  this.modelId = input.readVarUhInt();
  if (this.modelId < 0) {
    throw (new Error((("Forbidden value (" + this.modelId) + ") on element of HouseInformationsForGuild.modelId.")));
  };
  this.ownerName = input.readUTF();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of HouseInformationsForGuild.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of HouseInformationsForGuild.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of HouseInformationsForGuild.subAreaId.")));
  };
  var _skillListIdsLen = input.readUnsignedShort();
  var _i8 = 0;
  while (_i8 < _skillListIdsLen) {
    _val8 = input.readInt();
    this.skillListIds.push(_val8);
    _i8++;
  };
  this.guildshareParams = input.readVarUhInt();
  if (this.guildshareParams < 0) {
    throw (new Error((("Forbidden value (" + this.guildshareParams) + ") on element of HouseInformationsForGuild.guildshareParams.")));
  };
};

HouseInformationsForGuild.prototype.getTypeId = function() {
  return 170;
};

HouseInformationsForGuild.prototype.getClassName = function() {
  return 'HouseInformationsForGuild';
};

module.exports.id = 170;
module.exports.class = HouseInformationsForGuild;