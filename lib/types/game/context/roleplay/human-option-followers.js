var HumanOptionFollowers = module.exports = function() {
    this.followingCharactersLook = [];

    return this;
};

require('util').inherits(HumanOptionFollowers, require('./human-option.js'));

HumanOptionFollowers.prototype.serialize = function(output) {
    this.serializeAs_HumanOptionFollowers(output);
};

HumanOptionFollowers.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOptionFollowers(input);
};

HumanOptionFollowers.prototype.serializeAs_HumanOptionFollowers = function(param1) {
    this.serializeAs_HumanOption(param1);
    param1.writeShort(this.followingCharactersLook.length);
    var _loc2_ = 0;
    while (_loc2_ < this.followingCharactersLook.length) {
        (this.followingCharactersLook[_loc2_]).serializeAs_IndexedEntityLook(param1);
        _loc2_++;
    }
};

HumanOptionFollowers.prototype.deserializeAs_HumanOptionFollowers = function(param1) {
    var _loc4_ = null;
    this.deserializeAs_HumanOption(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new IndexedEntityLook();
        _loc4_.deserialize(param1);
        this.followingCharactersLook.push(_loc4_);
        _loc3_++;
    }
};

HumanOptionFollowers.prototype.getTypeId = function() {
    return 410;
};

HumanOptionFollowers.prototype.getClassName = function() {
    return 'HumanOptionFollowers';
};

module.exports.id = 410;