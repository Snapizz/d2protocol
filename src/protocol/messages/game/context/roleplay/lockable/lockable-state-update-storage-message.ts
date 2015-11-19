/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import LockableStateUpdateAbstractMessage = require('./lockable-state-update-abstract-message');

class LockableStateUpdateStorageMessage extends LockableStateUpdateAbstractMessage {
    public static ID: number = 5669;

    mapId: number;
    elementId: number;

    constructor() {
        this.mapId = 0;
        this.elementId = 0;
        super();
    }

    public getMessageId(): number {
        return LockableStateUpdateStorageMessage.ID;
    }

    public reset(): void {
        this.mapId = 0;
        this.elementId = 0;
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
        this.serializeAs_LockableStateUpdateStorageMessage(param1);
    }

    public serializeAs_LockableStateUpdateStorageMessage(param1: ICustomDataOutput): void {
        super.serializeAs_LockableStateUpdateAbstractMessage(param1);
        param1.writeInt(this.mapId);
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
        }
        param1.writeVarInt(this.elementId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LockableStateUpdateStorageMessage(param1);
    }

    public deserializeAs_LockableStateUpdateStorageMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.mapId = param1.readInt();
        this.elementId = param1.readVarUhInt();
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element of LockableStateUpdateStorageMessage.elementId.');
        }

    }
}

export = LockableStateUpdateStorageMessage;
