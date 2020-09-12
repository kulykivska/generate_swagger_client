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

export interface GenerateFileResponse { 
    /**
     * Unique identifier of the file being uploaded.
     */
    file_descriptor_id: string;
    url: string;
    fields: any;
    /**
     * It is optional. Present only for files with public=true attribute
     */
    public_url?: string;
}