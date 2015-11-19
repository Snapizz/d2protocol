/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GameServerInformations = (function () {
    function GameServerInformations() {
        this.id = 0;
        this.type = -1;
        this.status = 1;
        this.completion = 0;
        this.isSelectable = false;
        this.charactersCount = 0;
        this.charactersSlots = 0;
        this.date = 0;
    }
    GameServerInformations.prototype.getTypeId = function () {
        return GameServerInformations.ID;
    };
    GameServerInformations.prototype.reset = function () {
        this.id = 0;
        this.type = -1;
        this.status = 1;
        this.completion = 0;
        this.isSelectable = false;
        this.charactersCount = 0;
        this.charactersSlots = 0;
        this.date = 0;
    };
    GameServerInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameServerInformations(param1);
    };
    GameServerInformations.prototype.serializeAs_GameServerInformations = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        param1.writeByte(this.type);
        param1.writeByte(this.status);
        param1.writeByte(this.completion);
        param1.writeBoolean(this.isSelectable);
        if (this.charactersCount < 0) {
            throw new Error('Forbidden value (' + this.charactersCount + ') on element charactersCount.');
        }
        param1.writeByte(this.charactersCount);
        if (this.charactersSlots < 0) {
            throw new Error('Forbidden value (' + this.charactersSlots + ') on element charactersSlots.');
        }
        param1.writeByte(this.charactersSlots);
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element date.');
        }
        param1.writeDouble(this.date);
    };
    GameServerInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameServerInformations(param1);
    };
    GameServerInformations.prototype.deserializeAs_GameServerInformations = function (param1) {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of GameServerInformations.id.');
        }
        this.type = param1.readByte();
        this.status = param1.readByte();
        if (this.status < 0) {
            throw new Error('Forbidden value (' + this.status + ') on element of GameServerInformations.status.');
        }
        this.completion = param1.readByte();
        if (this.completion < 0) {
            throw new Error('Forbidden value (' + this.completion + ') on element of GameServerInformations.completion.');
        }
        this.isSelectable = param1.readBoolean();
        this.charactersCount = param1.readByte();
        if (this.charactersCount < 0) {
            throw new Error('Forbidden value (' + this.charactersCount + ') on element of GameServerInformations.charactersCount.');
        }
        this.charactersSlots = param1.readByte();
        if (this.charactersSlots < 0) {
            throw new Error('Forbidden value (' + this.charactersSlots + ') on element of GameServerInformations.charactersSlots.');
        }
        this.date = param1.readDouble();
        if (this.date < -9.007199254740992E15 || this.date > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.date + ') on element of GameServerInformations.date.');
        }
    };
    GameServerInformations.ID = 25;
    return GameServerInformations;
})();
module.exports = GameServerInformations;
