var PaddockBuyableInformations = function() {
    this.price = 0;
    this.locked = false;
};

require('util').inherits(PaddockBuyableInformations, require('./paddock-informations.js').class);

PaddockBuyableInformations.prototype.serialize = function(output) {
    this.serializeAs_PaddockBuyableInformations(output);
};

PaddockBuyableInformations.prototype.deserialize = function(input) {
    this.deserializeAs_PaddockBuyableInformations(input);
};

PaddockBuyableInformations.prototype.serializeAs_PaddockBuyableInformations = function(param1) {
    this.serializeAs_PaddockInformationsAs_PaddockInformations(param1);
    if (this.price < 0) {
        throw new Error("Forbidden value (" + this.price + ") on element price.");
    } else {
        param1.writeVarInt(this.price);
        param1.writeBoolean(this.locked);
        return;
    }
};

PaddockBuyableInformations.prototype.deserializeAs_PaddockBuyableInformations = function(param1) {
    this.deserializeAs_PaddockInformations(param1);
    this.price = param1.readVarUhInt();
    if (this.price < 0) {
        throw new Error("Forbidden value (" + this.price + ") on element of PaddockBuyableInformations.price.");
    } else {
        this.locked = param1.readBoolean();
        return;
    }
};

PaddockBuyableInformations.prototype.getTypeId = function() {
    return 130;
};

PaddockBuyableInformations.prototype.getClassName = function() {
    return 'PaddockBuyableInformations';
};

module.exports.id = 130;
module.exports.class = PaddockBuyableInformations;
module.exports.getInstance = function() {
    return new PaddockBuyableInformations;
};