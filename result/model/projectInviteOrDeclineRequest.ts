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

export interface ProjectInviteOrDeclineRequest { 
    invitation_status: ProjectInviteOrDeclineRequest.InvitationStatusEnum;
}
export namespace ProjectInviteOrDeclineRequest {
    export type InvitationStatusEnum = 'Approved' | 'Rejected';
    export const InvitationStatusEnum = {
        Approved: 'Approved' as InvitationStatusEnum,
        Rejected: 'Rejected' as InvitationStatusEnum
    };
}