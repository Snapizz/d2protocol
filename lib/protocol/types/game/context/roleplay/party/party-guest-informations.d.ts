/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import EntityLook = require('../../../look/entity-look');
import PlayerStatus = require('../../../character/status/player-status');
import PartyCompanionBaseInformations = require('./companion/party-companion-base-informations');
declare class PartyGuestInformations implements INetworkType {
    static ID: number;
    guestId: number;
    hostId: number;
    name: string;
    guestLook: EntityLook;
    breed: number;
    sex: boolean;
    status: PlayerStatus;
    companions: PartyCompanionBaseInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PartyGuestInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PartyGuestInformations(param1: ICustomDataInput): void;
}
export = PartyGuestInformations;
