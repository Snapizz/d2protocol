/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInfosUpgradeMessage = (function (_super) {
    __extends(GuildInfosUpgradeMessage, _super);
    function GuildInfosUpgradeMessage() {
        this.maxTaxCollectorsCount = 0;
        this.taxCollectorsCount = 0;
        this.taxCollectorLifePoints = 0;
        this.taxCollectorDamagesBonuses = 0;
        this.taxCollectorPods = 0;
        this.taxCollectorProspecting = 0;
        this.taxCollectorWisdom = 0;
        this.boostPoints = 0;
        this.spellId = [];
        this.spellLevel = [];
        _super.call(this);
    }
    GuildInfosUpgradeMessage.prototype.getMessageId = function () {
        return GuildInfosUpgradeMessage.ID;
    };
    GuildInfosUpgradeMessage.prototype.reset = function () {
        this.maxTaxCollectorsCount = 0;
        this.taxCollectorsCount = 0;
        this.taxCollectorLifePoints = 0;
        this.taxCollectorDamagesBonuses = 0;
        this.taxCollectorPods = 0;
        this.taxCollectorProspecting = 0;
        this.taxCollectorWisdom = 0;
        this.boostPoints = 0;
        this.spellId = [];
        this.spellLevel = [];
    };
    GuildInfosUpgradeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildInfosUpgradeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildInfosUpgradeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildInfosUpgradeMessage(param1);
    };
    GuildInfosUpgradeMessage.prototype.serializeAs_GuildInfosUpgradeMessage = function (param1) {
        if (this.maxTaxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.maxTaxCollectorsCount + ') on element maxTaxCollectorsCount.');
        }
        param1.writeByte(this.maxTaxCollectorsCount);
        if (this.taxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorsCount + ') on element taxCollectorsCount.');
        }
        param1.writeByte(this.taxCollectorsCount);
        if (this.taxCollectorLifePoints < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorLifePoints + ') on element taxCollectorLifePoints.');
        }
        param1.writeVarShort(this.taxCollectorLifePoints);
        if (this.taxCollectorDamagesBonuses < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorDamagesBonuses + ') on element taxCollectorDamagesBonuses.');
        }
        param1.writeVarShort(this.taxCollectorDamagesBonuses);
        if (this.taxCollectorPods < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorPods + ') on element taxCollectorPods.');
        }
        param1.writeVarShort(this.taxCollectorPods);
        if (this.taxCollectorProspecting < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorProspecting + ') on element taxCollectorProspecting.');
        }
        param1.writeVarShort(this.taxCollectorProspecting);
        if (this.taxCollectorWisdom < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorWisdom + ') on element taxCollectorWisdom.');
        }
        param1.writeVarShort(this.taxCollectorWisdom);
        if (this.boostPoints < 0) {
            throw new Error('Forbidden value (' + this.boostPoints + ') on element boostPoints.');
        }
        param1.writeVarShort(this.boostPoints);
        param1.writeShort(this.spellId.length);
        var _loc2_ = 0;
        while (_loc2_ < this.spellId.length) {
            if (this.spellId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.spellId[_loc2_] + ') on element 9 (starting at 1) of spellId.');
            }
            param1.writeVarShort(this.spellId[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.spellLevel.length);
        var _loc3_ = 0;
        while (_loc3_ < this.spellLevel.length) {
            if (this.spellLevel[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.spellLevel[_loc3_] + ') on element 10 (starting at 1) of spellLevel.');
            }
            param1.writeByte(this.spellLevel[_loc3_]);
            _loc3_++;
        }
    };
    GuildInfosUpgradeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInfosUpgradeMessage(param1);
    };
    GuildInfosUpgradeMessage.prototype.deserializeAs_GuildInfosUpgradeMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        this.maxTaxCollectorsCount = param1.readByte();
        if (this.maxTaxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.maxTaxCollectorsCount + ') on element of GuildInfosUpgradeMessage.maxTaxCollectorsCount.');
        }
        this.taxCollectorsCount = param1.readByte();
        if (this.taxCollectorsCount < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorsCount + ') on element of GuildInfosUpgradeMessage.taxCollectorsCount.');
        }
        this.taxCollectorLifePoints = param1.readVarUhShort();
        if (this.taxCollectorLifePoints < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorLifePoints + ') on element of GuildInfosUpgradeMessage.taxCollectorLifePoints.');
        }
        this.taxCollectorDamagesBonuses = param1.readVarUhShort();
        if (this.taxCollectorDamagesBonuses < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorDamagesBonuses + ') on element of GuildInfosUpgradeMessage.taxCollectorDamagesBonuses.');
        }
        this.taxCollectorPods = param1.readVarUhShort();
        if (this.taxCollectorPods < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorPods + ') on element of GuildInfosUpgradeMessage.taxCollectorPods.');
        }
        this.taxCollectorProspecting = param1.readVarUhShort();
        if (this.taxCollectorProspecting < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorProspecting + ') on element of GuildInfosUpgradeMessage.taxCollectorProspecting.');
        }
        this.taxCollectorWisdom = param1.readVarUhShort();
        if (this.taxCollectorWisdom < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorWisdom + ') on element of GuildInfosUpgradeMessage.taxCollectorWisdom.');
        }
        this.boostPoints = param1.readVarUhShort();
        if (this.boostPoints < 0) {
            throw new Error('Forbidden value (' + this.boostPoints + ') on element of GuildInfosUpgradeMessage.boostPoints.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of spellId.');
            }
            this.spellId.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readByte();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of spellLevel.');
            }
            this.spellLevel.push(_loc7_);
            _loc5_++;
        }
    };
    GuildInfosUpgradeMessage.ID = 5636;
    return GuildInfosUpgradeMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildInfosUpgradeMessage;
