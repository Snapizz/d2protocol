/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeRequestedMessage = require('./exchange-requested-message');

class ExchangeRequestedTradeMessage extends ExchangeRequestedMessage {
    public static ID: number = 5523;

    source: number;
    target: number;

    constructor() {
        this.source = 0;
        this.target = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeRequestedTradeMessage.ID;
    }

    public reset(): void {
        this.source = 0;
        this.target = 0;
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
        this.serializeAs_ExchangeRequestedTradeMessage(param1);
    }

    public serializeAs_ExchangeRequestedTradeMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeRequestedMessage(param1);
        if (this.source < 0) {
            throw new Error('Forbidden value (' + this.source + ') on element source.');
        }
        param1.writeVarInt(this.source);
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element target.');
        }
        param1.writeVarInt(this.target);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeRequestedTradeMessage(param1);
    }

    public deserializeAs_ExchangeRequestedTradeMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.source = param1.readVarUhInt();
        if (this.source < 0) {
            throw new Error('Forbidden value (' + this.source + ') on element of ExchangeRequestedTradeMessage.source.');
        }
        this.target = param1.readVarUhInt();
        if (this.target < 0) {
            throw new Error('Forbidden value (' + this.target + ') on element of ExchangeRequestedTradeMessage.target.');
        }

    }
}

export = ExchangeRequestedTradeMessage;
