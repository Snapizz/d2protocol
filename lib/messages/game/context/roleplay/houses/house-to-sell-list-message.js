var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var HouseInformationsForSell = require('../../../../../types/game/house/house-informations-for-sell.js').class;

var HouseToSellListMessage = module.exports = function() {
    this.pageIndex = 0;
    this.totalPage = 0;
    this.houseList = [];

    return this;
};

require('util').inherits(HouseToSellListMessage, d2com.NetworkMessage.class);

HouseToSellListMessage.prototype.serialize = function(output) {
    this.serializeAs_HouseToSellListMessage(output);
};

HouseToSellListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_HouseToSellListMessage(input);
};

HouseToSellListMessage.prototype.serializeAs_HouseToSellListMessage = function(param1) {
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element pageIndex.");
    } else {
        param1.writeVarShort(this.pageIndex);
        if (this.totalPage < 0) {
            throw new Error("Forbidden value (" + this.totalPage + ") on element totalPage.");
        } else {
            param1.writeVarShort(this.totalPage);
            param1.writeShort(this.houseList.length);
            var _loc2_ = 0;
            while (_loc2_ < this.houseList.length) {
                (this.houseList[_loc2_]).serializeAs_HouseInformationsForSell(param1);
                _loc2_++;
            }
            return;
        }
    }
};

HouseToSellListMessage.prototype.deserializeAs_HouseToSellListMessage = function(param1) {
    var _loc4_ = null;
    this.pageIndex = param1.readVarUhShort();
    if (this.pageIndex < 0) {
        throw new Error("Forbidden value (" + this.pageIndex + ") on element of HouseToSellListMessage.pageIndex.");
    } else {
        this.totalPage = param1.readVarUhShort();
        if (this.totalPage < 0) {
            throw new Error("Forbidden value (" + this.totalPage + ") on element of HouseToSellListMessage.totalPage.");
        } else {
            var _loc2_ = param1.readUnsignedShort();
            var _loc3_ = 0;
            while (_loc3_ < _loc2_) {
                _loc4_ = new HouseInformationsForSell();
                _loc4_.deserialize(param1);
                this.houseList.push(_loc4_);
                _loc3_++;
            }
            return;
        }
    }
};

HouseToSellListMessage.prototype.getMessageId = function() {
    return 6140;
};

HouseToSellListMessage.prototype.getClassName = function() {
    return 'HouseToSellListMessage';
};

module.exports.id = 6140;