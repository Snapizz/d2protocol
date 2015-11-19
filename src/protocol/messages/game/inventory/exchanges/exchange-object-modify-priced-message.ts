/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeObjectMovePricedMessage = require('./exchange-object-move-priced-message');

class ExchangeObjectModifyPricedMessage extends ExchangeObjectMovePricedMessage {
    public static ID: number = 6238;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return ExchangeObjectModifyPricedMessage.ID;
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
        this.serializeAs_ExchangeObjectModifyPricedMessage(param1);
    }

    public serializeAs_ExchangeObjectModifyPricedMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeObjectMovePricedMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeObjectModifyPricedMessage(param1);
    }

    public deserializeAs_ExchangeObjectModifyPricedMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = ExchangeObjectModifyPricedMessage;
