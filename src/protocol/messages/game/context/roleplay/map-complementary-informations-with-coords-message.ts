/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import {NetworkMessage, INetworkMessage} from '../../../../network-message';
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import MapComplementaryInformationsDataMessage = require('./map-complementary-informations-data-message');
import HouseInformations = require('../../../../types/game/house/house-informations');
import GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');
import InteractiveElement = require('../../../../types/game/interactive/interactive-element');
import StatedElement = require('../../../../types/game/interactive/stated-element');
import MapObstacle = require('../../../../types/game/interactive/map-obstacle');
import FightCommonInformations = require('../../../../types/game/context/fight/fight-common-informations');

class MapComplementaryInformationsWithCoordsMessage extends MapComplementaryInformationsDataMessage {
    public static ID: number = 6268;

    worldX: number;
    worldY: number;

    constructor() {
        this.worldX = 0;
        this.worldY = 0;
        super();
    }

    public getMessageId(): number {
        return MapComplementaryInformationsWithCoordsMessage.ID;
    }

    public reset(): void {
        this.worldX = 0;
        this.worldY = 0;
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
        this.serializeAs_MapComplementaryInformationsWithCoordsMessage(param1);
    }

    public serializeAs_MapComplementaryInformationsWithCoordsMessage(param1: ICustomDataOutput): void {
        super.serializeAs_MapComplementaryInformationsDataMessage(param1);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_MapComplementaryInformationsWithCoordsMessage(param1);
    }

    public deserializeAs_MapComplementaryInformationsWithCoordsMessage(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of MapComplementaryInformationsWithCoordsMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of MapComplementaryInformationsWithCoordsMessage.worldY.');
        }

    }
}

export = MapComplementaryInformationsWithCoordsMessage;
