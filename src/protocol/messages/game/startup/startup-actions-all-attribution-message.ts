/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class StartupActionsAllAttributionMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6537;

    characterId: number;

    constructor() {
        this.characterId = 0;
        super();
    }

    public getMessageId(): number {
        return StartupActionsAllAttributionMessage.ID;
    }

    public reset(): void {
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
        this.serializeAs_StartupActionsAllAttributionMessage(param1);
    }

    public serializeAs_StartupActionsAllAttributionMessage(param1: ICustomDataOutput): void {
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeInt(this.characterId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StartupActionsAllAttributionMessage(param1);
    }

    public deserializeAs_StartupActionsAllAttributionMessage(param1: ICustomDataInput): void {
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of StartupActionsAllAttributionMessage.characterId.');
        }

    }
}

export = StartupActionsAllAttributionMessage;
