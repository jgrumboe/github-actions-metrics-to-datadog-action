import { getInput } from '@actions/core';

export interface Inputs {
  githubToken: string;
  datadogSite: string;
  datadogApiKey: string;
  enableWorkflowMetrics: boolean;
  enableBillingMetrics: boolean;
  enableRepositoryWorkflowsBillingMetrics: boolean;
}

export const getInputs = (): Inputs => {
  const githubToken = getInput('github-token');
  const datadogSite = getInput('datadog-site') || 'api.datadoghq.com';
  const datadogApiKey = getInput('datadog-api-key', { required: true });
  const enableWorkflowMetrics =
    getInput('enable-workflow-metrics', { required: true }) === 'true';
  const enableOwnerMetrics =
    getInput('enable-billing-metrics', { required: true }) === 'true';
  const enableRepositoryWorkflowsBillingMetrics =
    getInput('enable-repository-workflows-billing-metrics', {
      required: true,
    }) === 'true';

  return {
    githubToken,
    datadogSite,
    datadogApiKey,
    enableWorkflowMetrics,
    enableBillingMetrics: enableOwnerMetrics,
    enableRepositoryWorkflowsBillingMetrics,
  };
};
