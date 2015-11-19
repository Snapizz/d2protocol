/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import EntityLook = require('../../../look/entity-look');
import PlayerStatus = require('../../../character/status/player-status');
import PartyCompanionBaseInformations = require('./companion/party-companion-base-informations');
import ProtocolTypeManager = require('../../../../../protocol-type-manager');

class PartyGuestInformations implements INetworkType {
    public static ID: number = 374;

    guestId: number;
    hostId: number;
    name: string;
    guestLook: EntityLook;
    breed: number;
    sex: boolean;
    status: PlayerStatus;
    companions: PartyCompanionBaseInformations[];

    constructor() {
        this.guestId = 0;
        this.hostId = 0;
        this.name = '';
        this.guestLook = new EntityLook();
        this.breed = 0;
        this.sex = false;
        this.status = new PlayerStatus();
        this.companions = [];
    }

    public getTypeId(): number {
        return PartyGuestInformations.ID;
    }

    public reset(): void {
        this.guestId = 0;
        this.hostId = 0;
        this.name = '';
        this.guestLook = new EntityLook();
        this.breed = 0;
        this.sex = false;
        this.status = new PlayerStatus();
        this.companions = [];
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyGuestInformations(param1);
    }

    public serializeAs_PartyGuestInformations(param1: ICustomDataOutput): void {
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element guestId.');
        }
        param1.writeInt(this.guestId);
        if (this.hostId < 0) {
            throw new Error('Forbidden value (' + this.hostId + ') on element hostId.');
        }
        param1.writeInt(this.hostId);
        param1.writeUTF(this.name);
        this.guestLook.serializeAs_EntityLook(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);
        param1.writeShort(this.companions.length);
        var _loc2_: number = 0;
        while (_loc2_ < this.companions.length) {
            (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyGuestInformations(param1);
    }

    public deserializeAs_PartyGuestInformations(param1: ICustomDataInput): void {
        var _loc5_: PartyCompanionBaseInformations = null;
        this.guestId = param1.readInt();
        if (this.guestId < 0) {
            throw new Error('Forbidden value (' + this.guestId + ') on element of PartyGuestInformations.guestId.');
        }
        this.hostId = param1.readInt();
        if (this.hostId < 0) {
            throw new Error('Forbidden value (' + this.hostId + ') on element of PartyGuestInformations.hostId.');
        }
        this.name = param1.readUTF();
        this.guestLook = new EntityLook();
        this.guestLook.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();
        var _loc2_: number = param1.readUnsignedShort();
        this.status = <PlayerStatus>ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
        var _loc3_: number = param1.readUnsignedShort();
        var _loc4_: number = 0;
        while (_loc4_ < _loc3_) {
        _loc5_ = new PartyCompanionBaseInformations();
            _loc5_.deserialize(param1);
            this.companions.push(_loc5_);
            _loc4_++;
        }

    }
}

export = PartyGuestInformations;
