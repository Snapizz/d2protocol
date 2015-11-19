/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeObjectMessage = require('../exchanges/exchange-object-message');

class ExchangeObjectRemovedMessage extends ExchangeObjectMessage {
    public static ID: number = 5517;

    objectUID: number;

    constructor() {
        this.objectUID = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeObjectRemovedMessage.ID;
    }

    public reset(): void {
        this.objectUID = 0;
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
        this.serializeAs_ExchangeObjectRemovedMessage(param1);
    }

    public serializeAs_ExchangeObjectRemovedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeObjectMessage(param1);
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectRemovedMessage(param1);
    }

    public deserializeAs_ExchangeObjectRemovedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ExchangeObjectRemovedMessage.objectUID.');
        }

    }
}

export = ExchangeObjectRemovedMessage;
