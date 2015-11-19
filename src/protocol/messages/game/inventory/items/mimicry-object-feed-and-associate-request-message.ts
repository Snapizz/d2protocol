/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SymbioticObjectAssociateRequestMessage = require('./symbiotic-object-associate-request-message');

class MimicryObjectFeedAndAssociateRequestMessage extends SymbioticObjectAssociateRequestMessage {
    public static ID: number = 6460;

    foodUID: number;
    foodPos: number;
    preview: boolean;

    constructor() {
        this.foodUID = 0;
        this.foodPos = 0;
        this.preview = false;
        super();
    }

    public getMessageId(): number {
        return MimicryObjectFeedAndAssociateRequestMessage.ID;
    }

    public reset(): void {
        this.foodUID = 0;
        this.foodPos = 0;
        this.preview = false;
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
        this.serializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1);
    }

    public serializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1: ICustomDataOutput): void {
        super.serializeAs_SymbioticObjectAssociateRequestMessage(param1);
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element foodUID.');
        }
        param1.writeVarInt(this.foodUID);
        if (this.foodPos < 0 || this.foodPos > 255) {
            throw new Error('Forbidden value (' + this.foodPos + ') on element foodPos.');
        }
        param1.writeByte(this.foodPos);
        param1.writeBoolean(this.preview);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1);
    }

    public deserializeAs_MimicryObjectFeedAndAssociateRequestMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.foodUID = param1.readVarUhInt();
        if (this.foodUID < 0) {
            throw new Error('Forbidden value (' + this.foodUID + ') on element of MimicryObjectFeedAndAssociateRequestMessage.foodUID.');
        }
        this.foodPos = param1.readUnsignedByte();
        if (this.foodPos < 0 || this.foodPos > 255) {
            throw new Error('Forbidden value (' + this.foodPos + ') on element of MimicryObjectFeedAndAssociateRequestMessage.foodPos.');
        }
        this.preview = param1.readBoolean();

    }
}

export = MimicryObjectFeedAndAssociateRequestMessage;
