/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GoldItem = require('../../../../types/game/data/items/gold-item');

class GoldAddedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6030;

    gold: GoldItem;

    constructor() {
        this.gold = new GoldItem();
        super();
    }

    public getMessageId(): number {
        return GoldAddedMessage.ID;
    }

    public reset(): void {
        this.gold = new GoldItem();
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
        this.serializeAs_GoldAddedMessage(param1);
    }

    public serializeAs_GoldAddedMessage(param1: ICustomDataOutput): void {
        this.gold.serializeAs_GoldItem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GoldAddedMessage(param1);
    }

    public deserializeAs_GoldAddedMessage(param1: ICustomDataInput): void {
        this.gold = new GoldItem();
        this.gold.deserialize(param1);

    }
}

export = GoldAddedMessage;
