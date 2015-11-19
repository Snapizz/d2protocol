/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeObjectMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5515;

    remote: boolean;

    constructor() {
        this.remote = false;
        super();
    }

    public getMessageId(): number {
        return ExchangeObjectMessage.ID;
    }

    public reset(): void {
        this.remote = false;
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
        this.serializeAs_ExchangeObjectMessage(param1);
    }

    public serializeAs_ExchangeObjectMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.remote);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectMessage(param1);
    }

    public deserializeAs_ExchangeObjectMessage(param1: ICustomDataInput): void {
        this.remote = param1.readBoolean();

    }
}

export = ExchangeObjectMessage;
