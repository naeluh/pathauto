export interface ConfigurationParameters {
  projectKey?: string;
  clientId?: string;
  clientSecret?: string;
  apiEndpoint?: string;
  authApiEndpoint?: string;
  locale?: string;
  fieldsConfig?: Record<string, Record<string, SkuType | undefined> | undefined>;
}

export type SkuType = 'product' | 'category';