/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterMinimalGuildInformations = require('./character-minimal-guild-informations');
var BasicAllianceInformations = require('../context/roleplay/basic-alliance-informations');
var CharacterMinimalAllianceInformations = (function (_super) {
    __extends(CharacterMinimalAllianceInformations, _super);
    function CharacterMinimalAllianceInformations() {
        this.alliance = new BasicAllianceInformations();
        _super.call(this);
    }
    CharacterMinimalAllianceInformations.prototype.getTypeId = function () {
        return CharacterMinimalAllianceInformations.ID;
    };
    CharacterMinimalAllianceInformations.prototype.reset = function () {
        this.alliance = new BasicAllianceInformations();
    };
    CharacterMinimalAllianceInformations.prototype.serialize = function (param1) {
        this.serializeAs_CharacterMinimalAllianceInformations(param1);
    };
    CharacterMinimalAllianceInformations.prototype.serializeAs_CharacterMinimalAllianceInformations = function (param1) {
        _super.prototype.serializeAs_CharacterMinimalGuildInformations.call(this, param1);
        this.alliance.serializeAs_BasicAllianceInformations(param1);
    };
    CharacterMinimalAllianceInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterMinimalAllianceInformations(param1);
    };
    CharacterMinimalAllianceInformations.prototype.deserializeAs_CharacterMinimalAllianceInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.alliance = new BasicAllianceInformations();
        this.alliance.deserialize(param1);
    };
    CharacterMinimalAllianceInformations.ID = 444;
    return CharacterMinimalAllianceInformations;
})(CharacterMinimalGuildInformations);
module.exports = CharacterMinimalAllianceInformations;
