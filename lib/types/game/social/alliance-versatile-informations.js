var BaseMessage = require('./alliance-versatile-informations.js').class,
  util = require('util');

var AllianceVersatileInformations = function() {
  this.allianceId = 0;
  this.nbGuilds = 0;
  this.nbMembers = 0;
  this.nbSubarea = 0;
};

util.inherits(AllianceVersatileInformations, BaseMessage);

AllianceVersatileInformations.prototype.serialize = function(output) {
  this.serializeAs_AllianceVersatileInformations(output);
};

AllianceVersatileInformations.prototype.deserialize = function(input) {
  this.deserializeAs_AllianceVersatileInformations(input);
};

AllianceVersatileInformations.prototype.serializeAs_AllianceVersatileInformations = function(param1) {
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
  } else {
    param1.writeVarInt(this.allianceId);
    if (this.nbGuilds < 0) {
      throw new Error("Forbidden value (" + this.nbGuilds + ") on element nbGuilds.");
    } else {
      param1.writeVarShort(this.nbGuilds);
      if (this.nbMembers < 0) {
        throw new Error("Forbidden value (" + this.nbMembers + ") on element nbMembers.");
      } else {
        param1.writeVarShort(this.nbMembers);
        if (this.nbSubarea < 0) {
          throw new Error("Forbidden value (" + this.nbSubarea + ") on element nbSubarea.");
        } else {
          param1.writeVarShort(this.nbSubarea);
          return;
        }
      }
    }
  }
};

AllianceVersatileInformations.prototype.deserializeAs_AllianceVersatileInformations = function(param1) {
  this.allianceId = param1.readVarUhInt();
  if (this.allianceId < 0) {
    throw new Error("Forbidden value (" + this.allianceId + ") on element of AllianceVersatileInformations.allianceId.");
  } else {
    this.nbGuilds = param1.readVarUhShort();
    if (this.nbGuilds < 0) {
      throw new Error("Forbidden value (" + this.nbGuilds + ") on element of AllianceVersatileInformations.nbGuilds.");
    } else {
      this.nbMembers = param1.readVarUhShort();
      if (this.nbMembers < 0) {
        throw new Error("Forbidden value (" + this.nbMembers + ") on element of AllianceVersatileInformations.nbMembers.");
      } else {
        this.nbSubarea = param1.readVarUhShort();
        if (this.nbSubarea < 0) {
          throw new Error("Forbidden value (" + this.nbSubarea + ") on element of AllianceVersatileInformations.nbSubarea.");
        } else {
          return;
        }
      }
    }
  }
};

AllianceVersatileInformations.prototype.getTypeId = function() {
  return 432;
};

AllianceVersatileInformations.prototype.getClassName = function() {
  return 'AllianceVersatileInformations';
};

module.exports.id = 432;
module.exports.class = AllianceVersatileInformations;
module.exports.getInstance = function() {
  return new AllianceVersatileInformations();
};