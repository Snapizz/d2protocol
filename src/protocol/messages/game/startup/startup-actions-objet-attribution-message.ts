/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class StartupActionsObjetAttributionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1303;

    actionId: number;
    characterId: number;

    constructor() {
        this.actionId = 0;
        this.characterId = 0;
        super();
    }

    public getMessageId(): number {
        return StartupActionsObjetAttributionMessage.ID;
    }

    public reset(): void {
        this.actionId = 0;
        this.characterId = 0;
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
        this.serializeAs_StartupActionsObjetAttributionMessage(param1);
    }

    public serializeAs_StartupActionsObjetAttributionMessage(param1: ICustomDataOutput): void {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeInt(this.actionId);
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeInt(this.characterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StartupActionsObjetAttributionMessage(param1);
    }

    public deserializeAs_StartupActionsObjetAttributionMessage(param1: ICustomDataInput): void {
        this.actionId = param1.readInt();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of StartupActionsObjetAttributionMessage.actionId.');
        }
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of StartupActionsObjetAttributionMessage.characterId.');
        }

    }
}

export = StartupActionsObjetAttributionMessage;
