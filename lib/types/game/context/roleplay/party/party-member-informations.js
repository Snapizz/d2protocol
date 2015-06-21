var PartyMemberInformations = function() {
    this.lifePoints = 0;
    this.maxLifePoints = 0;
    this.prospecting = 0;
    this.regenRate = 0;
    this.initiative = 0;
    this.alignmentSide = 0;
    this.worldX = 0;
    this.worldY = 0;
    this.mapId = 0;
    this.subAreaId = 0;
    this.status = new PlayerStatus();
    this.companions = [];
};

require('util').inherits(PartyMemberInformations, require('../../../character/choice/character-base-informations.js'));

module.exports = function() {
    return new PartyMemberInformations();
};

PartyMemberInformations.prototype.serialize = function(output) {
    this.serializeAs_PartyMemberInformations(output);
};

PartyMemberInformations.prototype.deserialize = function(input) {
    this.deserializeAs_PartyMemberInformations(input);
};

PartyMemberInformations.prototype.serializeAs_PartyMemberInformations = function(param1) {
    this.serializeAs_CharacterBaseInformations(param1);
    if (this.lifePoints < 0) {
        throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
    } else {
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
        } else {
            param1.writeVarInt(this.maxLifePoints);
            if (this.prospecting < 0) {
                throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
            } else {
                param1.writeVarShort(this.prospecting);
                if (this.regenRate < 0 || this.regenRate > 255) {
                    throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
                } else {
                    param1.writeByte(this.regenRate);
                    if (this.initiative < 0) {
                        throw new Error("Forbidden value (" + this.initiative + ") on element initiative.");
                    } else {
                        param1.writeVarShort(this.initiative);
                        param1.writeByte(this.alignmentSide);
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
                                    param1.writeShort(this.status.getTypeId());
                                    this.status.serialize(param1);
                                    param1.writeShort(this.companions.length);
                                    var _loc2_ = 0;
                                    while (_loc2_ < this.companions.length) {
                                        (this.companions[_loc2_]).serializeAs_PartyCompanionMemberInformations(param1);
                                        _loc2_++;
                                    }
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

PartyMemberInformations.prototype.deserializeAs_PartyMemberInformations = function(param1) {
    var _loc5_ = null;
    this.deserializeAs_CharacterBaseInformations(param1);
    this.lifePoints = param1.readVarUhInt();
    if (this.lifePoints < 0) {
        throw new Error("Forbidden value (" + this.lifePoints + ") on element of PartyMemberInformations.lifePoints.");
    } else {
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of PartyMemberInformations.maxLifePoints.");
        } else {
            this.prospecting = param1.readVarUhShort();
            if (this.prospecting < 0) {
                throw new Error("Forbidden value (" + this.prospecting + ") on element of PartyMemberInformations.prospecting.");
            } else {
                this.regenRate = param1.readUnsignedByte();
                if (this.regenRate < 0 || this.regenRate > 255) {
                    throw new Error("Forbidden value (" + this.regenRate + ") on element of PartyMemberInformations.regenRate.");
                } else {
                    this.initiative = param1.readVarUhShort();
                    if (this.initiative < 0) {
                        throw new Error("Forbidden value (" + this.initiative + ") on element of PartyMemberInformations.initiative.");
                    } else {
                        this.alignmentSide = param1.readByte();
                        this.worldX = param1.readShort();
                        if (this.worldX < -255 || this.worldX > 255) {
                            throw new Error("Forbidden value (" + this.worldX + ") on element of PartyMemberInformations.worldX.");
                        } else {
                            this.worldY = param1.readShort();
                            if (this.worldY < -255 || this.worldY > 255) {
                                throw new Error("Forbidden value (" + this.worldY + ") on element of PartyMemberInformations.worldY.");
                            } else {
                                this.mapId = param1.readInt();
                                this.subAreaId = param1.readVarUhShort();
                                if (this.subAreaId < 0) {
                                    throw new Error("Forbidden value (" + this.subAreaId + ") on element of PartyMemberInformations.subAreaId.");
                                } else {
                                    var _loc2_ = param1.readUnsignedShort();
                                    this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
                                    this.status.deserialize(param1);
                                    var _loc3_ = param1.readUnsignedShort();
                                    var _loc4_ = 0;
                                    while (_loc4_ < _loc3_) {
                                        _loc5_ = new PartyCompanionMemberInformations();
                                        _loc5_.deserialize(param1);
                                        this.companions.push(_loc5_);
                                        _loc4_++;
                                    }
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

PartyMemberInformations.prototype.getTypeId = function() {
    return 90;
};

PartyMemberInformations.prototype.getClassName = function() {
    return 'PartyMemberInformations';
};

module.exports.id = 90;
module.exports.PartyMemberInformations = PartyMemberInformations;