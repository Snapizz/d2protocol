/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class ExchangeReadyMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5511;

    ready: boolean;
    step: number;

    constructor() {
        this.ready = false;
        this.step = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeReadyMessage.ID;
    }

    public reset(): void {
        this.ready = false;
        this.step = 0;
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
        this.serializeAs_ExchangeReadyMessage(param1);
    }

    public serializeAs_ExchangeReadyMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.ready);
        if (this.step < 0) {
            throw new Error('Forbidden value (' + this.step + ') on element step.');
        }
        param1.writeVarShort(this.step);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeReadyMessage(param1);
    }

    public deserializeAs_ExchangeReadyMessage(param1: ICustomDataInput): void {
        this.ready = param1.readBoolean();
        this.step = param1.readVarUhShort();
        if (this.step < 0) {
            throw new Error('Forbidden value (' + this.step + ') on element of ExchangeReadyMessage.step.');
        }

    }
}

export = ExchangeReadyMessage;
