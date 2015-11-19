/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class SetEnableAVARequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6443;

    enable: boolean;

    constructor() {
        this.enable = false;
        super();
    }

    public getMessageId(): number {
        return SetEnableAVARequestMessage.ID;
    }

    public reset(): void {
        this.enable = false;
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
        this.serializeAs_SetEnableAVARequestMessage(param1);
    }

    public serializeAs_SetEnableAVARequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.enable);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SetEnableAVARequestMessage(param1);
    }

    public deserializeAs_SetEnableAVARequestMessage(param1: ICustomDataInput): void {
        this.enable = param1.readBoolean();

    }
}

export = SetEnableAVARequestMessage;
