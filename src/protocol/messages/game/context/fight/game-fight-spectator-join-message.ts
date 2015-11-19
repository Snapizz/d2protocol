/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import GameFightJoinMessage = require('./game-fight-join-message');
import NamedPartyTeam = require('../../../../types/game/context/roleplay/party/named-party-team');

class GameFightSpectatorJoinMessage extends GameFightJoinMessage {
    public static ID: number = 6504;

    namedPartyTeams: NamedPartyTeam[];

    constructor() {
        this.namedPartyTeams = [];
        super();
    }

    public getMessageId(): number {
        return GameFightSpectatorJoinMessage.ID;
    }

    public reset(): void {
        this.namedPartyTeams = [];
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
        this.serializeAs_GameFightSpectatorJoinMessage(param1);
    }

    public serializeAs_GameFightSpectatorJoinMessage(param1: ICustomDataOutput): void {
        super.serializeAs_GameFightJoinMessage(param1);
        param1.writeShort(this.namedPartyTeams.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.namedPartyTeams.length) {
            (this.namedPartyTeams[_loc2_]).serializeAs_NamedPartyTeam(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightSpectatorJoinMessage(param1);
    }

    public deserializeAs_GameFightSpectatorJoinMessage(param1: ICustomDataInput): void {
        var _loc4_: NamedPartyTeam = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new NamedPartyTeam();
            _loc4_.deserialize(param1);
            this.namedPartyTeams.push(_loc4_);
            _loc3_++;
        }

    }
}

export = GameFightSpectatorJoinMessage;
