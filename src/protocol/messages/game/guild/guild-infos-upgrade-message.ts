/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GuildInfosUpgradeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5636;

    maxTaxCollectorsCount: number;
    taxCollectorsCount: number;
    taxCollectorLifePoints: number;
    taxCollectorDamagesBonuses: number;
    taxCollectorPods: number;
    taxCollectorProspecting: number;
    taxCollectorWisdom: number;
    boostPoints: number;
    spellId: number[];
    spellLevel: number[];

    constructor() {
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
        super();
    }

    public getMessageId(): number {
        return GuildInfosUpgradeMessage.ID;
    }

    public reset(): void {
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
    }

    public pack(param1: ICustomDataOutput): void {
        let loc2 = new ByteArray();
        this.serialize(new CustomDataWrapper(loc2));
        NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    }

    public unpack(param1: ICustomDataInput, param2: number): void {
        this.deserialize(param1);
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GuildInfosUpgradeMessage(param1);
    }

    public serializeAs_GuildInfosUpgradeMessage(param1: ICustomDataOutput): void {
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
        var _loc2_: number = 0;
        while (_loc2_ < this.spellId.length) {
            if (this.spellId[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.spellId[_loc2_] + ') on element 9 (starting at 1) of spellId.');
            }
            param1.writeVarShort(this.spellId[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.spellLevel.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.spellLevel.length) {
            if (this.spellLevel[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.spellLevel[_loc3_] + ') on element 10 (starting at 1) of spellLevel.');
            }
            param1.writeByte(this.spellLevel[_loc3_]);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildInfosUpgradeMessage(param1);
    }

    public deserializeAs_GuildInfosUpgradeMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: number = 0;
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
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of spellId.');
            }
            this.spellId.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readByte();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of spellLevel.');
            }
            this.spellLevel.push(_loc7_);
            _loc5_++;
        }

    }
}

export = GuildInfosUpgradeMessage;
