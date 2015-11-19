/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import InteractiveElement = require('../../../types/game/interactive/interactive-element');

class InteractiveElementUpdatedMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5708;

    interactiveElement: InteractiveElement;

    constructor() {
        this.interactiveElement = new InteractiveElement();
        super();
    }

    public getMessageId(): number {
        return InteractiveElementUpdatedMessage.ID;
    }

    public reset(): void {
        this.interactiveElement = new InteractiveElement();
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
        this.serializeAs_InteractiveElementUpdatedMessage(param1);
    }

    public serializeAs_InteractiveElementUpdatedMessage(param1: ICustomDataOutput): void {
        this.interactiveElement.serializeAs_InteractiveElement(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_InteractiveElementUpdatedMessage(param1);
    }

    public deserializeAs_InteractiveElementUpdatedMessage(param1: ICustomDataInput): void {
        this.interactiveElement = new InteractiveElement();
        this.interactiveElement.deserialize(param1);

    }
}

export = InteractiveElementUpdatedMessage;
