/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntStep = require('../../../../../types/game/context/roleplay/treasureHunt/treasure-hunt-step');
import TreasureHuntFlag = require('../../../../../types/game/context/roleplay/treasureHunt/treasure-hunt-flag');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class TreasureHuntMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6486;

    questType: number;
    startMapId: number;
    knownStepsList: TreasureHuntStep[];
    totalStepCount: number;
    checkPointCurrent: number;
    checkPointTotal: number;
    availableRetryCount: number;
    flags: TreasureHuntFlag[];

    constructor() {
        this.questType = 0;
        this.startMapId = 0;
        this.knownStepsList = [];
        this.totalStepCount = 0;
        this.checkPointCurrent = 0;
        this.checkPointTotal = 0;
        this.availableRetryCount = 0;
        this.flags = [];
        super();
    }

    public getMessageId(): number {
        return TreasureHuntMessage.ID;
    }

    public reset(): void {
        this.questType = 0;
        this.startMapId = 0;
        this.knownStepsList = [];
        this.totalStepCount = 0;
        this.checkPointCurrent = 0;
        this.checkPointTotal = 0;
        this.availableRetryCount = 0;
        this.flags = [];
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
        this.serializeAs_TreasureHuntMessage(param1);
    }

    public serializeAs_TreasureHuntMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.questType);
        param1.writeInt(this.startMapId);
        param1.writeShort(this.knownStepsList.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.knownStepsList.length) {
            param1.writeShort((this.knownStepsList[_loc2_]).getTypeId());
            (this.knownStepsList[_loc2_]).serialize(param1);
            _loc2_++;
        }
        if (this.totalStepCount < 0) {
            throw new Error('Forbidden value (' + this.totalStepCount + ') on element totalStepCount.');
        }
        param1.writeByte(this.totalStepCount);
        if (this.checkPointCurrent < 0) {
            throw new Error('Forbidden value (' + this.checkPointCurrent + ') on element checkPointCurrent.');
        }
        param1.writeVarInt(this.checkPointCurrent);
        if (this.checkPointTotal < 0) {
            throw new Error('Forbidden value (' + this.checkPointTotal + ') on element checkPointTotal.');
        }
        param1.writeVarInt(this.checkPointTotal);
        param1.writeInt(this.availableRetryCount);
        param1.writeShort(this.flags.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.flags.length) {
            (this.flags[_loc3_]).serializeAs_TreasureHuntFlag(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntMessage(param1);
    }

    public deserializeAs_TreasureHuntMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: TreasureHuntStep = null;
        var _loc8_: TreasureHuntFlag = null;
        this.questType = param1.readByte();
        if (this.questType < 0) {
            throw new Error('Forbidden value (' + this.questType + ') on element of TreasureHuntMessage.questType.');
        }
        this.startMapId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <TreasureHuntStep>ProtocolTypeManager.getInstance(TreasureHuntStep, _loc6_);
            _loc7_.deserialize(param1);
            this.knownStepsList.push(_loc7_);
            _loc3_++;
        }
        this.totalStepCount = param1.readByte();
        if (this.totalStepCount < 0) {
            throw new Error('Forbidden value (' + this.totalStepCount + ') on element of TreasureHuntMessage.totalStepCount.');
        }
        this.checkPointCurrent = param1.readVarUhInt();
        if (this.checkPointCurrent < 0) {
            throw new Error('Forbidden value (' + this.checkPointCurrent + ') on element of TreasureHuntMessage.checkPointCurrent.');
        }
        this.checkPointTotal = param1.readVarUhInt();
        if (this.checkPointTotal < 0) {
            throw new Error('Forbidden value (' + this.checkPointTotal + ') on element of TreasureHuntMessage.checkPointTotal.');
        }
        this.availableRetryCount = param1.readInt();
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = new TreasureHuntFlag();
            _loc8_.deserialize(param1);
            this.flags.push(_loc8_);
            _loc5_++;
        }

    }
}

export = TreasureHuntMessage;
