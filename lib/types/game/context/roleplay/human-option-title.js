var HumanOptionTitle = module.exports = function() {
    this.titleId = 0;
    this.titleParam = "";

    return this;
};

require('util').inherits(HumanOptionTitle, require('./human-option.js'));

HumanOptionTitle.prototype.serialize = function(output) {
    this.serializeAs_HumanOptionTitle(output);
};

HumanOptionTitle.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOptionTitle(input);
};

HumanOptionTitle.prototype.serializeAs_HumanOptionTitle = function(param1) {
    this.serializeAs_HumanOption(param1);
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
    } else {
        param1.writeVarShort(this.titleId);
        param1.writeUTF(this.titleParam);
        return;
    }
};

HumanOptionTitle.prototype.deserializeAs_HumanOptionTitle = function(param1) {
    this.deserializeAs_HumanOption(param1);
    this.titleId = param1.readVarUhShort();
    if (this.titleId < 0) {
        throw new Error("Forbidden value (" + this.titleId + ") on element of HumanOptionTitle.titleId.");
    } else {
        this.titleParam = param1.readUTF();
        return;
    }
};

HumanOptionTitle.prototype.getTypeId = function() {
    return 408;
};

HumanOptionTitle.prototype.getClassName = function() {
    return 'HumanOptionTitle';
};

module.exports.id = 408;