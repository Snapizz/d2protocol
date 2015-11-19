/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');
import GuildInAllianceInformations = require('../../../types/game/context/roleplay/guild-in-alliance-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class AllianceFactsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6414;

    infos: AllianceFactSheetInformations;
    guilds: GuildInAllianceInformations[];
    controlledSubareaIds: number[];
    leaderCharacterId: number;
    leaderCharacterName: string;

    constructor() {
        this.infos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.controlledSubareaIds = [];
        this.leaderCharacterId = 0;
        this.leaderCharacterName = '';
        super();
    }

    public getMessageId(): number {
        return AllianceFactsMessage.ID;
    }

    public reset(): void {
        this.infos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.controlledSubareaIds = [];
        this.leaderCharacterId = 0;
        this.leaderCharacterName = '';
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
        this.serializeAs_AllianceFactsMessage(param1);
    }

    public serializeAs_AllianceFactsMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.infos.getTypeId());
        this.infos.serialize(param1);
        param1.writeShort(this.guilds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.guilds.length) {
            (this.guilds[_loc2_]).serializeAs_GuildInAllianceInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.controlledSubareaIds.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.controlledSubareaIds.length) {
            if (this.controlledSubareaIds[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.controlledSubareaIds[_loc3_] + ') on element 3 (starting at 1) of controlledSubareaIds.');
            }
            param1.writeVarShort(this.controlledSubareaIds[_loc3_]);
            _loc3_++;
        }
        if (this.leaderCharacterId < 0) {
            throw new Error('Forbidden value (' + this.leaderCharacterId + ') on element leaderCharacterId.');
        }
        param1.writeVarInt(this.leaderCharacterId);
        param1.writeUTF(this.leaderCharacterName);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceFactsMessage(param1);
    }

    public deserializeAs_AllianceFactsMessage(param1: ICustomDataInput): void {
        var _loc7_: GuildInAllianceInformations = null;
        var _loc8_: number = 0;
        var _loc2_: number = param1.readUnsignedShort();
        this.infos = <AllianceFactSheetInformations>ProtocolTypeManager.getInstance(AllianceFactSheetInformations, _loc2_);
        this.infos.deserialize(param1);
        var _loc3_: number = param1.readUnsignedShort();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc7_ = new GuildInAllianceInformations();
            _loc7_.deserialize(param1);
            this.guilds.push(_loc7_);
            _loc4_++;
        }
        var _loc5_: number = param1.readUnsignedShort();
        var _loc6_: number = 0;
        while (_loc6_ < _loc5_) {
        _loc8_ = param1.readVarUhShort();
            if (_loc8_ < 0) {
                throw new Error('Forbidden value (' + _loc8_ + ') on elements of controlledSubareaIds.');
            }
            this.controlledSubareaIds.push(_loc8_);
            _loc6_++;
        }
        this.leaderCharacterId = param1.readVarUhInt();
        if (this.leaderCharacterId < 0) {
            throw new Error('Forbidden value (' + this.leaderCharacterId + ') on element of AllianceFactsMessage.leaderCharacterId.');
        }
        this.leaderCharacterName = param1.readUTF();

    }
}

export = AllianceFactsMessage;
