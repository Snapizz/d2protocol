/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GameActionAcknowledgementMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 957;

    valid: boolean;
    actionId: number;

    constructor() {
        this.valid = false;
        this.actionId = 0;
        super();
    }

    public getMessageId(): number {
        return GameActionAcknowledgementMessage.ID;
    }

    public reset(): void {
        this.valid = false;
        this.actionId = 0;
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
        this.serializeAs_GameActionAcknowledgementMessage(param1);
    }

    public serializeAs_GameActionAcknowledgementMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.valid);
        param1.writeByte(this.actionId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameActionAcknowledgementMessage(param1);
    }

    public deserializeAs_GameActionAcknowledgementMessage(param1: ICustomDataInput): void {
        this.valid = param1.readBoolean();
        this.actionId = param1.readByte();

    }
}

export = GameActionAcknowledgementMessage;
