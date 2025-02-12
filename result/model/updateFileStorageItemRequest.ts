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

/**
 * request object for update FileDescriptor of FolderDescriptor
 */
export interface UpdateFileStorageItemRequest { 
    new_name: string;
    destination_folder_descriptor_id?: string;
}