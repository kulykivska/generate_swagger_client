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
import { ConversationKinds } from './conversationKinds';

export interface CreateConversationRequest { 
    title?: string;
    /**
     * User IDs
     */
    participant_user_ids: Array<string>;
    kind: ConversationKinds;
}