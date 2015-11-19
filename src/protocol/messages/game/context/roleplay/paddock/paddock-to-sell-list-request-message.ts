/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class PaddockToSellListRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6141;

    pageIndex: number;

    constructor() {
        this.pageIndex = 0;
        super();
    }

    public getMessageId(): number {
        return PaddockToSellListRequestMessage.ID;
    }

    public reset(): void {
        this.pageIndex = 0;
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
        this.serializeAs_PaddockToSellListRequestMessage(param1);
    }

    public serializeAs_PaddockToSellListRequestMessage(param1: ICustomDataOutput): void {
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element pageIndex.');
        }
        param1.writeVarShort(this.pageIndex);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockToSellListRequestMessage(param1);
    }

    public deserializeAs_PaddockToSellListRequestMessage(param1: ICustomDataInput): void {
        this.pageIndex = param1.readVarUhShort();
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element of PaddockToSellListRequestMessage.pageIndex.');
        }

    }
}

export = PaddockToSellListRequestMessage;
