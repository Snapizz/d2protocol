/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultListEntry = require('../../../../types/game/context/fight/fight-result-list-entry');
import NamedPartyTeamWithOutcome = require('../../../../types/game/context/roleplay/party/named-party-team-with-outcome');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class GameFightEndMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 720;

    duration: number;
    ageBonus: number;
    lootShareLimitMalus: number;
    results: FightResultListEntry[];
    namedPartyTeamsOutcomes: NamedPartyTeamWithOutcome[];

    constructor() {
        this.duration = 0;
        this.ageBonus = 0;
        this.lootShareLimitMalus = 0;
        this.results = [];
        this.namedPartyTeamsOutcomes = [];
        super();
    }

    public getMessageId(): number {
        return GameFightEndMessage.ID;
    }

    public reset(): void {
        this.duration = 0;
        this.ageBonus = 0;
        this.lootShareLimitMalus = 0;
        this.results = [];
        this.namedPartyTeamsOutcomes = [];
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
        this.serializeAs_GameFightEndMessage(param1);
    }

    public serializeAs_GameFightEndMessage(param1: ICustomDataOutput): void {
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element duration.');
        }
        param1.writeInt(this.duration);
        param1.writeShort(this.ageBonus);
        param1.writeShort(this.lootShareLimitMalus);
        param1.writeShort(this.results.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.results.length) {
            param1.writeShort((this.results[_loc2_]).getTypeId());
            (this.results[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.namedPartyTeamsOutcomes.length);
        var _loc3_: number = 0;
        while (_loc3_ < this.namedPartyTeamsOutcomes.length) {
            (this.namedPartyTeamsOutcomes[_loc3_]).serializeAs_NamedPartyTeamWithOutcome(param1);
            _loc3_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightEndMessage(param1);
    }

    public deserializeAs_GameFightEndMessage(param1: ICustomDataInput): void {
        var _loc6_: number = 0;
        var _loc7_: FightResultListEntry = null;
        var _loc8_: NamedPartyTeamWithOutcome = null;
        this.duration = param1.readInt();
        if (this.duration < 0) {
            throw new Error('Forbidden value (' + this.duration + ') on element of GameFightEndMessage.duration.');
        }
        this.ageBonus = param1.readShort();
        this.lootShareLimitMalus = param1.readShort();
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc6_ = param1.readUnsignedShort();
            _loc7_ = <FightResultListEntry>ProtocolTypeManager.getInstance(FightResultListEntry, _loc6_);
            _loc7_.deserialize(param1);
            this.results.push(_loc7_);
            _loc3_++;
        }
        var _loc4_: number = param1.readUnsignedShort();
        var _loc5_: number = 0;
        while (_loc5_ < _loc4_) {
        _loc8_ = new NamedPartyTeamWithOutcome();
            _loc8_.deserialize(param1);
            this.namedPartyTeamsOutcomes.push(_loc8_);
            _loc5_++;
        }

    }
}

export = GameFightEndMessage;
