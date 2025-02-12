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

export interface PermissionErrorDetails { 
    /**
     * Kind of entity, against which security permissions are violated
     */
    entity_type: PermissionErrorDetails.EntityTypeEnum;
    /**
     * Identifier of the entity, against which security permissions are violated
     */
    entity_id: string;
    /**
     * Name of an attempted operation on the entity
     */
    action: string;
}
export namespace PermissionErrorDetails {
    export type EntityTypeEnum = 'User' | 'Community' | 'Project' | 'Post' | 'Comment' | 'Conversation' | 'File' | 'Folder' | 'File Activity Log';
    export const EntityTypeEnum = {
        User: 'User' as EntityTypeEnum,
        Community: 'Community' as EntityTypeEnum,
        Project: 'Project' as EntityTypeEnum,
        Post: 'Post' as EntityTypeEnum,
        Comment: 'Comment' as EntityTypeEnum,
        Conversation: 'Conversation' as EntityTypeEnum,
        File: 'File' as EntityTypeEnum,
        Folder: 'Folder' as EntityTypeEnum,
        FileActivityLog: 'File Activity Log' as EntityTypeEnum
    };
}