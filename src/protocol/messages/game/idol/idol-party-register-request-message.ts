/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class IdolPartyRegisterRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6582;

    register: boolean;

    constructor() {
        this.register = false;
        super();
    }

    public getMessageId(): number {
        return IdolPartyRegisterRequestMessage.ID;
    }

    public reset(): void {
        this.register = false;
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
        this.serializeAs_IdolPartyRegisterRequestMessage(param1);
    }

    public serializeAs_IdolPartyRegisterRequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.register);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IdolPartyRegisterRequestMessage(param1);
    }

    public deserializeAs_IdolPartyRegisterRequestMessage(param1: ICustomDataInput): void {
        this.register = param1.readBoolean();

    }
}

export = IdolPartyRegisterRequestMessage;
