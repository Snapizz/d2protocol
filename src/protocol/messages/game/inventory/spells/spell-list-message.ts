/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SpellItem = require('../../../../types/game/data/items/spell-item');

class SpellListMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 1200;

    spellPrevisualization: boolean;
    spells: SpellItem[];

    constructor() {
        this.spellPrevisualization = false;
        this.spells = [];
        super();
    }

    public getMessageId(): number {
        return SpellListMessage.ID;
    }

    public reset(): void {
        this.spellPrevisualization = false;
        this.spells = [];
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
        this.serializeAs_SpellListMessage(param1);
    }

    public serializeAs_SpellListMessage(param1: ICustomDataOutput): void {
        param1.writeBoolean(this.spellPrevisualization);
        param1.writeShort(this.spells.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.spells.length) {
            (this.spells[_loc2_]).serializeAs_SpellItem(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpellListMessage(param1);
    }

    public deserializeAs_SpellListMessage(param1: ICustomDataInput): void {
        var _loc4_: SpellItem = null;
        this.spellPrevisualization = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new SpellItem();
            _loc4_.deserialize(param1);
            this.spells.push(_loc4_);
            _loc3_++;
        }

    }
}

export = SpellListMessage;
