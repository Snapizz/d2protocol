/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import PaddockItem = require('../../../../types/game/paddock/paddock-item');

class GameDataPaddockObjectAddMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5990;

    paddockItemDescription: PaddockItem;

    constructor() {
        this.paddockItemDescription = new PaddockItem();
        super();
    }

    public getMessageId(): number {
        return GameDataPaddockObjectAddMessage.ID;
    }

    public reset(): void {
        this.paddockItemDescription = new PaddockItem();
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
        this.serializeAs_GameDataPaddockObjectAddMessage(param1);
    }

    public serializeAs_GameDataPaddockObjectAddMessage(param1: ICustomDataOutput): void {
        this.paddockItemDescription.serializeAs_PaddockItem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameDataPaddockObjectAddMessage(param1);
    }

    public deserializeAs_GameDataPaddockObjectAddMessage(param1: ICustomDataInput): void {
        this.paddockItemDescription = new PaddockItem();
        this.paddockItemDescription.deserialize(param1);

    }
}

export = GameDataPaddockObjectAddMessage;
