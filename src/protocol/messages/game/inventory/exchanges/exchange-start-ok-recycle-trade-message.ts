/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeStartOkRecycleTradeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6600;

    percentToPrism: number;
    percentToPlayer: number;

    constructor() {
        this.percentToPrism = 0;
        this.percentToPlayer = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeStartOkRecycleTradeMessage.ID;
    }

    public reset(): void {
        this.percentToPrism = 0;
        this.percentToPlayer = 0;
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
        this.serializeAs_ExchangeStartOkRecycleTradeMessage(param1);
    }

    public serializeAs_ExchangeStartOkRecycleTradeMessage(param1: ICustomDataOutput): void {
        if (this.percentToPrism < 0) {
            throw new Error('Forbidden value (' + this.percentToPrism + ') on element percentToPrism.');
        }
        param1.writeShort(this.percentToPrism);
        if (this.percentToPlayer < 0) {
            throw new Error('Forbidden value (' + this.percentToPlayer + ') on element percentToPlayer.');
        }
        param1.writeShort(this.percentToPlayer);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeStartOkRecycleTradeMessage(param1);
    }

    public deserializeAs_ExchangeStartOkRecycleTradeMessage(param1: ICustomDataInput): void {
        this.percentToPrism = param1.readShort();
        if (this.percentToPrism < 0) {
            throw new Error('Forbidden value (' + this.percentToPrism + ') on element of ExchangeStartOkRecycleTradeMessage.percentToPrism.');
        }
        this.percentToPlayer = param1.readShort();
        if (this.percentToPlayer < 0) {
            throw new Error('Forbidden value (' + this.percentToPlayer + ') on element of ExchangeStartOkRecycleTradeMessage.percentToPlayer.');
        }

    }
}

export = ExchangeStartOkRecycleTradeMessage;
