/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class HouseKickIndoorMerchantRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5661;

    cellId: number;

    constructor() {
        this.cellId = 0;
        super();
    }

    public getMessageId(): number {
        return HouseKickIndoorMerchantRequestMessage.ID;
    }

    public reset(): void {
        this.cellId = 0;
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
        this.serializeAs_HouseKickIndoorMerchantRequestMessage(param1);
    }

    public serializeAs_HouseKickIndoorMerchantRequestMessage(param1: ICustomDataOutput): void {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseKickIndoorMerchantRequestMessage(param1);
    }

    public deserializeAs_HouseKickIndoorMerchantRequestMessage(param1: ICustomDataInput): void {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of HouseKickIndoorMerchantRequestMessage.cellId.');
        }

    }
}

export = HouseKickIndoorMerchantRequestMessage;
