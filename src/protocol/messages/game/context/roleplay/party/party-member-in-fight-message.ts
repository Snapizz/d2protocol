/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');
import MapCoordinatesExtended = require('../../../../../types/game/context/map-coordinates-extended');

class PartyMemberInFightMessage extends AbstractPartyMessage {
    public static ID: number = 6342;

    reason: number;
    memberId: number;
    memberAccountId: number;
    memberName: string;
    fightId: number;
    fightMap: MapCoordinatesExtended;
    timeBeforeFightStart: number;

    constructor() {
        this.reason = 0;
        this.memberId = 0;
        this.memberAccountId = 0;
        this.memberName = '';
        this.fightId = 0;
        this.fightMap = new MapCoordinatesExtended();
        this.timeBeforeFightStart = 0;
        super();
    }

    public getMessageId(): number {
        return PartyMemberInFightMessage.ID;
    }

    public reset(): void {
        this.reason = 0;
        this.memberId = 0;
        this.memberAccountId = 0;
        this.memberName = '';
        this.fightId = 0;
        this.fightMap = new MapCoordinatesExtended();
        this.timeBeforeFightStart = 0;
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
        this.serializeAs_PartyMemberInFightMessage(param1);
    }

    public serializeAs_PartyMemberInFightMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeByte(this.reason);
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element memberId.');
        }
        param1.writeVarInt(this.memberId);
        if (this.memberAccountId < 0) {
            throw new Error('Forbidden value (' + this.memberAccountId + ') on element memberAccountId.');
        }
        param1.writeInt(this.memberAccountId);
        param1.writeUTF(this.memberName);
        param1.writeInt(this.fightId);
        this.fightMap.serializeAs_MapCoordinatesExtended(param1);
        param1.writeVarShort(this.timeBeforeFightStart);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyMemberInFightMessage(param1);
    }

    public deserializeAs_PartyMemberInFightMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of PartyMemberInFightMessage.reason.');
        }
        this.memberId = param1.readVarUhInt();
        if (this.memberId < 0) {
            throw new Error('Forbidden value (' + this.memberId + ') on element of PartyMemberInFightMessage.memberId.');
        }
        this.memberAccountId = param1.readInt();
        if (this.memberAccountId < 0) {
            throw new Error('Forbidden value (' + this.memberAccountId + ') on element of PartyMemberInFightMessage.memberAccountId.');
        }
        this.memberName = param1.readUTF();
        this.fightId = param1.readInt();
        this.fightMap = new MapCoordinatesExtended();
        this.fightMap.deserialize(param1);
        this.timeBeforeFightStart = param1.readVarShort();

    }
}

export = PartyMemberInFightMessage;
