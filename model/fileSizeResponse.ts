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

export interface FileSizeResponse { 
    /**
     * Total size file storage for user in system, in bytes.
     */
    total_size: number;
    /**
     * Size that already in use, in bytes.
     */
    used_size: number;
    /**
     * Size that still in loading, in bytes. FileDescriptor State is Pending - hasn't loaded yet s
     */
    loading_size: number;
    /**
     * Size of files that shared to me, in bytes.
     */
    shared_size: number;
}