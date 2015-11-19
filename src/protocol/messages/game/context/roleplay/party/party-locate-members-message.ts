/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import AbstractPartyMessage = require('./abstract-party-message');
import PartyMemberGeoPosition = require('../../../../../types/game/context/roleplay/party/party-member-geo-position');

class PartyLocateMembersMessage extends AbstractPartyMessage {
    public static ID: number = 5595;

    geopositions: PartyMemberGeoPosition[];

    constructor() {
        this.geopositions = [];
        super();
    }

    public getMessageId(): number {
        return PartyLocateMembersMessage.ID;
    }

    public reset(): void {
        this.geopositions = [];
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
        this.serializeAs_PartyLocateMembersMessage(param1);
    }

    public serializeAs_PartyLocateMembersMessage(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractPartyMessage(param1);
        param1.writeShort(this.geopositions.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.geopositions.length) {
            (this.geopositions[_loc2_]).serializeAs_PartyMemberGeoPosition(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyLocateMembersMessage(param1);
    }

    public deserializeAs_PartyLocateMembersMessage(param1: ICustomDataInput): void {
        var _loc4_: PartyMemberGeoPosition = null;
        super.deserialize(param1);
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = new PartyMemberGeoPosition();
            _loc4_.deserialize(param1);
            this.geopositions.push(_loc4_);
            _loc3_++;
        }

    }
}

export = PartyLocateMembersMessage;
