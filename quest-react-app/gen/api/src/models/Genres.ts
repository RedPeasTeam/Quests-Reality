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
 * @interface Genres
 */
export interface Genres {
    /**
     * 
     * @type {string}
     * @memberof Genres
     */
    genre?: string;
    /**
     * 
     * @type {string}
     * @memberof Genres
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Genres
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Genres
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Genres
     */
    description?: string;
}

export function GenresFromJSON(json: any): Genres {
    return GenresFromJSONTyped(json, false);
}

export function GenresFromJSONTyped(json: any, ignoreDiscriminator: boolean): Genres {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'genre': !exists(json, 'genre') ? undefined : json['genre'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'id': json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function GenresToJSON(value?: Genres | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'genre': value.genre,
        'name': value.name,
        'image': value.image,
        'id': value.id,
        'description': value.description,
    };
}

