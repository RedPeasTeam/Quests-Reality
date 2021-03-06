/* tslint:disable */
/* eslint-disable */
/**
 * Quests-Reality
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Quests
 */
export interface Quests {
    /**
     * 
     * @type {string}
     * @memberof Quests
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Quests
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Quests
     */
    genre?: string;
    /**
     * 
     * @type {string}
     * @memberof Quests
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Quests
     */
    description?: string;
}

export function QuestsFromJSON(json: any): Quests {
    return QuestsFromJSONTyped(json, false);
}

export function QuestsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quests {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'genre': !exists(json, 'genre') ? undefined : json['genre'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function QuestsToJSON(value?: Quests | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'genre': value.genre,
        'image': value.image,
        'description': value.description,
    };
}


