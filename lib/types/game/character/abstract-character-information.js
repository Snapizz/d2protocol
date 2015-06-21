var AbstractCharacterInformation = function() {
    this.id = 0;
};

module.exports = function() {
    return new AbstractCharacterInformation();
};

AbstractCharacterInformation.prototype.serialize = function(output) {
    this.serializeAs_AbstractCharacterInformation(output);
};

AbstractCharacterInformation.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractCharacterInformation(input);
};

AbstractCharacterInformation.prototype.serializeAs_AbstractCharacterInformation = function(param1) {
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarInt(this.id);
        return;
    }
};

AbstractCharacterInformation.prototype.deserializeAs_AbstractCharacterInformation = function(param1) {
    this.id = param1.readVarUhInt();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of AbstractCharacterInformation.id.");
    } else {
        return;
    }
};

AbstractCharacterInformation.prototype.getTypeId = function() {
    return 400;
};

AbstractCharacterInformation.prototype.getClassName = function() {
    return 'AbstractCharacterInformation';
};

module.exports.id = 400;
module.exports.AbstractCharacterInformation = AbstractCharacterInformation;