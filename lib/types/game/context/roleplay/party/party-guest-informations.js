var BaseMessage = require('./party-guest-informations.js').class,
  util = require('util');

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

util.inherits(PartyGuestInformations, BaseMessage);

PartyGuestInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyGuestInformations(output);
};

PartyGuestInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyGuestInformations(input);
};

PartyGuestInformations.prototype.serializeAs_PartyGuestInformations = function(param1) {
  if (this.guestId < 0) {
    throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
  } else {
    param1.writeInt(this.guestId);
    if (this.hostId < 0) {
      throw new Error("Forbidden value (" + this.hostId + ") on element hostId.");
    } else {
      param1.writeInt(this.hostId);
      param1.writeUTF(this.name);
      this.guestLook.serializeAs_EntityLook(param1);
      param1.writeByte(this.breed);
      param1.writeBoolean(this.sex);
      param1.writeShort(this.status.getTypeId());
      this.status.serialize(param1);
      param1.writeShort(this.companions.length);
      var _loc2_ = 0;
      while (_loc2_ < this.companions.length) {
        (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
        _loc2_++;
      }
      return;
    }
  }
};

PartyGuestInformations.prototype.deserializeAs_PartyGuestInformations = function(param1) {
  var _loc5_ = null;
  this.guestId = param1.readInt();
  if (this.guestId < 0) {
    throw new Error("Forbidden value (" + this.guestId + ") on element of PartyGuestInformations.guestId.");
  } else {
    this.hostId = param1.readInt();
    if (this.hostId < 0) {
      throw new Error("Forbidden value (" + this.hostId + ") on element of PartyGuestInformations.hostId.");
    } else {
      this.name = param1.readUTF();
      this.guestLook = new EntityLook();
      this.guestLook.deserialize(param1);
      this.breed = param1.readByte();
      this.sex = param1.readBoolean();
      var _loc2_ = param1.readUnsignedShort();
      this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
      this.status.deserialize(param1);
      var _loc3_ = param1.readUnsignedShort();
      var _loc4_ = 0;
      while (_loc4_ < _loc3_) {
        _loc5_ = new PartyCompanionBaseInformations();
        _loc5_.deserialize(param1);
        this.companions.push(_loc5_);
        _loc4_++;
      }
      return;
    }
  }
};

PartyGuestInformations.prototype.getTypeId = function() {
  return 374;
};

PartyGuestInformations.prototype.getClassName = function() {
  return 'PartyGuestInformations';
};

module.exports.id = 374;
module.exports.class = PartyGuestInformations;
module.exports.getInstance = function() {
  return new PartyGuestInformations();
};