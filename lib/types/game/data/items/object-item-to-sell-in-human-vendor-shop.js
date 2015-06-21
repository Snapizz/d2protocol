var ObjectItemToSellInHumanVendorShop = function() {
    this.objectGID = 0;
    this.effects = [];
    this.objectUID = 0;
    this.quantity = 0;
    this.objectPrice = 0;
    this.Price = 0;
};

require('util').inherits(ObjectItemToSellInHumanVendorShop, require('./item.js'));

module.exports = function() {
    return new ObjectItemToSellInHumanVendorShop();
};

ObjectItemToSellInHumanVendorShop.prototype.serialize = function(output) {
    this.serializeAs_ObjectItemToSellInHumanVendorShop(output);
};

ObjectItemToSellInHumanVendorShop.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectItemToSellInHumanVendorShop(input);
};

ObjectItemToSellInHumanVendorShop.prototype.serializeAs_ObjectItemToSellInHumanVendorShop = function(param1) {
    this.serializeAs_Item(param1);
    if (this.objectGID < 0) {
        throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
    } else {
        param1.writeVarShort(this.objectGID);
        param1.writeShort(this.effects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.effects.length) {
            param1.writeShort((this.effects[_loc2_]).getTypeId());
            (this.effects[_loc2_]).serialize(param1);
            _loc2_++;
        }
        if (this.objectUID < 0) {
            throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
        } else {
            param1.writeVarInt(this.objectUID);
            if (this.quantity < 0) {
                throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
            } else {
                param1.writeVarInt(this.quantity);
                if (this.objectPrice < 0) {
                    throw new Error("Forbidden value (" + this.objectPrice + ") on element objectPrice.");
                } else {
                    param1.writeVarInt(this.objectPrice);
                    if (this.publicPrice < 0) {
                        throw new Error("Forbidden value (" + this.publicPrice + ") on element publicPrice.");
                    } else {
                        param1.writeVarInt(this.publicPrice);
                        return;
                    }
                }
            }
        }
    }
};

ObjectItemToSellInHumanVendorShop.prototype.deserializeAs_ObjectItemToSellInHumanVendorShop = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    this.deserializeAs_Item(param1);
    this.objectGID = param1.readVarUhShort();
    if (this.objectGID < 0) {
        throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItemToSellInHumanVendorShop.objectGID.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc4_);
            _loc5_.deserialize(param1);
            this.effects.push(_loc5_);
            _loc3_++;
        }
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItemToSellInHumanVendorShop.objectUID.");
        } else {
            this.quantity = param1.readVarUhInt();
            if (this.quantity < 0) {
                throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItemToSellInHumanVendorShop.quantity.");
            } else {
                this.objectPrice = param1.readVarUhInt();
                if (this.objectPrice < 0) {
                    throw new Error("Forbidden value (" + this.objectPrice + ") on element of ObjectItemToSellInHumanVendorShop.objectPrice.");
                } else {
                    this.publicPrice = param1.readVarUhInt();
                    if (this.publicPrice < 0) {
                        throw new Error("Forbidden value (" + this.publicPrice + ") on element of ObjectItemToSellInHumanVendorShop.publicPrice.");
                    } else {
                        return;
                    }
                }
            }
        }
    }
};

ObjectItemToSellInHumanVendorShop.prototype.getTypeId = function() {
    return 359;
};

ObjectItemToSellInHumanVendorShop.prototype.getClassName = function() {
    return 'ObjectItemToSellInHumanVendorShop';
};

module.exports.id = 359;
module.exports.ObjectItemToSellInHumanVendorShop = ObjectItemToSellInHumanVendorShop;