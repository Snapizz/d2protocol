/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PrismFightJoinLeaveRequestMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5843;

    subAreaId: number;
    join: boolean;

    constructor() {
        this.subAreaId = 0;
        this.join = false;
        super();
    }

    public getMessageId(): number {
        return PrismFightJoinLeaveRequestMessage.ID;
    }

    public reset(): void {
        this.subAreaId = 0;
        this.join = false;
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
        this.serializeAs_PrismFightJoinLeaveRequestMessage(param1);
    }

    public serializeAs_PrismFightJoinLeaveRequestMessage(param1: ICustomDataOutput): void {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeBoolean(this.join);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PrismFightJoinLeaveRequestMessage(param1);
    }

    public deserializeAs_PrismFightJoinLeaveRequestMessage(param1: ICustomDataInput): void {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightJoinLeaveRequestMessage.subAreaId.');
        }
        this.join = param1.readBoolean();

    }
}

export = PrismFightJoinLeaveRequestMessage;
