/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeObjectTransfertAllToInvMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6032;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return ExchangeObjectTransfertAllToInvMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_ExchangeObjectTransfertAllToInvMessage(param1);
    }

    public serializeAs_ExchangeObjectTransfertAllToInvMessage(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectTransfertAllToInvMessage(param1);
    }

    public deserializeAs_ExchangeObjectTransfertAllToInvMessage(param1: ICustomDataInput): void {

    }
}

export = ExchangeObjectTransfertAllToInvMessage;
