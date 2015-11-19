/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityLook = require('../../../types/game/look/entity-look');

class AccessoryPreviewMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6517;

    look: EntityLook;

    constructor() {
        this.look = new EntityLook();
        super();
    }

    public getMessageId(): number {
        return AccessoryPreviewMessage.ID;
    }

    public reset(): void {
        this.look = new EntityLook();
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
        this.serializeAs_AccessoryPreviewMessage(param1);
    }

    public serializeAs_AccessoryPreviewMessage(param1: ICustomDataOutput): void {
        this.look.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AccessoryPreviewMessage(param1);
    }

    public deserializeAs_AccessoryPreviewMessage(param1: ICustomDataInput): void {
        this.look = new EntityLook();
        this.look.deserialize(param1);

    }
}

export = AccessoryPreviewMessage;
