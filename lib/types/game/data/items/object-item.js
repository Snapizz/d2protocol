var ObjectItem = function() {
    this.position = 63;
    this.objectGID = 0;
    this.effects = [];
    this.objectUID = 0;
    this.quantity = 0;
};

require('util').inherits(ObjectItem, require('./item.js'));

module.exports = function() {
    return new ObjectItem();
};

ObjectItem.prototype.serialize = function(output) {
    this.serializeAs_ObjectItem(output);
};

ObjectItem.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectItem(input);
};

ObjectItem.prototype.serializeAs_ObjectItem = function(param1) {
    this.serializeAs_Item(param1);
    param1.writeByte(this.position);
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
                return;
            }
        }
    }
};

ObjectItem.prototype.deserializeAs_ObjectItem = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    this.deserializeAs_Item(param1);
    this.position = param1.readUnsignedByte();
    if (this.position < 0 || this.position > 255) {
        throw new Error("Forbidden value (" + this.position + ") on element of ObjectItem.position.");
    } else {
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of ObjectItem.objectGID.");
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
                throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectItem.objectUID.");
            } else {
                this.quantity = param1.readVarUhInt();
                if (this.quantity < 0) {
                    throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectItem.quantity.");
                } else {
                    return;
                }
            }
        }
    }
};

ObjectItem.prototype.getTypeId = function() {
    return 37;
};

ObjectItem.prototype.getClassName = function() {
    return 'ObjectItem';
};

module.exports.id = 37;
module.exports.ObjectItem = ObjectItem;