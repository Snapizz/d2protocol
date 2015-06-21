var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PaddockInformationsForSell = require('../../../../../types/game/paddock/paddock-informations-for-sell.js').class;

var PaddockToSellListMessage = function() {
    this.pageIndex = 0;
    this.totalPage = 0;
    this.paddockList = [];
};

require('util').inherits(PaddockToSellListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PaddockToSellListMessage();
};

PaddockToSellListMessage.prototype.serialize = function(output) {
    this.serializeAs_PaddockToSellListMessage(output);
};

PaddockToSellListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockToSellListMessage(input);
};

PaddockToSellListMessage.prototype.serializeAs_PaddockToSellListMessage = function(param1) {
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
    } else {
        param1.writeVarShort(this.pageIndex);
        if (this.totalPage < 0) {
            throw new Error("Forbidden value (" + this.totalPage + ") on element totalPage.");
        } else {
            param1.writeVarShort(this.totalPage);
            param1.writeShort(this.paddockList.length);
            var _loc2_ = 0;
            while (_loc2_ < this.paddockList.length) {
                (this.paddockList[_loc2_]).serializeAs_PaddockInformationsForSell(param1);
                _loc2_++;
            }
            return;
        }
    }
};

PaddockToSellListMessage.prototype.deserializeAs_PaddockToSellListMessage = function(param1) {
    var _loc4_ = null;
    this.pageIndex = param1.readVarUhShort();
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element of PaddockToSellListMessage.pageIndex.");
    } else {
        this.totalPage = param1.readVarUhShort();
        if (this.totalPage < 0) {
            throw new Error("Forbidden value (" + this.totalPage + ") on element of PaddockToSellListMessage.totalPage.");
        } else {
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new PaddockInformationsForSell();
                _loc4_.deserialize(param1);
                this.paddockList.push(_loc4_);
                _loc3_++;
            }
            return;
        }
    }
};

PaddockToSellListMessage.prototype.getMessageId = function() {
    return 6138;
};

PaddockToSellListMessage.prototype.getClassName = function() {
    return 'PaddockToSellListMessage';
};

module.exports.id = 6138;
module.exports.PaddockToSellListMessage = PaddockToSellListMessage;