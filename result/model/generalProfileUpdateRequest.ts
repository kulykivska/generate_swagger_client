/**
 * project REST API
 * Specification of REST API for Project
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Location } from './location';
import { Viewport } from './viewport';

export interface GeneralProfileUpdateRequest { 
    email?: string;
    image_url?: string;
    location: Location;
    about?: string;
    viewport?: Viewport;
}