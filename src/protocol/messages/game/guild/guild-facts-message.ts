/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import GuildFactSheetInformations = require('../../../types/game/social/guild-fact-sheet-informations');
import CharacterMinimalInformations = require('../../../types/game/character/character-minimal-informations');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class GuildFactsMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6415;

    infos: GuildFactSheetInformations;
    creationDate: number;
    nbTaxCollectors: number;
    enabled: boolean;
    members: CharacterMinimalInformations[];

    constructor() {
        this.infos = new GuildFactSheetInformations();
        this.creationDate = 0;
        this.nbTaxCollectors = 0;
        this.enabled = false;
        this.members = [];
        super();
    }

    public getMessageId(): number {
        return GuildFactsMessage.ID;
    }

    public reset(): void {
        this.infos = new GuildFactSheetInformations();
        this.creationDate = 0;
        this.nbTaxCollectors = 0;
        this.enabled = false;
        this.members = [];
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
        this.serializeAs_GuildFactsMessage(param1);
    }

    public serializeAs_GuildFactsMessage(param1: ICustomDataOutput): void {
        param1.writeShort(this.infos.getTypeId());
        this.infos.serialize(param1);
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element creationDate.');
        }
        param1.writeInt(this.creationDate);
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element nbTaxCollectors.');
        }
        param1.writeVarShort(this.nbTaxCollectors);
        param1.writeBoolean(this.enabled);
        param1.writeShort(this.members.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.members.length) {
            (this.members[_loc2_]).serializeAs_CharacterMinimalInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GuildFactsMessage(param1);
    }

    public deserializeAs_GuildFactsMessage(param1: ICustomDataInput): void {
        var _loc5_: CharacterMinimalInformations = null;
        var _loc2_: number = param1.readUnsignedShort();
        this.infos = <GuildFactSheetInformations>ProtocolTypeManager.getInstance(GuildFactSheetInformations, _loc2_);
        this.infos.deserialize(param1);
        this.creationDate = param1.readInt();
        if (this.creationDate < 0) {
            throw new Error('Forbidden value (' + this.creationDate + ') on element of GuildFactsMessage.creationDate.');
        }
        this.nbTaxCollectors = param1.readVarUhShort();
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element of GuildFactsMessage.nbTaxCollectors.');
        }
        this.enabled = param1.readBoolean();
        var _loc3_: number = param1.readUnsignedShort();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc5_ = new CharacterMinimalInformations();
            _loc5_.deserialize(param1);
            this.members.push(_loc5_);
            _loc4_++;
        }

    }
}

export = GuildFactsMessage;
