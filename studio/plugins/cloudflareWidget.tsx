import { useCallback, useEffect, useState } from 'react';
import { DashboardWidgetContainer } from '@sanity/dashboard';
import { Box, Card, Flex, Spinner, Stack, Text } from '@sanity/ui';

type DeploymentStatus = 'success' | 'failure' | 'active' | 'idle' | 'canceled';

type CloudflareWidgetConfig = {
  workerUrl: string;
  siteUrl?: string;
  layout?: { width: 'small' | 'medium' | 'large' | 'full' };
};

type CloudflareDeployment = {
  id: string;
  project_name: string;
  created_on: string;
  latest_stage: { status: DeploymentStatus };
  deployment_trigger?: {
    metadata?: {
      branch?: string;
      commit_message?: string;
    };
  };
};

type CloudflareApiResponse = {
  success: boolean;
  result: CloudflareDeployment[];
  errors?: { message: string }[];
};

type DashboardWidget = {
  name: string;
  component: () => React.JSX.Element;
  layout: { width: 'small' | 'medium' | 'large' | 'full' };
};

const STATUS_COLOR: Record<DeploymentStatus, string> = {
  success: '#3c9f6e',
  failure: '#e05c4b',
  active: '#f0a500',
  idle: '#888',
  canceled: '#888',
};

const STATUS_LABEL: Record<DeploymentStatus, string> = {
  success: '✅ Deployed',
  failure: '❌ Failed',
  active: '🔄 Building...',
  idle: '⏸ Idle',
  canceled: '🚫 Canceled',
};

const timeAgo = (dateStr: string): string => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
};

const CloudflareDeployWidget = ({ config }: { config: CloudflareWidgetConfig }) => {
  const [deployments, setDeployments] = useState<CloudflareDeployment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDeployments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!config.workerUrl) throw new Error('Missing workerUrl in cloudflareWidget config');

      const res = await fetch(config.workerUrl);
      const data = (await res.json()) as CloudflareApiResponse;

      if (!data.success) throw new Error(data.errors?.[0]?.message ?? 'API error');
      setDeployments(data.result);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [config.workerUrl]);

  useEffect(() => {
    fetchDeployments();
    const interval = setInterval(fetchDeployments, 30000);
    return () => clearInterval(interval);
  }, [fetchDeployments]);

  const footer = (
    <Flex align="center" gap={3}>
      <button onClick={fetchDeployments} style={{ padding: 10, fontSize: 12, color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}>
        ↻ Refresh
      </button>
      {config.siteUrl && (
        <a href={config.siteUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#888' }}>
          Visit Website ↗
        </a>
      )}
    </Flex>
  );

  return (
    <DashboardWidgetContainer header="Cloudflare Pages Deploys" footer={footer}>
      <Box padding={4}>
        {loading && (
          <Flex justify="center" padding={4}>
            <Spinner />
          </Flex>
        )}

        {error && (
          <Card padding={3} radius={2} tone="critical">
            <Text size={1}>Error: {error}</Text>
          </Card>
        )}

        {!loading && !error && (
          <Stack space={3}>
            <Text size={1} style={{ color: '#888', paddingBottom: 10 }}>
              Because this website is statically built, it needs to be re-build and re-deployed to see the changes when content is published. You can
              check if the build was successful:
            </Text>

            {deployments.map((d) => {
              const status = d.latest_stage.status;

              return (
                <Card key={d.id} padding={3} radius={2} shadow={1}>
                  <Flex justify="space-between" align="flex-start">
                    <Stack space={2} style={{ flex: 1 }}>
                      <Flex align="center" gap={2}>
                        <Text size={1} style={{ color: STATUS_COLOR[status] ?? '#888' }} weight="semibold">
                          {STATUS_LABEL[status] ?? status}
                        </Text>
                      </Flex>
                    </Stack>
                    <Flex direction="column" align="flex-end" gap={2}>
                      <Text size={1} style={{ color: '#888' }}>
                        {timeAgo(d.created_on)}
                      </Text>
                    </Flex>
                  </Flex>
                </Card>
              );
            })}
          </Stack>
        )}
      </Box>
    </DashboardWidgetContainer>
  );
};

export const cloudflareWidget = (config: CloudflareWidgetConfig): DashboardWidget => ({
  name: 'cloudflare-pages',
  component: () => <CloudflareDeployWidget config={config} />,
  layout: config.layout ?? { width: 'medium' },
});
