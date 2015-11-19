/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class GameRolePlayDelayedActionFinishedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6150;

    delayedCharacterId: number;
    delayTypeId: number;

    constructor() {
        this.delayedCharacterId = 0;
        this.delayTypeId = 0;
        super();
    }

    public getMessageId(): number {
        return GameRolePlayDelayedActionFinishedMessage.ID;
    }

    public reset(): void {
        this.delayedCharacterId = 0;
        this.delayTypeId = 0;
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
        this.serializeAs_GameRolePlayDelayedActionFinishedMessage(param1);
    }

    public serializeAs_GameRolePlayDelayedActionFinishedMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.delayedCharacterId);
        param1.writeByte(this.delayTypeId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameRolePlayDelayedActionFinishedMessage(param1);
    }

    public deserializeAs_GameRolePlayDelayedActionFinishedMessage(param1: ICustomDataInput): void {
        this.delayedCharacterId = param1.readInt();
        this.delayTypeId = param1.readByte();
        if (this.delayTypeId < 0) {
            throw new Error('Forbidden value (' + this.delayTypeId + ') on element of GameRolePlayDelayedActionFinishedMessage.delayTypeId.');
        }

    }
}

export = GameRolePlayDelayedActionFinishedMessage;
