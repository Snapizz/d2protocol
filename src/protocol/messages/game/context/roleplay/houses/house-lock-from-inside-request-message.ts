/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import LockableChangeCodeMessage = require('../lockable/lockable-change-code-message');

class HouseLockFromInsideRequestMessage extends LockableChangeCodeMessage {
    public static ID: number = 5885;



    constructor() {

        super();
    }

    public getMessageId(): number {
        return HouseLockFromInsideRequestMessage.ID;
    }

    public reset(): void {

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
        this.serializeAs_HouseLockFromInsideRequestMessage(param1);
    }

    public serializeAs_HouseLockFromInsideRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_LockableChangeCodeMessage(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HouseLockFromInsideRequestMessage(param1);
    }

    public deserializeAs_HouseLockFromInsideRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = HouseLockFromInsideRequestMessage;
