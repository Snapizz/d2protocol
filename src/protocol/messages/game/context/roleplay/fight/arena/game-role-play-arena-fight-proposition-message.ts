/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');

class GameRolePlayArenaFightPropositionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6276;

    fightId: number;
    alliesId: number[];
    duration: number;

    constructor() {
        this.fightId = 0;
        this.alliesId = [];
        this.duration = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayArenaFightPropositionMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.alliesId = [];
        this.duration = 0;
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
        this.serializeAs_GameRolePlayArenaFightPropositionMessage(param1);
    }

    public serializeAs_GameRolePlayArenaFightPropositionMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        param1.writeShort(this.alliesId.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.alliesId.length) {
            param1.writeInt(this.alliesId[_loc2_]);
            _loc2_++;
        }
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element duration.');
        }
        param1.writeVarShort(this.duration);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayArenaFightPropositionMessage(param1);
    }

    public deserializeAs_GameRolePlayArenaFightPropositionMessage(param1: ICustomDataInput): void {
        var _loc4_: any = 0;
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameRolePlayArenaFightPropositionMessage.fightId.');
        }
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readInt();
            this.alliesId.push(_loc4_);
            _loc3_++;
        }
        this.duration = param1.readVarUhShort();
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element of GameRolePlayArenaFightPropositionMessage.duration.');
        }

    }
}

export = GameRolePlayArenaFightPropositionMessage;
