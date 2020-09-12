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

export interface CommunityPermissions { 
    view: boolean;
    update: boolean;
    add_leader: boolean;
    remove_leader: boolean;
    remove: boolean;
    invite_users: boolean;
    view_invitations: boolean;
    leave: boolean;
    request_to_join: boolean;
    view_join_requests: boolean;
    accept_join_request: boolean;
    deny_join_request: boolean;
    request_to_link: boolean;
    accept_link_request: boolean;
    deny_link_request: boolean;
    unlink: boolean;
    view_members: boolean;
    remove_member: boolean;
    view_projects: boolean;
    create_project: boolean;
    remove_project: boolean;
    view_posts: boolean;
    add_post: boolean;
}