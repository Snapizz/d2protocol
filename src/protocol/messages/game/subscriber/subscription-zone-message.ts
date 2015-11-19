/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class SubscriptionZoneMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5573;

    active: boolean;

    constructor() {
        this.active = false;
        super();
    }

    public getMessageId(): number {
        return SubscriptionZoneMessage.ID;
    }

    public reset(): void {
        this.active = false;
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
        this.serializeAs_SubscriptionZoneMessage(param1);
    }

    public serializeAs_SubscriptionZoneMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.active);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SubscriptionZoneMessage(param1);
    }

    public deserializeAs_SubscriptionZoneMessage(param1: ICustomDataInput): void {
        this.active = param1.readBoolean();

    }
}

export = SubscriptionZoneMessage;
