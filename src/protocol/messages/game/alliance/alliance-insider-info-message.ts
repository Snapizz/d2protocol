/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import AllianceFactSheetInformations = require('../../../types/game/social/alliance-fact-sheet-informations');
import GuildInsiderFactSheetInformations = require('../../../types/game/social/guild-insider-fact-sheet-informations');
import PrismSubareaEmptyInfo = require('../../../types/game/prism/prism-subarea-empty-info');
import ProtocolTypeManager = require('../../../protocol-type-manager');

class AllianceInsiderInfoMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 6403;

    allianceInfos: AllianceFactSheetInformations;
    guilds: GuildInsiderFactSheetInformations[];
    prisms: PrismSubareaEmptyInfo[];

    constructor() {
        this.allianceInfos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.prisms = [];
        super();
    }

    public getMessageId(): number {
        return AllianceInsiderInfoMessage.ID;
    }

    public reset(): void {
        this.allianceInfos = new AllianceFactSheetInformations();
        this.guilds = [];
        this.prisms = [];
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
        this.serializeAs_AllianceInsiderInfoMessage(param1);
    }

    public serializeAs_AllianceInsiderInfoMessage(param1: ICustomDataOutput): void {
        this.allianceInfos.serializeAs_AllianceFactSheetInformations(param1);
        param1.writeShort(this.guilds.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.guilds.length) {
            (this.guilds[_loc2_]).serializeAs_GuildInsiderFactSheetInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.prisms.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.prisms.length) {
            param1.writeShort((this.prisms[_loc3_]).getTypeId());
            (this.prisms[_loc3_]).serialize(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_AllianceInsiderInfoMessage(param1);
    }

    public deserializeAs_AllianceInsiderInfoMessage(param1: ICustomDataInput): void {
        var _loc6_: GuildInsiderFactSheetInformations = null;
        var _loc7_: number = 0;
        var _loc8_: PrismSubareaEmptyInfo = null;
        this.allianceInfos = new AllianceFactSheetInformations();
        this.allianceInfos.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = new GuildInsiderFactSheetInformations();
            _loc6_.deserialize(param1);
            this.guilds.push(_loc6_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc7_ = param1.readUnsignedShort();
            _loc8_ = <PrismSubareaEmptyInfo>ProtocolTypeManager.getInstance(PrismSubareaEmptyInfo, _loc7_);
            _loc8_.deserialize(param1);
            this.prisms.push(_loc8_);
            _loc5_++;
        }

    }
}

export = AllianceInsiderInfoMessage;
