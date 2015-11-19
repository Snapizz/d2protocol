/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBuyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5774;

    objectToBuyId: number;
    quantity: number;

    constructor() {
        this.objectToBuyId = 0;
        this.quantity = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBuyMessage.ID;
    }

    public reset(): void {
        this.objectToBuyId = 0;
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
        this.serializeAs_ExchangeBuyMessage(param1);
    }

    public serializeAs_ExchangeBuyMessage(param1: ICustomDataOutput): void {
        if (this.objectToBuyId < 0) {
            throw new Error('Forbidden value (' + this.objectToBuyId + ') on element objectToBuyId.');
        }
        param1.writeVarInt(this.objectToBuyId);
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element quantity.');
        }
        param1.writeVarInt(this.quantity);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBuyMessage(param1);
    }

    public deserializeAs_ExchangeBuyMessage(param1: ICustomDataInput): void {
        this.objectToBuyId = param1.readVarUhInt();
        if (this.objectToBuyId < 0) {
            throw new Error('Forbidden value (' + this.objectToBuyId + ') on element of ExchangeBuyMessage.objectToBuyId.');
        }
        this.quantity = param1.readVarUhInt();
        if (this.quantity < 0) {
            throw new Error('Forbidden value (' + this.quantity + ') on element of ExchangeBuyMessage.quantity.');
        }

    }
}

export = ExchangeBuyMessage;
