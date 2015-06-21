var NamedPartyTeam = function() {
    this.teamId = 2;
    this.partyName = "";
};

module.exports = function() {
    return new NamedPartyTeam();
};

NamedPartyTeam.prototype.serialize = function(output) {
    this.serializeAs_NamedPartyTeam(output);
};

NamedPartyTeam.prototype.deserialize = function(input) {
    this.deserializeAs_NamedPartyTeam(input);
};

NamedPartyTeam.prototype.serializeAs_NamedPartyTeam = function(param1) {
    param1.writeByte(this.teamId);
    param1.writeUTF(this.partyName);
};

NamedPartyTeam.prototype.deserializeAs_NamedPartyTeam = function(param1) {
    this.teamId = param1.readByte();
    if (this.teamId < 0) {
        throw new Error("Forbidden value (" + this.teamId + ") on element of NamedPartyTeam.teamId.");
    } else {
        this.partyName = param1.readUTF();
        return;
    }
};

NamedPartyTeam.prototype.getTypeId = function() {
    return 469;
};

NamedPartyTeam.prototype.getClassName = function() {
    return 'NamedPartyTeam';
};

module.exports.id = 469;
module.exports.NamedPartyTeam = NamedPartyTeam;