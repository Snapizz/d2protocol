/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GameContextCreateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 200;

    context: number;

    constructor() {
        this.context = 1;
        super();
    }

    public getMessageId(): number {
        return GameContextCreateMessage.ID;
    }

    public reset(): void {
        this.context = 1;
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
        this.serializeAs_GameContextCreateMessage(param1);
    }

    public serializeAs_GameContextCreateMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.context);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextCreateMessage(param1);
    }

    public deserializeAs_GameContextCreateMessage(param1: ICustomDataInput): void {
        this.context = param1.readByte();
        if (this.context < 0) {
            throw new Error('Forbidden value (' + this.context + ') on element of GameContextCreateMessage.context.');
        }

    }
}

export = GameContextCreateMessage;
