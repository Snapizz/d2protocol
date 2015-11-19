/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AbstractGameActionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1000;

    actionId: number;
    sourceId: number;

    constructor() {
        this.actionId = 0;
        this.sourceId = 0;
        super();
    }

    public getMessageId(): number {
        return AbstractGameActionMessage.ID;
    }

    public reset(): void {
        this.actionId = 0;
        this.sourceId = 0;
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
        this.serializeAs_AbstractGameActionMessage(param1);
    }

    public serializeAs_AbstractGameActionMessage(param1: ICustomDataOutput): void {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.sourceId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractGameActionMessage(param1);
    }

    public deserializeAs_AbstractGameActionMessage(param1: ICustomDataInput): void {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of AbstractGameActionMessage.actionId.');
        }
        this.sourceId = param1.readInt();

    }
}

export = AbstractGameActionMessage;
