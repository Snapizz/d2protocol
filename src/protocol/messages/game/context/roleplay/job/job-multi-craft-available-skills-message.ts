/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import JobAllowMultiCraftRequestMessage = require('./job-allow-multi-craft-request-message');

class JobMultiCraftAvailableSkillsMessage extends JobAllowMultiCraftRequestMessage {
    public static ID: number = 5747;

    playerId: number;
    skills: number[];

    constructor() {
        this.playerId = 0;
        this.skills = [];
        super();
    }

    public getMessageId(): number {
        return JobMultiCraftAvailableSkillsMessage.ID;
    }

    public reset(): void {
        this.playerId = 0;
        this.skills = [];
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
        this.serializeAs_JobMultiCraftAvailableSkillsMessage(param1);
    }

    public serializeAs_JobMultiCraftAvailableSkillsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_JobAllowMultiCraftRequestMessage(param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeShort(this.skills.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.skills.length) {
            if (this.skills[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.skills[_loc2_] + ') on element 2 (starting at 1) of skills.');
            }
            param1.writeVarShort(this.skills[_loc2_]);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobMultiCraftAvailableSkillsMessage(param1);
    }

    public deserializeAs_JobMultiCraftAvailableSkillsMessage(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        super.deserialize(param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of JobMultiCraftAvailableSkillsMessage.playerId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of skills.');
            }
            this.skills.push(_loc4_);
            _loc3_++;
        }

    }
}

export = JobMultiCraftAvailableSkillsMessage;
