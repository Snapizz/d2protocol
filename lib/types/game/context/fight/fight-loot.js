var FightLoot = module.exports = function() {
    this.objects = [];
    this.kamas = 0;

    return this;
};

FightLoot.prototype.serialize = function(output) {
    this.serializeAs_FightLoot(output);
};

FightLoot.prototype.deserialize = function(input) {
    this.deserializeAs_FightLoot(input);
};

FightLoot.prototype.serializeAs_FightLoot = function(param1) {
    param1.writeShort(this.objects.length);
    var _loc2_ = 0;
    while (_loc2_ < this.objects.length) {
        if (this.objects[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.objects[_loc2_] + ") on element 1 (starting at 1) of objects.");
        } else {
            param1.writeVarShort(this.objects[_loc2_]);
            _loc2_++;
            continue;
        }
    }
    if (this.kamas < 0) {
        throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
    } else {
        param1.writeVarInt(this.kamas);
        return;
    }
};

FightLoot.prototype.deserializeAs_FightLoot = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of objects.");
        } else {
            this.objects.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
    this.kamas = param1.readVarUhInt();
    if (this.kamas < 0) {
        throw new Error("Forbidden value (" + this.kamas + ") on element of FightLoot.kamas.");
    } else {
        return;
    }
};

FightLoot.prototype.getTypeId = function() {
    return 41;
};

FightLoot.prototype.getClassName = function() {
    return 'FightLoot';
};

module.exports.id = 41;