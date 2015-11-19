/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
var GameFightFighterLightInformations = (function () {
    function GameFightFighterLightInformations() {
        this.id = 0;
        this.wave = 0;
        this.level = 0;
        this.breed = 0;
        this.sex = false;
        this.alive = false;
    }
    GameFightFighterLightInformations.prototype.getTypeId = function () {
        return GameFightFighterLightInformations.ID;
    };
    GameFightFighterLightInformations.prototype.reset = function () {
        this.id = 0;
        this.wave = 0;
        this.level = 0;
        this.breed = 0;
        this.sex = false;
        this.alive = false;
    };
    GameFightFighterLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterLightInformations(param1);
    };
    GameFightFighterLightInformations.prototype.serializeAs_GameFightFighterLightInformations = function (param1) {
        var _loc2_ = 0;
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.sex);
        _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.alive);
        param1.writeByte(_loc2_);
        param1.writeInt(this.id);
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element wave.');
        }
        param1.writeByte(this.wave);
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeVarShort(this.level);
        param1.writeByte(this.breed);
    };
    GameFightFighterLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterLightInformations(param1);
    };
    GameFightFighterLightInformations.prototype.deserializeAs_GameFightFighterLightInformations = function (param1) {
        var _loc2_ = param1.readByte();
        this.sex = BooleanByteWrapper.getFlag(_loc2_, 0);
        this.alive = BooleanByteWrapper.getFlag(_loc2_, 1);
        this.id = param1.readInt();
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element of GameFightFighterLightInformations.wave.');
        }
        this.level = param1.readVarUhShort();
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameFightFighterLightInformations.level.');
        }
        this.breed = param1.readByte();
    };
    GameFightFighterLightInformations.ID = 413;
    return GameFightFighterLightInformations;
})();
module.exports = GameFightFighterLightInformations;
