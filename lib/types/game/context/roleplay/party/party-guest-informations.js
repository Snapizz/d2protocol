var PartyGuestInformations = function() {
  this.guestId = 0;
  this.hostId = 0;
  this.name = "";
  this.guestLook;
  this.breed = 0;
  this.sex = false;
  this.status;
  this.companions = [];
};



PartyGuestInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyGuestInformations(output);
};

PartyGuestInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyGuestInformations(input);
};

PartyGuestInformations.prototype.serializeAs_PartyGuestInformations = function(output) {
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element guestId.")));
  };
  output.writeInt(this.guestId);
  if (this.hostId < 0) {
    throw (new Error((("Forbidden value (" + this.hostId) + ") on element hostId.")));
  };
  output.writeInt(this.hostId);
  output.writeUTF(this.name);
  this.guestLook.serializeAs_EntityLook(output);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  output.writeShort(this.status.getTypeId());
  this.status.serialize(output);
  output.writeShort(this.companions.length);
  var _i8;
  while (_i8 < this.companions.length) {
    (this.companions[_i8]).serializeAs_PartyCompanionBaseInformations(output);
    _i8++;
  };
};

PartyGuestInformations.prototype.deserializeAs_PartyGuestInformations = function(input) {
  var _item8;
  this.guestId = input.readInt();
  if (this.guestId < 0) {
    throw (new Error((("Forbidden value (" + this.guestId) + ") on element of PartyGuestInformations.guestId.")));
  };
  this.hostId = input.readInt();
  if (this.hostId < 0) {
    throw (new Error((("Forbidden value (" + this.hostId) + ") on element of PartyGuestInformations.hostId.")));
  };
  this.name = input.readUTF();
  this.guestLook = new EntityLook();
  this.guestLook.deserialize(input);
  this.breed = input.readByte();
  this.sex = input.readBoolean();
  var _id7 = input.readUnsignedShort();
  this.status = ProtocolTypeManager.getInstance(PlayerStatus, _id7);
  this.status.deserialize(input);
  var _companionsLen = input.readUnsignedShort();
  var _i8;
  while (_i8 < _companionsLen) {
    _item8 = new PartyCompanionBaseInformations();
    _item8.deserialize(input);
    this.companions.push(_item8);
    _i8++;
  };
};

PartyGuestInformations.prototype.getTypeId = function() {
  return 374;
};

PartyGuestInformations.prototype.getClassName = function() {
  return 'PartyGuestInformations';
};

module.exports.id = 374;
module.exports.class = PartyGuestInformations;