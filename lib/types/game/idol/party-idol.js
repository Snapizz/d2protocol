var PartyIdol = function() {
    this.ownersIds = [];
};

require('util').inherits(PartyIdol, require('./idol.js').Idol);

module.exports = function() {
    return new PartyIdol();
};

PartyIdol.prototype.serialize = function(output) {
    this.serializeAs_PartyIdol(output);
};

PartyIdol.prototype.deserialize = function(input) {
    this.deserializeAs_PartyIdol(input);
};

PartyIdol.prototype.serializeAs_PartyIdol = function(param1) {
    this.serializeAs_Idol(param1);
    param1.writeShort(this.ownersIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.ownersIds.length) {
        param1.writeInt(this.ownersIds[_loc2_]);
        _loc2_++;
    }
};

PartyIdol.prototype.deserializeAs_PartyIdol = function(param1) {
    var _loc4_ = 0;
    this.deserializeAs_Idol(param1);
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
        this.ownersIds.push(_loc4_);
        _loc3_++;
    }
};

PartyIdol.prototype.getTypeId = function() {
    return 490;
};

PartyIdol.prototype.getClassName = function() {
    return 'PartyIdol';
};

module.exports.id = 490;
module.exports.PartyIdol = PartyIdol;