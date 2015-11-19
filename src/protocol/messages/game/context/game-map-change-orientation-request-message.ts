/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class GameMapChangeOrientationRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 945;

    direction: number;

    constructor() {
        this.direction = 1;
        super();
    }

    public getMessageId(): number {
        return GameMapChangeOrientationRequestMessage.ID;
    }

    public reset(): void {
        this.direction = 1;
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
        this.serializeAs_GameMapChangeOrientationRequestMessage(param1);
    }

    public serializeAs_GameMapChangeOrientationRequestMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.direction);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameMapChangeOrientationRequestMessage(param1);
    }

    public deserializeAs_GameMapChangeOrientationRequestMessage(param1: ICustomDataInput): void {
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of GameMapChangeOrientationRequestMessage.direction.');
        }

    }
}

export = GameMapChangeOrientationRequestMessage;
