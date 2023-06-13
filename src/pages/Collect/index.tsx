import { useQuery } from 'react-query';
import { Text } from '@mantine/core';
import { AppLayout } from '@/components/AppLayout';
import { getData } from '@/services/api';

export const Collect = () => {
  // TODO: more advanced data + components to display it
  const { isLoading, data } = useQuery('object', getData, {
    select: res => res.data.title,
    refetchOnWindowFocus: false,
  });

  // TODO: Loader
  if (isLoading) return <p>Loading...</p>;

  return (
    <AppLayout>
      <Text>{data}</Text>
    </AppLayout>
  );
};
