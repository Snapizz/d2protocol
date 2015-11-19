/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHousePriceMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5805;

    genId: number;

    constructor() {
        this.genId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHousePriceMessage.ID;
    }

    public reset(): void {
        this.genId = 0;
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
        this.serializeAs_ExchangeBidHousePriceMessage(param1);
    }

    public serializeAs_ExchangeBidHousePriceMessage(param1: ICustomDataOutput): void {
        if (this.genId < 0) {
            throw new Error('Forbidden value (' + this.genId + ') on element genId.');
        }
        param1.writeVarShort(this.genId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHousePriceMessage(param1);
    }

    public deserializeAs_ExchangeBidHousePriceMessage(param1: ICustomDataInput): void {
        this.genId = param1.readVarUhShort();
        if (this.genId < 0) {
            throw new Error('Forbidden value (' + this.genId + ') on element of ExchangeBidHousePriceMessage.genId.');
        }

    }
}

export = ExchangeBidHousePriceMessage;
