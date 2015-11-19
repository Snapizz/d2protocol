/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import LockableStateUpdateAbstractMessage = require('./lockable-state-update-abstract-message');

class LockableStateUpdateHouseDoorMessage extends LockableStateUpdateAbstractMessage {
    public static ID: number = 5668;

    houseId: number;

    constructor() {
        this.houseId = 0;
        super();
    }

    public getMessageId(): number {
        return LockableStateUpdateHouseDoorMessage.ID;
    }

    public reset(): void {
        this.houseId = 0;
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
        this.serializeAs_LockableStateUpdateHouseDoorMessage(param1);
    }

    public serializeAs_LockableStateUpdateHouseDoorMessage(param1: ICustomDataOutput): void {
        super.serializeAs_LockableStateUpdateAbstractMessage(param1);
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_LockableStateUpdateHouseDoorMessage(param1);
    }

    public deserializeAs_LockableStateUpdateHouseDoorMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of LockableStateUpdateHouseDoorMessage.houseId.');
        }

    }
}

export = LockableStateUpdateHouseDoorMessage;
