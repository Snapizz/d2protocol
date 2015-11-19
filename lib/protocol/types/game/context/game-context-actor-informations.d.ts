/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import EntityDispositionInformations = require('./entity-disposition-informations');
import EntityLook = require('../look/entity-look');
declare class GameContextActorInformations implements INetworkType {
    static ID: number;
    contextualId: number;
    look: EntityLook;
    disposition: EntityDispositionInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameContextActorInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameContextActorInformations(param1: ICustomDataInput): void;
}
export = GameContextActorInformations;
