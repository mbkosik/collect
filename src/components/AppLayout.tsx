import {
  AppShell,
  Navbar,
  Header,
  Title,
  Container,
  Text,
  Button,
} from '@mantine/core';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/store/auth-store';
import type { ReactFCWithChildren } from '@/react.d.ts';
import packages from '@/../package.json';

export const AppLayout: ReactFCWithChildren = ({ children }) => {
  const { version } = packages;
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogout = useCallback(() => {
    navigate('/');
    dispatch({
      type: 'logout',
    });
  }, [navigate, dispatch]);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height="100vh" p="xs">
          <Text>{version}</Text>
          <Button variant="subtle" onClick={handleLogout}>
            Logout
          </Button>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Title order={3}>Collect</Title>
        </Header>
      }
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}>
      <Container>{children}</Container>
    </AppShell>
  );
};
