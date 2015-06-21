var TaxCollectorLootInformations = function() {
    this.kamas = 0;
    this.experience = 0;
    this.pods = 0;
    this.itemsValue = 0;
};

require('util').inherits(TaxCollectorLootInformations, require('./tax-collector-complementary-informations.js').TaxCollectorComplementaryInformations);

module.exports = function() {
    return new TaxCollectorLootInformations();
};

TaxCollectorLootInformations.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorLootInformations(output);
};

TaxCollectorLootInformations.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorLootInformations(input);
};

TaxCollectorLootInformations.prototype.serializeAs_TaxCollectorLootInformations = function(param1) {
    this.serializeAs_TaxCollectorComplementaryInformations(param1);
    if (this.kamas < 0) {
        throw new Error("Forbidden value (" + this.kamas + ") on element kamas.");
    } else {
        param1.writeVarInt(this.kamas);
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.experience + ") on element experience.");
        } else {
            param1.writeVarLong(this.experience);
            if (this.pods < 0) {
                throw new Error("Forbidden value (" + this.pods + ") on element pods.");
            } else {
                param1.writeVarInt(this.pods);
                if (this.itemsValue < 0) {
                    throw new Error("Forbidden value (" + this.itemsValue + ") on element itemsValue.");
                } else {
                    param1.writeVarInt(this.itemsValue);
                    return;
                }
            }
        }
    }
};

TaxCollectorLootInformations.prototype.deserializeAs_TaxCollectorLootInformations = function(param1) {
    this.deserializeAs_TaxCollectorComplementaryInformations(param1);
    this.kamas = param1.readVarUhInt();
    if (this.kamas < 0) {
        throw new Error("Forbidden value (" + this.kamas + ") on element of TaxCollectorLootInformations.kamas.");
    } else {
        this.experience = param1.readVarUhLong();
        if (this.experience < 0 || this.experience > 9.007199254740992E15) {
            throw new Error("Forbidden value (" + this.experience + ") on element of TaxCollectorLootInformations.experience.");
        } else {
            this.pods = param1.readVarUhInt();
            if (this.pods < 0) {
                throw new Error("Forbidden value (" + this.pods + ") on element of TaxCollectorLootInformations.pods.");
            } else {
                this.itemsValue = param1.readVarUhInt();
                if (this.itemsValue < 0) {
                    throw new Error("Forbidden value (" + this.itemsValue + ") on element of TaxCollectorLootInformations.itemsValue.");
                } else {
                    return;
                }
            }
        }
    }
};

TaxCollectorLootInformations.prototype.getTypeId = function() {
    return 372;
};

TaxCollectorLootInformations.prototype.getClassName = function() {
    return 'TaxCollectorLootInformations';
};

module.exports.id = 372;
module.exports.TaxCollectorLootInformations = TaxCollectorLootInformations;