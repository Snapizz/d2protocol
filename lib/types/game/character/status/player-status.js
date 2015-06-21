var PlayerStatus = function() {
    this.statusId = 1;
};

PlayerStatus.prototype.serialize = function(output) {
    this.serializeAs_PlayerStatus(output);
};

PlayerStatus.prototype.deserialize = function(input) {
    this.deserializeAs_PlayerStatus(input);
};

PlayerStatus.prototype.serializeAs_PlayerStatus = function(param1) {
    param1.writeByte(this.statusId);
};

PlayerStatus.prototype.deserializeAs_PlayerStatus = function(param1) {
    this.statusId = param1.readByte();
    if (this.statusId < 0) {
        throw new Error("Forbidden value (" + this.statusId + ") on element of PlayerStatus.statusId.");
    } else {
        return;
    }
};

PlayerStatus.prototype.getTypeId = function() {
    return 415;
};

PlayerStatus.prototype.getClassName = function() {
    return 'PlayerStatus';
};

module.exports.id = 415;
module.exports.class = PlayerStatus;
module.exports.getInstance = function() {
    return new PlayerStatus;
};