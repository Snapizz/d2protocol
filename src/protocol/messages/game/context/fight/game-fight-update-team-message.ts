/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTeamInformations = require('../../../../types/game/context/fight/fight-team-informations');

class GameFightUpdateTeamMessage extends NetworkMessage implements INetworkMessage {
    public static ID: number = 5572;

    fightId: number;
    team: FightTeamInformations;

    constructor() {
        this.fightId = 0;
        this.team = new FightTeamInformations();
        super();
    }

    public getMessageId(): number {
        return GameFightUpdateTeamMessage.ID;
    }

    public reset(): void {
        this.fightId = 0;
        this.team = new FightTeamInformations();
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
        this.serializeAs_GameFightUpdateTeamMessage(param1);
    }

    public serializeAs_GameFightUpdateTeamMessage(param1: ICustomDataOutput): void {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeShort(this.fightId);
        this.team.serializeAs_FightTeamInformations(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightUpdateTeamMessage(param1);
    }

    public deserializeAs_GameFightUpdateTeamMessage(param1: ICustomDataInput): void {
        this.fightId = param1.readShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameFightUpdateTeamMessage.fightId.');
        }
        this.team = new FightTeamInformations();
        this.team.deserialize(param1);

    }
}

export = GameFightUpdateTeamMessage;
