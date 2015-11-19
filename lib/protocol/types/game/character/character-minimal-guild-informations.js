/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterMinimalPlusLookInformations = require('./character-minimal-plus-look-informations');
var BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
var CharacterMinimalGuildInformations = (function (_super) {
    __extends(CharacterMinimalGuildInformations, _super);
    function CharacterMinimalGuildInformations() {
        this.guild = new BasicGuildInformations();
        _super.call(this);
    }
    CharacterMinimalGuildInformations.prototype.getTypeId = function () {
        return CharacterMinimalGuildInformations.ID;
    };
    CharacterMinimalGuildInformations.prototype.reset = function () {
        this.guild = new BasicGuildInformations();
    };
    CharacterMinimalGuildInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterMinimalGuildInformations(param1);
    };
    CharacterMinimalGuildInformations.prototype.serializeAs_CharacterMinimalGuildInformations = function (param1) {
        _super.prototype.serializeAs_CharacterMinimalPlusLookInformations.call(this, param1);
        this.guild.serializeAs_BasicGuildInformations(param1);
    };
    CharacterMinimalGuildInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterMinimalGuildInformations(param1);
    };
    CharacterMinimalGuildInformations.prototype.deserializeAs_CharacterMinimalGuildInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);
    };
    CharacterMinimalGuildInformations.ID = 445;
    return CharacterMinimalGuildInformations;
})(CharacterMinimalPlusLookInformations);
module.exports = CharacterMinimalGuildInformations;
