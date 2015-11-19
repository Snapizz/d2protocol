/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class AbstractFightDispellableEffect implements INetworkType {
    public static ID: number = 206;

    uid: number;
    targetId: number;
    turnDuration: number;
    dispelable: number;
    spellId: number;
    effectId: number;
    parentBoostUid: number;

    constructor() {
        this.uid = 0;
        this.targetId = 0;
        this.turnDuration = 0;
        this.dispelable = 1;
        this.spellId = 0;
        this.effectId = 0;
        this.parentBoostUid = 0;
    }

    public getTypeId(): number {
        return AbstractFightDispellableEffect.ID;
    }

    public reset(): void {
        this.uid = 0;
        this.targetId = 0;
        this.turnDuration = 0;
        this.dispelable = 1;
        this.spellId = 0;
        this.effectId = 0;
        this.parentBoostUid = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_AbstractFightDispellableEffect(param1);
    }

    public serializeAs_AbstractFightDispellableEffect(param1: ICustomDataOutput): void {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
        param1.writeInt(this.targetId);
        param1.writeShort(this.turnDuration);
        param1.writeByte(this.dispelable);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.effectId < 0) {
            throw new Error('Forbidden value (' + this.effectId + ') on element effectId.');
        }
        param1.writeVarInt(this.effectId);
        if (this.parentBoostUid < 0) {
            throw new Error('Forbidden value (' + this.parentBoostUid + ') on element parentBoostUid.');
        }
        param1.writeVarInt(this.parentBoostUid);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AbstractFightDispellableEffect(param1);
    }

    public deserializeAs_AbstractFightDispellableEffect(param1: ICustomDataInput): void {
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of AbstractFightDispellableEffect.uid.');
        }
        this.targetId = param1.readInt();
        this.turnDuration = param1.readShort();
        this.dispelable = param1.readByte();
        if (this.dispelable < 0) {
            throw new Error('Forbidden value (' + this.dispelable + ') on element of AbstractFightDispellableEffect.dispelable.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of AbstractFightDispellableEffect.spellId.');
        }
        this.effectId = param1.readVarUhInt();
        if (this.effectId < 0) {
            throw new Error('Forbidden value (' + this.effectId + ') on element of AbstractFightDispellableEffect.effectId.');
        }
        this.parentBoostUid = param1.readVarUhInt();
        if (this.parentBoostUid < 0) {
            throw new Error('Forbidden value (' + this.parentBoostUid + ') on element of AbstractFightDispellableEffect.parentBoostUid.');
        }

    }
}

export = AbstractFightDispellableEffect;
