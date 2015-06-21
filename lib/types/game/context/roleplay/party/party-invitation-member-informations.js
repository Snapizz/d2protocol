var PartyInvitationMemberInformations = function() {
    this.worldX = 0;
    this.worldY = 0;
    this.mapId = 0;
    this.subAreaId = 0;
    this.companions = [];
};

require('util').inherits(PartyInvitationMemberInformations, require('../../../character/choice/').class);

PartyInvitationMemberInformations.prototype.serialize = function(output) {
    this.serializeAs_PartyInvitationMemberInformations(output);
};

PartyInvitationMemberInformations.prototype.deserialize = function(input) {
    this.deserializeAs_PartyInvitationMemberInformations(input);
};

PartyInvitationMemberInformations.prototype.serializeAs_PartyInvitationMemberInformations = function(param1) {
    this.serializeAs_CharacterBaseInformationsAs_CharacterBaseInformations(param1);
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
                param1.writeShort(this.companions.length);
                var _loc2_ = 0;
                while (_loc2_ < this.companions.length) {
                    (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
                    _loc2_++;
                }
                return;
            }
        }
    }
};

PartyInvitationMemberInformations.prototype.deserializeAs_PartyInvitationMemberInformations = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_CharacterBaseInformations(param1);
    this.worldX = param1.readShort();
    if (this.worldX < -255 || this.worldX > 255) {
        throw new Error("Forbidden value (" + this.worldX + ") on element of PartyInvitationMemberInformations.worldX.");
    } else {
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error("Forbidden value (" + this.worldY + ") on element of PartyInvitationMemberInformations.worldY.");
        } else {
            this.mapId = param1.readInt();
            this.subAreaId = param1.readVarUhShort();
            if (this.subAreaId < 0) {
                throw new Error("Forbidden value (" + this.subAreaId + ") on element of PartyInvitationMemberInformations.subAreaId.");
            } else {
                var _loc2_ = param1.readUnsignedShort();
                var _loc3_ = 0;
                while (_loc3_ < _loc2_) {
                    _loc4_ = new PartyCompanionBaseInformations();
                    _loc4_.deserialize(param1);
                    this.companions.push(_loc4_);
                    _loc3_++;
                }
                return;
            }
        }
    }
};

PartyInvitationMemberInformations.prototype.getTypeId = function() {
    return 376;
};

PartyInvitationMemberInformations.prototype.getClassName = function() {
    return 'PartyInvitationMemberInformations';
};

module.exports.id = 376;
module.exports.class = PartyInvitationMemberInformations;
module.exports.getInstance = function() {
    return new PartyInvitationMemberInformations;
};