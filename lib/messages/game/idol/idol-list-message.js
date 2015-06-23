var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyIdol = require('../../../types/game/idol/party-idol.js').PartyIdol;

var IdolListMessage = function() {
    this.chosenIdols = [];
    this.partyChosenIdols = [];
    this.partyIdols = [];
};

require('util').inherits(IdolListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new IdolListMessage();
};

IdolListMessage.prototype.serialize = function(output) {
    this.serializeAs_IdolListMessage(output);
};

IdolListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_IdolListMessage(input);
};

IdolListMessage.prototype.serializeAs_IdolListMessage = function(param1) {
    param1.writeShort(this.chosenIdols.length);
    var _loc2_ = 0;
    while (_loc2_ < this.chosenIdols.length) {
        if (this.chosenIdols[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.chosenIdols[_loc2_] + ") on element 1 (starting at 1) of chosenIdols.");
        } else {
            param1.writeVarShort(this.chosenIdols[_loc2_]);
            _loc2_++;
            continue;
        }
    }
    param1.writeShort(this.partyChosenIdols.length);
    var _loc3_ = 0;
    while (_loc3_ < this.partyChosenIdols.length) {
        if (this.partyChosenIdols[_loc3_] < 0) {
            throw new Error("Forbidden value (" + this.partyChosenIdols[_loc3_] + ") on element 2 (starting at 1) of partyChosenIdols.");
        } else {
            param1.writeVarShort(this.partyChosenIdols[_loc3_]);
            _loc3_++;
            continue;
        }
    }
    param1.writeShort(this.partyIdols.length);
    var _loc4_ = 0;
    while (_loc4_ < this.partyIdols.length) {
        param1.writeShort((this.partyIdols[_loc4_]).getTypeId());
        (this.partyIdols[_loc4_]).serialize(param1);
        _loc4_++;
    }
};

IdolListMessage.prototype.deserializeAs_IdolListMessage = function(param1) {
    var _loc8_ = 0;
    var _loc9_ = 0;
    var _loc10_ = 0;
    var _loc11_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc8_ = param1.readVarUhShort();
        if (_loc8_ < 0) {
            throw new Error("Forbidden value (" + _loc8_ + ") on elements of chosenIdols.");
        } else {
            this.chosenIdols.push(_loc8_);
            _loc3_++;
            continue;
        }
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
        _loc9_ = param1.readVarUhShort();
        if (_loc9_ < 0) {
            throw new Error("Forbidden value (" + _loc9_ + ") on elements of partyChosenIdols.");
        } else {
            this.partyChosenIdols.push(_loc9_);
            _loc5_++;
            continue;
        }
    }
    var _loc6_ = param1.readUnsignedShort();
    var _loc7_ = 0;
    while (_loc7_ < _loc6_) {
        _loc10_ = param1.readUnsignedShort();
        _loc11_ = ProtocolTypeManager.getInstance(PartyIdol, _loc10_);
        _loc11_.deserialize(param1);
        this.partyIdols.push(_loc11_);
        _loc7_++;
    }
};

IdolListMessage.prototype.getMessageId = function() {
    return 6585;
};

IdolListMessage.prototype.getClassName = function() {
    return 'IdolListMessage';
};

module.exports.id = 6585;
module.exports.IdolListMessage = IdolListMessage;