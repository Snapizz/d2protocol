/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectUseMessage = require('./object-use-message');

class ObjectUseMultipleMessage extends ObjectUseMessage {
    public static ID: number = 6234;

    quantity: number;

    constructor() {
        this.quantity = 0;
        super();
    }

    public getMessageId(): number {
        return ObjectUseMultipleMessage.ID;
    }

    public reset(): void {
        this.quantity = 0;
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
        this.serializeAs_ObjectUseMultipleMessage(param1);
    }

    public serializeAs_ObjectUseMultipleMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectUseMessage(param1);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectUseMultipleMessage(param1);
    }

    public deserializeAs_ObjectUseMultipleMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ObjectUseMultipleMessage.quantity.');
        }

    }
}

export = ObjectUseMultipleMessage;
