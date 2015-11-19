/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var HumanOption = require('./human-option');
var ActorRestrictionsInformations = require('../../character/restriction/actor-restrictions-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var HumanInformations = (function () {
    function HumanInformations() {
        this.restrictions = new ActorRestrictionsInformations();
        this.sex = false;
        this.options = [];
    }
    HumanInformations.prototype.getTypeId = function () {
        return HumanInformations.ID;
    };
    HumanInformations.prototype.reset = function () {
        this.restrictions = new ActorRestrictionsInformations();
        this.sex = false;
        this.options = [];
    };
    HumanInformations.prototype.serialize = function (param1) {
        this.serializeAs_HumanInformations(param1);
    };
    HumanInformations.prototype.serializeAs_HumanInformations = function (param1) {
        this.restrictions.serializeAs_ActorRestrictionsInformations(param1);
        param1.writeBoolean(this.sex);
        param1.writeShort(this.options.length);
        var _loc2_ = 0;
        while (_loc2_ < this.options.length) {
            param1.writeShort((this.options[_loc2_]).getTypeId());
            (this.options[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    HumanInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanInformations(param1);
    };
    HumanInformations.prototype.deserializeAs_HumanInformations = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        this.restrictions = new ActorRestrictionsInformations();
        this.restrictions.deserialize(param1);
        this.sex = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(HumanOption, _loc4_);
            _loc5_.deserialize(param1);
            this.options.push(_loc5_);
            _loc3_++;
        }
    };
    HumanInformations.ID = 157;
    return HumanInformations;
})();
module.exports = HumanInformations;
