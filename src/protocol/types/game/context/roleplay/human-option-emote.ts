/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import HumanOption = require('./human-option');

class HumanOptionEmote extends HumanOption implements INetworkType {
    public static ID: number = 407;

    emoteId: number;
    emoteStartTime: number;

    constructor() {
        this.emoteId = 0;
        this.emoteStartTime = 0;
        super();
    }

    public getTypeId(): number {
        return HumanOptionEmote.ID;
    }

    public reset(): void {
        this.emoteId = 0;
        this.emoteStartTime = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOptionEmote(param1);
    }

    public serializeAs_HumanOptionEmote(param1: ICustomDataOutput): void {
        super.serializeAs_HumanOption(param1);
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element emoteStartTime.');
        }
        param1.writeDouble(this.emoteStartTime);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOptionEmote(param1);
    }

    public deserializeAs_HumanOptionEmote(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of HumanOptionEmote.emoteId.');
        }
        this.emoteStartTime = param1.readDouble();
        if (this.emoteStartTime < -9.007199254740992E15 || this.emoteStartTime > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.emoteStartTime + ') on element of HumanOptionEmote.emoteStartTime.');
        }

    }
}

export = HumanOptionEmote;
