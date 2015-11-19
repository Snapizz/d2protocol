/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class JobAllowMultiCraftRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5748;

    enabled: boolean;

    constructor() {
        this.enabled = false;
        super();
    }

    public getMessageId(): number {
        return JobAllowMultiCraftRequestMessage.ID;
    }

    public reset(): void {
        this.enabled = false;
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
        this.serializeAs_JobAllowMultiCraftRequestMessage(param1);
    }

    public serializeAs_JobAllowMultiCraftRequestMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.enabled);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_JobAllowMultiCraftRequestMessage(param1);
    }

    public deserializeAs_JobAllowMultiCraftRequestMessage(param1: ICustomDataInput): void {
        this.enabled = param1.readBoolean();

    }
}

export = JobAllowMultiCraftRequestMessage;
