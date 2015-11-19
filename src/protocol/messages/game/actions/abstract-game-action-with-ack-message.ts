/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AbstractGameActionMessage = require('./abstract-game-action-message');

class AbstractGameActionWithAckMessage extends AbstractGameActionMessage {
    public static ID: number = 1001;

    waitAckId: number;

    constructor() {
        this.waitAckId = 0;
        super();
    }

    public getMessageId(): number {
        return AbstractGameActionWithAckMessage.ID;
    }

    public reset(): void {
        this.waitAckId = 0;
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
        this.serializeAs_AbstractGameActionWithAckMessage(param1);
    }

    public serializeAs_AbstractGameActionWithAckMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractGameActionMessage(param1);
        param1.writeShort(this.waitAckId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractGameActionWithAckMessage(param1);
    }

    public deserializeAs_AbstractGameActionWithAckMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.waitAckId = param1.readShort();

    }
}

export = AbstractGameActionWithAckMessage;
