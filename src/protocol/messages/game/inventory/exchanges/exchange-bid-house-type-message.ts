/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHouseTypeMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5803;

    type: number;

    constructor() {
        this.type = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseTypeMessage.ID;
    }

    public reset(): void {
        this.type = 0;
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
        this.serializeAs_ExchangeBidHouseTypeMessage(param1);
    }

    public serializeAs_ExchangeBidHouseTypeMessage(param1: ICustomDataOutput): void {
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element type.');
        }
        param1.writeVarInt(this.type);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseTypeMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseTypeMessage(param1: ICustomDataInput): void {
        this.type = param1.readVarUhInt();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of ExchangeBidHouseTypeMessage.type.');
        }

    }
}

export = ExchangeBidHouseTypeMessage;
