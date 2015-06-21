var AbstractCharacterToRefurbishInformation = function() {
    this.colors = [];
    this.cosmeticId = 0;
};

require('util').inherits(AbstractCharacterToRefurbishInformation, require('../abstract-character-information.js'));

module.exports = function() {
    return new AbstractCharacterToRefurbishInformation();
};

AbstractCharacterToRefurbishInformation.prototype.serialize = function(output) {
    this.serializeAs_AbstractCharacterToRefurbishInformation(output);
};

AbstractCharacterToRefurbishInformation.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractCharacterToRefurbishInformation(input);
};

AbstractCharacterToRefurbishInformation.prototype.serializeAs_AbstractCharacterToRefurbishInformation = function(param1) {
    this.serializeAs_AbstractCharacterInformation(param1);
    param1.writeShort(this.colors.length);
    var _loc2_ = 0;
    while (_loc2_ < this.colors.length) {
        param1.writeInt(this.colors[_loc2_]);
        _loc2_++;
    }
    if (this.cosmeticId < 0) {
        throw new Error("Forbidden value (" + this.cosmeticId + ") on element cosmeticId.");
    } else {
        param1.writeVarInt(this.cosmeticId);
        return;
    }
};

AbstractCharacterToRefurbishInformation.prototype.deserializeAs_AbstractCharacterToRefurbishInformation = function(param1) {
    var _loc4_ = 0;
    this.deserializeAs_AbstractCharacterInformation(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
        this.colors.push(_loc4_);
        _loc3_++;
    }
    this.cosmeticId = param1.readVarUhInt();
    if (this.cosmeticId < 0) {
        throw new Error("Forbidden value (" + this.cosmeticId + ") on element of AbstractCharacterToRefurbishInformation.cosmeticId.");
    } else {
        return;
    }
};

AbstractCharacterToRefurbishInformation.prototype.getTypeId = function() {
    return 475;
};

AbstractCharacterToRefurbishInformation.prototype.getClassName = function() {
    return 'AbstractCharacterToRefurbishInformation';
};

module.exports.id = 475;
module.exports.AbstractCharacterToRefurbishInformation = AbstractCharacterToRefurbishInformation;