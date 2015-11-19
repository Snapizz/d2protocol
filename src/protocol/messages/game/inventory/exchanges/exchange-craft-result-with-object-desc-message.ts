/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ExchangeCraftResultMessage = require('./exchange-craft-result-message');
import ObjectItemNotInContainer = require('../../../../types/game/data/items/object-item-not-in-container');

class ExchangeCraftResultWithObjectDescMessage extends ExchangeCraftResultMessage {
    public static ID: number = 5999;

    objectInfo: ObjectItemNotInContainer;

    constructor() {
        this.objectInfo = new ObjectItemNotInContainer();
        super();
    }

    public getMessageId(): number {
        return ExchangeCraftResultWithObjectDescMessage.ID;
    }

    public reset(): void {
        this.objectInfo = new ObjectItemNotInContainer();
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
        this.serializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
    }

    public serializeAs_ExchangeCraftResultWithObjectDescMessage(param1: ICustomDataOutput): void {
        super.serializeAs_ExchangeCraftResultMessage(param1);
        this.objectInfo.serializeAs_ObjectItemNotInContainer(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ExchangeCraftResultWithObjectDescMessage(param1);
    }

    public deserializeAs_ExchangeCraftResultWithObjectDescMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.objectInfo = new ObjectItemNotInContainer();
        this.objectInfo.deserialize(param1);

    }
}

export = ExchangeCraftResultWithObjectDescMessage;
