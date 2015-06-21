var GoldItem = function() {
    this.sum = 0;
};

require('util').inherits(GoldItem, require('./item.js').class);

GoldItem.prototype.serialize = function(output) {
    this.serializeAs_GoldItem(output);
};

GoldItem.prototype.deserialize = function(input) {
    this.deserializeAs_GoldItem(input);
};

GoldItem.prototype.serializeAs_GoldItem = function(param1) {
    this.serializeAs_Item(param1);
    if (this.sum < 0) {
        throw new Error("Forbidden value (" + this.sum + ") on element sum.");
    } else {
        param1.writeVarInt(this.sum);
        return;
    }
};

GoldItem.prototype.deserializeAs_GoldItem = function(param1) {
    this.deserializeAs_Item(param1);
    this.sum = param1.readVarUhInt();
    if (this.sum < 0) {
        throw new Error("Forbidden value (" + this.sum + ") on element of GoldItem.sum.");
    } else {
        return;
    }
};

GoldItem.prototype.getTypeId = function() {
    return 123;
};

GoldItem.prototype.getClassName = function() {
    return 'GoldItem';
};

module.exports.id = 123;
module.exports.class = GoldItem;
module.exports.getInstance = function() {
    return new GoldItem;
};