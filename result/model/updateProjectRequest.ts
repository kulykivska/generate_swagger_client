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
import { Disease } from './disease';
import { Location } from './location';
import { OrganizationLink } from './organizationLink';
import { Specialty } from './specialty';
import { ValidityPeriod } from './validityPeriod';
import { Viewport } from './viewport';

export interface UpdateProjectRequest { 
    title: string;
    description: string;
    validity_period: ValidityPeriod;
    website?: string;
    type: string;
    diseases: Array<Disease>;
    funding_source?: string;
    specialities: Array<Specialty>;
    location: Location;
    viewport?: Viewport;
    community_id?: string;
    linked_projects?: Array<string>;
    linked_organizations: Array<OrganizationLink>;
}