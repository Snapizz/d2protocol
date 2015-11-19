/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { NetworkMessage, INetworkMessage } from '../../../../network-message';
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import HouseInformations = require('../../../../types/game/house/house-informations');
import GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations');
import InteractiveElement = require('../../../../types/game/interactive/interactive-element');
import StatedElement = require('../../../../types/game/interactive/stated-element');
import MapObstacle = require('../../../../types/game/interactive/map-obstacle');
import FightCommonInformations = require('../../../../types/game/context/fight/fight-common-informations');
declare class MapComplementaryInformationsDataMessage extends NetworkMessage implements INetworkMessage {
    static ID: number;
    subAreaId: number;
    mapId: number;
    houses: HouseInformations[];
    actors: GameRolePlayActorInformations[];
    interactiveElements: InteractiveElement[];
    statedElements: StatedElement[];
    obstacles: MapObstacle[];
    fights: FightCommonInformations[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_MapComplementaryInformationsDataMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_MapComplementaryInformationsDataMessage(param1: ICustomDataInput): void;
}
export = MapComplementaryInformationsDataMessage;
