/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GameFightSpellCooldown = (function () {
    function GameFightSpellCooldown() {
        this.spellId = 0;
        this.cooldown = 0;
    }
    GameFightSpellCooldown.prototype.getTypeId = function () {
        return GameFightSpellCooldown.ID;
    };
    GameFightSpellCooldown.prototype.reset = function () {
        this.spellId = 0;
        this.cooldown = 0;
    };
    GameFightSpellCooldown.prototype.serialize = function (param1) {
        this.serializeAs_GameFightSpellCooldown(param1);
    };
    GameFightSpellCooldown.prototype.serializeAs_GameFightSpellCooldown = function (param1) {
        param1.writeInt(this.spellId);
        if (this.cooldown < 0) {
            throw new Error('Forbidden value (' + this.cooldown + ') on element cooldown.');
        }
        param1.writeByte(this.cooldown);
    };
    GameFightSpellCooldown.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightSpellCooldown(param1);
    };
    GameFightSpellCooldown.prototype.deserializeAs_GameFightSpellCooldown = function (param1) {
        this.spellId = param1.readInt();
        this.cooldown = param1.readByte();
        if (this.cooldown < 0) {
            throw new Error('Forbidden value (' + this.cooldown + ') on element of GameFightSpellCooldown.cooldown.');
        }
    };
    GameFightSpellCooldown.ID = 205;
    return GameFightSpellCooldown;
})();
module.exports = GameFightSpellCooldown;
