/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlayAggressionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6073;

    attackerId: number;
    defenderId: number;

    constructor() {
        this.attackerId = 0;
        this.defenderId = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayAggressionMessage.ID;
    }

    public reset(): void {
        this.attackerId = 0;
        this.defenderId = 0;
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
        this.serializeAs_GameRolePlayAggressionMessage(param1);
    }

    public serializeAs_GameRolePlayAggressionMessage(param1: ICustomDataOutput): void {
        if (this.attackerId < 0) {
            throw new Error('Forbidden value (' + this.attackerId + ') on element attackerId.');
        }
        param1.writeVarInt(this.attackerId);
        if (this.defenderId < 0) {
            throw new Error('Forbidden value (' + this.defenderId + ') on element defenderId.');
        }
        param1.writeVarInt(this.defenderId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayAggressionMessage(param1);
    }

    public deserializeAs_GameRolePlayAggressionMessage(param1: ICustomDataInput): void {
        this.attackerId = param1.readVarUhInt();
        if (this.attackerId < 0) {
            throw new Error('Forbidden value (' + this.attackerId + ') on element of GameRolePlayAggressionMessage.attackerId.');
        }
        this.defenderId = param1.readVarUhInt();
        if (this.defenderId < 0) {
            throw new Error('Forbidden value (' + this.defenderId + ') on element of GameRolePlayAggressionMessage.defenderId.');
        }

    }
}

export = GameRolePlayAggressionMessage;
