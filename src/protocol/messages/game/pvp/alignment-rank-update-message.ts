/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class AlignmentRankUpdateMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6058;

    alignmentRank: number;
    verbose: boolean;

    constructor() {
        this.alignmentRank = 0;
        this.verbose = false;
        super();
    }

    public getMessageId(): number {
        return AlignmentRankUpdateMessage.ID;
    }

    public reset(): void {
        this.alignmentRank = 0;
        this.verbose = false;
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
        this.serializeAs_AlignmentRankUpdateMessage(param1);
    }

    public serializeAs_AlignmentRankUpdateMessage(param1: ICustomDataOutput): void {
        if (this.alignmentRank < 0) {
            throw new Error('Forbidden value (' + this.alignmentRank + ') on element alignmentRank.');
        }
        param1.writeByte(this.alignmentRank);
        param1.writeBoolean(this.verbose);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AlignmentRankUpdateMessage(param1);
    }

    public deserializeAs_AlignmentRankUpdateMessage(param1: ICustomDataInput): void {
        this.alignmentRank = param1.readByte();
        if (this.alignmentRank < 0) {
            throw new Error('Forbidden value (' + this.alignmentRank + ') on element of AlignmentRankUpdateMessage.alignmentRank.');
        }
        this.verbose = param1.readBoolean();

    }
}

export = AlignmentRankUpdateMessage;
