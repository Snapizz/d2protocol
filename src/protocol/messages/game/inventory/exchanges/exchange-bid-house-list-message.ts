/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHouseListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5807;

    id: number;

    constructor() {
        this.id = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseListMessage.ID;
    }

    public reset(): void {
        this.id = 0;
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
        this.serializeAs_ExchangeBidHouseListMessage(param1);
    }

    public serializeAs_ExchangeBidHouseListMessage(param1: ICustomDataOutput): void {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseListMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseListMessage(param1: ICustomDataInput): void {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of ExchangeBidHouseListMessage.id.');
        }

    }
}

export = ExchangeBidHouseListMessage;
