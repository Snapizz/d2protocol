var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuildInfosUpgradeMessage = function() {
    this.maxTaxCollectorsCount = 0;
    this.taxCollectorsCount = 0;
    this.taxCollectorLifePoints = 0;
    this.taxCollectorDamagesBonuses = 0;
    this.taxCollectorPods = 0;
    this.taxCollectorProspecting = 0;
    this.taxCollectorWisdom = 0;
    this.boostPoints = 0;
    this.spellId = [];
    this.spellLevel = [];
};

require('util').inherits(GuildInfosUpgradeMessage, d2com.NetworkMessage.class);

GuildInfosUpgradeMessage.prototype.serialize = function(output) {
    this.serializeAs_GuildInfosUpgradeMessage(output);
};

GuildInfosUpgradeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInfosUpgradeMessage(input);
};

GuildInfosUpgradeMessage.prototype.serializeAs_GuildInfosUpgradeMessage = function(param1) {
    if (this.maxTaxCollectorsCount < 0) {
        throw new Error("Forbidden value (" + this.maxTaxCollectorsCount + ") on element maxTaxCollectorsCount.");
    } else {
        param1.writeByte(this.maxTaxCollectorsCount);
        if (this.taxCollectorsCount < 0) {
            throw new Error("Forbidden value (" + this.taxCollectorsCount + ") on element taxCollectorsCount.");
        } else {
            param1.writeByte(this.taxCollectorsCount);
            if (this.taxCollectorLifePoints < 0) {
                throw new Error("Forbidden value (" + this.taxCollectorLifePoints + ") on element taxCollectorLifePoints.");
            } else {
                param1.writeVarShort(this.taxCollectorLifePoints);
                if (this.taxCollectorDamagesBonuses < 0) {
                    throw new Error("Forbidden value (" + this.taxCollectorDamagesBonuses + ") on element taxCollectorDamagesBonuses.");
                } else {
                    param1.writeVarShort(this.taxCollectorDamagesBonuses);
                    if (this.taxCollectorPods < 0) {
                        throw new Error("Forbidden value (" + this.taxCollectorPods + ") on element taxCollectorPods.");
                    } else {
                        param1.writeVarShort(this.taxCollectorPods);
                        if (this.taxCollectorProspecting < 0) {
                            throw new Error("Forbidden value (" + this.taxCollectorProspecting + ") on element taxCollectorProspecting.");
                        } else {
                            param1.writeVarShort(this.taxCollectorProspecting);
                            if (this.taxCollectorWisdom < 0) {
                                throw new Error("Forbidden value (" + this.taxCollectorWisdom + ") on element taxCollectorWisdom.");
                            } else {
                                param1.writeVarShort(this.taxCollectorWisdom);
                                if (this.boostPoints < 0) {
                                    throw new Error("Forbidden value (" + this.boostPoints + ") on element boostPoints.");
                                } else {
                                    param1.writeVarShort(this.boostPoints);
                                    param1.writeShort(this.spellId.length);
                                    var _loc2_ = 0;
                                    while (_loc2_ < this.spellId.length) {
                                        if (this.spellId[_loc2_] < 0) {
                                            throw new Error("Forbidden value (" + this.spellId[_loc2_] + ") on element 9 (starting at 1) of spellId.");
                                        } else {
                                            param1.writeVarShort(this.spellId[_loc2_]);
                                            _loc2_++;
                                            continue;
                                        }
                                    }
                                    param1.writeShort(this.spellLevel.length);
                                    var _loc3_ = 0;
                                    while (_loc3_ < this.spellLevel.length) {
                                        if (this.spellLevel[_loc3_] < 0) {
                                            throw new Error("Forbidden value (" + this.spellLevel[_loc3_] + ") on element 10 (starting at 1) of spellLevel.");
                                        } else {
                                            param1.writeByte(this.spellLevel[_loc3_]);
                                            _loc3_++;
                                            continue;
                                        }
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

GuildInfosUpgradeMessage.prototype.deserializeAs_GuildInfosUpgradeMessage = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = 0;
    this.maxTaxCollectorsCount = param1.readByte();
    if (this.maxTaxCollectorsCount < 0) {
        throw new Error("Forbidden value (" + this.maxTaxCollectorsCount + ") on element of GuildInfosUpgradeMessage.maxTaxCollectorsCount.");
    } else {
        this.taxCollectorsCount = param1.readByte();
        if (this.taxCollectorsCount < 0) {
            throw new Error("Forbidden value (" + this.taxCollectorsCount + ") on element of GuildInfosUpgradeMessage.taxCollectorsCount.");
        } else {
            this.taxCollectorLifePoints = param1.readVarUhShort();
            if (this.taxCollectorLifePoints < 0) {
                throw new Error("Forbidden value (" + this.taxCollectorLifePoints + ") on element of GuildInfosUpgradeMessage.taxCollectorLifePoints.");
            } else {
                this.taxCollectorDamagesBonuses = param1.readVarUhShort();
                if (this.taxCollectorDamagesBonuses < 0) {
                    throw new Error("Forbidden value (" + this.taxCollectorDamagesBonuses + ") on element of GuildInfosUpgradeMessage.taxCollectorDamagesBonuses.");
                } else {
                    this.taxCollectorPods = param1.readVarUhShort();
                    if (this.taxCollectorPods < 0) {
                        throw new Error("Forbidden value (" + this.taxCollectorPods + ") on element of GuildInfosUpgradeMessage.taxCollectorPods.");
                    } else {
                        this.taxCollectorProspecting = param1.readVarUhShort();
                        if (this.taxCollectorProspecting < 0) {
                            throw new Error("Forbidden value (" + this.taxCollectorProspecting + ") on element of GuildInfosUpgradeMessage.taxCollectorProspecting.");
                        } else {
                            this.taxCollectorWisdom = param1.readVarUhShort();
                            if (this.taxCollectorWisdom < 0) {
                                throw new Error("Forbidden value (" + this.taxCollectorWisdom + ") on element of GuildInfosUpgradeMessage.taxCollectorWisdom.");
                            } else {
                                this.boostPoints = param1.readVarUhShort();
                                if (this.boostPoints < 0) {
                                    throw new Error("Forbidden value (" + this.boostPoints + ") on element of GuildInfosUpgradeMessage.boostPoints.");
                                } else {
                                    var _loc2_ = param1.readUnsignedShort();
                                    var _loc3_ = 0;
                                    while (_loc3_ < _loc2_) {
                                        _loc6_ = param1.readVarUhShort();
                                        if (_loc6_ < 0) {
                                            throw new Error("Forbidden value (" + _loc6_ + ") on elements of spellId.");
                                        } else {
                                            this.spellId.push(_loc6_);
                                            _loc3_++;
                                            continue;
                                        }
                                    }
                                    var _loc4_ = param1.readUnsignedShort();
                                    var _loc5_ = 0;
                                    while (_loc5_ < _loc4_) {
                                        _loc7_ = param1.readByte();
                                        if (_loc7_ < 0) {
                                            throw new Error("Forbidden value (" + _loc7_ + ") on elements of spellLevel.");
                                        } else {
                                            this.spellLevel.push(_loc7_);
                                            _loc5_++;
                                            continue;
                                        }
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

GuildInfosUpgradeMessage.prototype.getMessageId = function() {
    return 5636;
};

GuildInfosUpgradeMessage.prototype.getClassName = function() {
    return 'GuildInfosUpgradeMessage';
};

module.exports.id = 5636;
module.exports.class = GuildInfosUpgradeMessage;
module.exports.getInstance = function() {
    return new GuildInfosUpgradeMessage;
};