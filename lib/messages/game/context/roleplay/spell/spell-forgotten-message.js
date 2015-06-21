var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var SpellForgottenMessage = module.exports = function() {
    this.spellsId = [];
    this.boostPoint = 0;

    return this;
};

require('util').inherits(SpellForgottenMessage, d2com.NetworkMessage.class);

SpellForgottenMessage.prototype.serialize = function(output) {
    this.serializeAs_SpellForgottenMessage(output);
};

SpellForgottenMessage.prototype.deserialize = function(input) {
    this.deserializeAs_SpellForgottenMessage(input);
};

SpellForgottenMessage.prototype.serializeAs_SpellForgottenMessage = function(param1) {
    param1.writeShort(this.spellsId.length);
    var _loc2_ = 0;
    while (_loc2_ < this.spellsId.length) {
        if (this.spellsId[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.spellsId[_loc2_] + ") on element 1 (starting at 1) of spellsId.");
        } else {
            param1.writeVarShort(this.spellsId[_loc2_]);
            _loc2_++;
            continue;
        }
    }
    if (this.boostPoint < 0) {
        throw new Error("Forbidden value (" + this.boostPoint + ") on element boostPoint.");
    } else {
        param1.writeVarShort(this.boostPoint);
        return;
    }
};

SpellForgottenMessage.prototype.deserializeAs_SpellForgottenMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of spellsId.");
        } else {
            this.spellsId.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
    this.boostPoint = param1.readVarUhShort();
    if (this.boostPoint < 0) {
        throw new Error("Forbidden value (" + this.boostPoint + ") on element of SpellForgottenMessage.boostPoint.");
    } else {
        return;
    }
};

SpellForgottenMessage.prototype.getMessageId = function() {
    return 5834;
};

SpellForgottenMessage.prototype.getClassName = function() {
    return 'SpellForgottenMessage';
};

module.exports.id = 5834;