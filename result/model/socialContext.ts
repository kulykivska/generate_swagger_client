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
import { SocialContextEntityType } from './socialContextEntityType';
import { UserRelationToGroup } from './userRelationToGroup';

export interface SocialContext { 
    entity_type: SocialContextEntityType;
    entity_id: string;
    entity_title: string;
    actor_role: UserRelationToGroup;
}