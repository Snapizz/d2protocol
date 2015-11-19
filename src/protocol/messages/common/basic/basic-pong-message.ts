/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class BasicPongMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 183;

    quiet: boolean;

    constructor() {
        this.quiet = false;
        super();
    }

    public getMessageId(): number {
        return BasicPongMessage.ID;
    }

    public reset(): void {
        this.quiet = false;
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
        this.serializeAs_BasicPongMessage(param1);
    }

    public serializeAs_BasicPongMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.quiet);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_BasicPongMessage(param1);
    }

    public deserializeAs_BasicPongMessage(param1: ICustomDataInput): void {
        this.quiet = param1.readBoolean();

    }
}

export = BasicPongMessage;
