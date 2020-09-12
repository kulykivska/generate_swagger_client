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
import { SearchAggregationBucket } from './searchAggregationBucket';

export interface SearchNestedAggregation { 
    /**
     * Name of the aggregation bucket corresponding to nested_aggregate_attributes in request
     */
    nested_bucket_name: string;
    /**
     * Bodies of nested aggregation buckets
     */
    nested_buckets: Array<SearchAggregationBucket>;
}