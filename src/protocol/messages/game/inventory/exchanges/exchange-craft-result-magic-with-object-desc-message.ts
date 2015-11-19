/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeCraftResultWithObjectDescMessage = require('./exchange-craft-result-with-object-desc-message');
import ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container');

class ExchangeCraftResultMagicWithObjectDescMessage extends ExchangeCraftResultWithObjectDescMessage {
    public static ID: number = 6188;

    magicPoolStatus: number;

    constructor() {
        this.magicPoolStatus = 0;
        super();
    }

    public getMessageId(): number {
        return ExchangeCraftResultMagicWithObjectDescMessage.ID;
    }

    public reset(): void {
        this.magicPoolStatus = 0;
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
        this.serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1);
    }

    public serializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
        param1.writeByte(this.magicPoolStatus);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1);
    }

    public deserializeAs_ExchangeCraftResultMagicWithObjectDescMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.magicPoolStatus = param1.readByte();

    }
}

export = ExchangeCraftResultMagicWithObjectDescMessage;
