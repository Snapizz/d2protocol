var AbstractContactInformations = function() {
    this.accountId = 0;
    this.accountName = "";
};

AbstractContactInformations.prototype.serialize = function(output) {
    this.serializeAs_AbstractContactInformations(output);
};

AbstractContactInformations.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractContactInformations(input);
};

AbstractContactInformations.prototype.serializeAs_AbstractContactInformations = function(param1) {
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        param1.writeUTF(this.accountName);
        return;
    }
};

AbstractContactInformations.prototype.deserializeAs_AbstractContactInformations = function(param1) {
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of AbstractContactInformations.accountId.");
    } else {
        this.accountName = param1.readUTF();
        return;
    }
};

AbstractContactInformations.prototype.getTypeId = function() {
    return 380;
};

AbstractContactInformations.prototype.getClassName = function() {
    return 'AbstractContactInformations';
};

module.exports.id = 380;
module.exports.class = AbstractContactInformations;
module.exports.getInstance = function() {
    return new AbstractContactInformations;
};