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


import * as runtime from '../runtime';
import {
    Comments,
    CommentsFromJSON,
    CommentsToJSON,
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Genres,
    GenresFromJSON,
    GenresToJSON,
    Quests,
    QuestsFromJSON,
    QuestsToJSON,
} from '../models';

export interface CommentsRequest {
    parametres?: string;
}

export interface GenresRequest {
    parametres?: string;
}

export interface MainRequest {
    parametres?: string;
}

export interface MapRequest {
    parametres?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns list of comments
     */
    async commentsRaw(requestParameters: CommentsRequest): Promise<runtime.ApiResponse<Array<Comments>>> {
        const queryParameters: any = {};

        if (requestParameters.parametres !== undefined) {
            queryParameters['parametres'] = requestParameters.parametres;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/comments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentsFromJSON));
    }

    /**
     * Returns list of comments
     */
    async comments(requestParameters: CommentsRequest): Promise<Array<Comments>> {
        const response = await this.commentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns parametres of Quests
     */
    async genresRaw(requestParameters: GenresRequest): Promise<runtime.ApiResponse<Array<Genres>>> {
        const queryParameters: any = {};

        if (requestParameters.parametres !== undefined) {
            queryParameters['parametres'] = requestParameters.parametres;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/genres`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GenresFromJSON));
    }

    /**
     * Returns parametres of Quests
     */
    async genres(requestParameters: GenresRequest): Promise<Array<Genres>> {
        const response = await this.genresRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns parametres of Quests
     */
    async mainRaw(requestParameters: MainRequest): Promise<runtime.ApiResponse<Array<Quests>>> {
        const queryParameters: any = {};

        if (requestParameters.parametres !== undefined) {
            queryParameters['parametres'] = requestParameters.parametres;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/main`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(QuestsFromJSON));
    }

    /**
     * Returns parametres of Quests
     */
    async main(requestParameters: MainRequest): Promise<Array<Quests>> {
        const response = await this.mainRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns map paremetres
     */
    async mapRaw(requestParameters: MapRequest): Promise<runtime.ApiResponse<Array<any>>> {
        const queryParameters: any = {};

        if (requestParameters.parametres !== undefined) {
            queryParameters['parametres'] = requestParameters.parametres;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/map`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns map paremetres
     */
    async map(requestParameters: MapRequest): Promise<Array<any>> {
        const response = await this.mapRaw(requestParameters);
        return await response.value();
    }

}