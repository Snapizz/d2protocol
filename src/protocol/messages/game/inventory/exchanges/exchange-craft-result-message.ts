/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeCraftResultMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5790;

    craftResult: number;

    constructor() {
        this.craftResult = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeCraftResultMessage.ID;
    }

    public reset(): void {
        this.craftResult = 0;
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
        this.serializeAs_ExchangeCraftResultMessage(param1);
    }

    public serializeAs_ExchangeCraftResultMessage(param1: ICustomDataOutput): void {
        param1.writeByte(this.craftResult);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeCraftResultMessage(param1);
    }

    public deserializeAs_ExchangeCraftResultMessage(param1: ICustomDataInput): void {
        this.craftResult = param1.readByte();
        if (this.craftResult < 0) {
            throw new Error('Forbidden value (' + this.craftResult + ') on element of ExchangeCraftResultMessage.craftResult.');
        }

    }
}

export = ExchangeCraftResultMessage;
