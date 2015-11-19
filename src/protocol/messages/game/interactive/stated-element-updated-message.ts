/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import StatedElement = require('../../../types/game/interactive/stated-element');

class StatedElementUpdatedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5709;

    statedElement: StatedElement;

    constructor() {
        this.statedElement = new StatedElement();
        super();
    }

    public getMessageId(): number {
        return StatedElementUpdatedMessage.ID;
    }

    public reset(): void {
        this.statedElement = new StatedElement();
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
        this.serializeAs_StatedElementUpdatedMessage(param1);
    }

    public serializeAs_StatedElementUpdatedMessage(param1: ICustomDataOutput): void {
        this.statedElement.serializeAs_StatedElement(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatedElementUpdatedMessage(param1);
    }

    public deserializeAs_StatedElementUpdatedMessage(param1: ICustomDataInput): void {
        this.statedElement = new StatedElement();
        this.statedElement.deserialize(param1);

    }
}

export = StatedElementUpdatedMessage;
