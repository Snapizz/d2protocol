var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PartyJoinMessage = function() {
  this.partyType = 0;
  this.partyLeaderId = 0;
  this.maxParticipants = 0;
  this.members = [];
  this.guests = [];
  this.restricted = false;
  this.partyName = "";
};

util.inherits(PartyJoinMessage, BaseMessage);

PartyJoinMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyJoinMessage(output);
};

PartyJoinMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyJoinMessage(input);
};

PartyJoinMessage.prototype.serializeAs_PartyJoinMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeByte(this.partyType);
  if (this.partyLeaderId < 0) {
    throw new Error("Forbidden value (" + this.partyLeaderId + ") on element partyLeaderId.");
  } else {
    param1.writeVarInt(this.partyLeaderId);
    if (this.maxParticipants < 0) {
      throw new Error("Forbidden value (" + this.maxParticipants + ") on element maxParticipants.");
    } else {
      param1.writeByte(this.maxParticipants);
      param1.writeShort(this.members.length);
      var _loc2_ = 0;
      while (_loc2_ < this.members.length) {
        param1.writeShort((this.members[_loc2_]).getTypeId());
        (this.members[_loc2_]).serialize(param1);
        _loc2_++;
      }
      param1.writeShort(this.guests.length);
      var _loc3_ = 0;
      while (_loc3_ < this.guests.length) {
        (this.guests[_loc3_]).serializeAs_PartyGuestInformations(param1);
        _loc3_++;
      }
      param1.writeBoolean(this.restricted);
      param1.writeUTF(this.partyName);
      return;
    }
  }
};

PartyJoinMessage.prototype.deserializeAs_PartyJoinMessage = function(param1) {
  var _loc6_ = 0;
  var _loc7_ = null;
  var _loc8_ = null;
  this.deserialize(param1);
  this.partyType = param1.readByte();
  if (this.partyType < 0) {
    throw new Error("Forbidden value (" + this.partyType + ") on element of PartyJoinMessage.partyType.");
  } else {
    this.partyLeaderId = param1.readVarUhInt();
    if (this.partyLeaderId < 0) {
      throw new Error("Forbidden value (" + this.partyLeaderId + ") on element of PartyJoinMessage.partyLeaderId.");
    } else {
      this.maxParticipants = param1.readByte();
      if (this.maxParticipants < 0) {
        throw new Error("Forbidden value (" + this.maxParticipants + ") on element of PartyJoinMessage.maxParticipants.");
      } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
          _loc6_ = param1.readUnsignedShort();
          _loc7_ = ProtocolTypeManager.getInstance(PartyMemberInformations, _loc6_);
          _loc7_.deserialize(param1);
          this.members.push(_loc7_);
          _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
          _loc8_ = new PartyGuestInformations();
          _loc8_.deserialize(param1);
          this.guests.push(_loc8_);
          _loc5_++;
        }
        this.restricted = param1.readBoolean();
        this.partyName = param1.readUTF();
        return;
      }
    }
  }
};

PartyJoinMessage.prototype.getMessageId = function() {
  return 5576;
};

PartyJoinMessage.prototype.getClassName = function() {
  return 'PartyJoinMessage';
};

module.exports.id = 5576;
module.exports.class = PartyJoinMessage;
module.exports.getInstance = function() {
  return new PartyJoinMessage();
};