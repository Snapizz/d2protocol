/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeBidHouseInListRemovedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5950;

    itemUID: number;

    constructor() {
        this.itemUID = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeBidHouseInListRemovedMessage.ID;
    }

    public reset(): void {
        this.itemUID = 0;
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
        this.serializeAs_ExchangeBidHouseInListRemovedMessage(param1);
    }

    public serializeAs_ExchangeBidHouseInListRemovedMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.itemUID);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeBidHouseInListRemovedMessage(param1);
    }

    public deserializeAs_ExchangeBidHouseInListRemovedMessage(param1: ICustomDataInput): void {
        this.itemUID = param1.readInt();

    }
}

export = ExchangeBidHouseInListRemovedMessage;
