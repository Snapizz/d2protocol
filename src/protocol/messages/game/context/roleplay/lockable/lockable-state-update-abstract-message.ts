/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class LockableStateUpdateAbstractMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5671;

    locked: boolean;

    constructor() {
        this.locked = false;
        super();
    }

    public getMessageId(): number {
        return LockableStateUpdateAbstractMessage.ID;
    }

    public reset(): void {
        this.locked = false;
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
        this.serializeAs_LockableStateUpdateAbstractMessage(param1);
    }

    public serializeAs_LockableStateUpdateAbstractMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.locked);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LockableStateUpdateAbstractMessage(param1);
    }

    public deserializeAs_LockableStateUpdateAbstractMessage(param1: ICustomDataInput): void {
        this.locked = param1.readBoolean();

    }
}

export = LockableStateUpdateAbstractMessage;
