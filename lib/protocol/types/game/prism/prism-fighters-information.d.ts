/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ProtectedEntityWaitingForHelpInfo = require('../fight/protected-entity-waiting-for-help-info');
import CharacterMinimalPlusLookInformations = require('../character/character-minimal-plus-look-informations');
declare class PrismFightersInformation implements INetworkType {
    static ID: number;
    subAreaId: number;
    waitingForHelpInfo: ProtectedEntityWaitingForHelpInfo;
    allyCharactersInformations: CharacterMinimalPlusLookInformations[];
    enemyCharactersInformations: CharacterMinimalPlusLookInformations[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_PrismFightersInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_PrismFightersInformation(param1: ICustomDataInput): void;
}
export = PrismFightersInformation;
