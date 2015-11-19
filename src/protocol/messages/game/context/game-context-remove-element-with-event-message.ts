/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GameContextRemoveElementMessage = require('./game-context-remove-element-message');

class GameContextRemoveElementWithEventMessage extends GameContextRemoveElementMessage {
    public static ID: number = 6412;

    elementEventId: number;

    constructor() {
        this.elementEventId = 0;
        super();
    }

    public getMessageId(): number {
        return GameContextRemoveElementWithEventMessage.ID;
    }

    public reset(): void {
        this.elementEventId = 0;
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
        this.serializeAs_GameContextRemoveElementWithEventMessage(param1);
    }

    public serializeAs_GameContextRemoveElementWithEventMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameContextRemoveElementMessage(param1);
        if (this.elementEventId < 0) {
            throw new Error('Forbidden value (' + this.elementEventId + ') on element elementEventId.');
        }
        param1.writeByte(this.elementEventId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameContextRemoveElementWithEventMessage(param1);
    }

    public deserializeAs_GameContextRemoveElementWithEventMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.elementEventId = param1.readByte();
        if (this.elementEventId < 0) {
            throw new Error('Forbidden value (' + this.elementEventId + ') on element of GameContextRemoveElementWithEventMessage.elementEventId.');
        }

    }
}

export = GameContextRemoveElementWithEventMessage;
