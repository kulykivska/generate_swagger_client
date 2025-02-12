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
import { OrganizationTypeKind } from './organizationTypeKind';

export interface OrganizationType { 
    type: OrganizationTypeKind;
    /**
     * Must be filled in if the type property is set to 'custom'.
     */
    custom_organization_type_name?: string;
}