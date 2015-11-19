/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MapComplementaryInformationsDataMessage = require('./map-complementary-informations-data-message');
import HouseInformationsInside = require('../../../../types/game/house/house-informations-inside');
import HouseInformations = require('../../../../types/game/house/house-informations');
import GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');
import InteractiveElement = require('../../../../types/game/interactive/interactive-element');
import StatedElement = require('../../../../types/game/interactive/stated-element');
import MapObstacle = require('../../../../types/game/interactive/map-obstacle');
import FightCommonInformations = require('../../../../types/game/context/fight/fight-common-informations');

class MapComplementaryInformationsDataInHouseMessage extends MapComplementaryInformationsDataMessage {
    public static ID: number = 6130;

    currentHouse: HouseInformationsInside;

    constructor() {
        this.currentHouse = new HouseInformationsInside();
        super();
    }

    public getMessageId(): number {
        return MapComplementaryInformationsDataInHouseMessage.ID;
    }

    public reset(): void {
        this.currentHouse = new HouseInformationsInside();
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
        this.serializeAs_MapComplementaryInformationsDataInHouseMessage(param1);
    }

    public serializeAs_MapComplementaryInformationsDataInHouseMessage(param1: ICustomDataOutput): void {
        super.serializeAs_MapComplementaryInformationsDataMessage(param1);
        this.currentHouse.serializeAs_HouseInformationsInside(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapComplementaryInformationsDataInHouseMessage(param1);
    }

    public deserializeAs_MapComplementaryInformationsDataInHouseMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.currentHouse = new HouseInformationsInside();
        this.currentHouse.deserialize(param1);

    }
}

export = MapComplementaryInformationsDataInHouseMessage;
