/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeCraftResultMessage = require('./exchange-craft-result-message');

class ExchangeCraftResultWithObjectIdMessage extends ExchangeCraftResultMessage {
    public static ID: number = 6000;

    objectGenericId: number;

    constructor() {
        this.objectGenericId = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeCraftResultWithObjectIdMessage.ID;
    }

    public reset(): void {
        this.objectGenericId = 0;
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
        this.serializeAs_ExchangeCraftResultWithObjectIdMessage(param1);
    }

    public serializeAs_ExchangeCraftResultWithObjectIdMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeCraftResultMessage(param1);
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element objectGenericId.');
        }
        param1.writeVarShort(this.objectGenericId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeCraftResultWithObjectIdMessage(param1);
    }

    public deserializeAs_ExchangeCraftResultWithObjectIdMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectGenericId = param1.readVarUhShort();
        if (this.objectGenericId < 0) {
            throw new Error('Forbidden value (' + this.objectGenericId + ') on element of ExchangeCraftResultWithObjectIdMessage.objectGenericId.');
        }

    }
}

export = ExchangeCraftResultWithObjectIdMessage;
