/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import ObjectItem = require('../../../../types/game/data/items/object-item');

class MimicryObjectPreviewMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6458;

    result: ObjectItem;

    constructor() {
        this.result = new ObjectItem();
        super();
    }

    public getMessageId(): number {
        return MimicryObjectPreviewMessage.ID;
    }

    public reset(): void {
        this.result = new ObjectItem();
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
        this.serializeAs_MimicryObjectPreviewMessage(param1);
    }

    public serializeAs_MimicryObjectPreviewMessage(param1: ICustomDataOutput): void {
        this.result.serializeAs_ObjectItem(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MimicryObjectPreviewMessage(param1);
    }

    public deserializeAs_MimicryObjectPreviewMessage(param1: ICustomDataInput): void {
        this.result = new ObjectItem();
        this.result.deserialize(param1);

    }
}

export = MimicryObjectPreviewMessage;
