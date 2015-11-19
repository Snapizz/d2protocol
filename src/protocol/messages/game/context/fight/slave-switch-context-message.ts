/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import SpellItem = require('../../../../types/game/data/items/spell-item');
import CharacterCharacteristicsInformations = require('../../../../types/game/character/characteristic/character-characteristics-informations');
import Shortcut = require('../../../../types/game/shortcut/shortcut');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class SlaveSwitchContextMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6214;

    masterId: number;
    slaveId: number;
    slaveSpells: SpellItem[];
    slaveStats: CharacterCharacteristicsInformations;
    shortcuts: Shortcut[];

    constructor() {
        this.masterId = 0;
        this.slaveId = 0;
        this.slaveSpells = [];
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.shortcuts = [];
        super();
    }

    public getMessageId(): number {
        return SlaveSwitchContextMessage.ID;
    }

    public reset(): void {
        this.masterId = 0;
        this.slaveId = 0;
        this.slaveSpells = [];
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.shortcuts = [];
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
        this.serializeAs_SlaveSwitchContextMessage(param1);
    }

    public serializeAs_SlaveSwitchContextMessage(param1: ICustomDataOutput): void {
        param1.writeInt(this.masterId);
        param1.writeInt(this.slaveId);
        param1.writeShort(this.slaveSpells.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.slaveSpells.length) {
            (this.slaveSpells[_loc2_]).serializeAs_SpellItem(param1);
            _loc2_++;
        }
        this.slaveStats.serializeAs_CharacterCharacteristicsInformations(param1);
        param1.writeShort(this.shortcuts.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.shortcuts.length) {
            param1.writeShort((this.shortcuts[_loc3_]).getTypeId());
            (this.shortcuts[_loc3_]).serialize(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SlaveSwitchContextMessage(param1);
    }

    public deserializeAs_SlaveSwitchContextMessage(param1: ICustomDataInput): void {
        var _loc6_: SpellItem = null;
        var _loc7_: number = 0;
        var _loc8_: Shortcut = null;
        this.masterId = param1.readInt();
        this.slaveId = param1.readInt();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new SpellItem();
            _loc6_.deserialize(param1);
            this.slaveSpells.push(_loc6_);
            _loc3_++;
        }
        this.slaveStats = new CharacterCharacteristicsInformations();
        this.slaveStats.deserialize(param1);
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readUnsignedShort();
            _loc8_ = <Shortcut>ProtocolTypeManager.getInstance(Shortcut, _loc7_);
            _loc8_.deserialize(param1);
            this.shortcuts.push(_loc8_);
            _loc5_++;
        }

    }
}

export = SlaveSwitchContextMessage;
