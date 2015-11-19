/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var EntityDispositionInformations = require('./entity-disposition-informations');
var EntityLook = require('../look/entity-look');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var GameContextActorInformations = (function () {
    function GameContextActorInformations() {
        this.contextualId = 0;
        this.look = new EntityLook();
        this.disposition = new EntityDispositionInformations();
    }
    GameContextActorInformations.prototype.getTypeId = function () {
        return GameContextActorInformations.ID;
    };
    GameContextActorInformations.prototype.reset = function () {
        this.contextualId = 0;
        this.look = new EntityLook();
        this.disposition = new EntityDispositionInformations();
    };
    GameContextActorInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameContextActorInformations(param1);
    };
    GameContextActorInformations.prototype.serializeAs_GameContextActorInformations = function (param1) {
        param1.writeInt(this.contextualId);
        this.look.serializeAs_EntityLook(param1);
        param1.writeShort(this.disposition.getTypeId());
        this.disposition.serialize(param1);
    };
    GameContextActorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextActorInformations(param1);
    };
    GameContextActorInformations.prototype.deserializeAs_GameContextActorInformations = function (param1) {
        this.contextualId = param1.readInt();
        this.look = new EntityLook();
        this.look.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        this.disposition = ProtocolTypeManager.getInstance(EntityDispositionInformations, _loc2_);
        this.disposition.deserialize(param1);
    };
    GameContextActorInformations.ID = 150;
    return GameContextActorInformations;
})();
module.exports = GameContextActorInformations;
