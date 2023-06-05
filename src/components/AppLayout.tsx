import { AppShell, Navbar, Header, Title, Container } from '@mantine/core';
import { ReactFCWithChildren } from '../react';

export const AppLayout: ReactFCWithChildren = ({ children }) => {
	return (
		<AppShell
			padding="md"
			navbar={
				<Navbar width={{ base: 300 }} height="100vh" p="xs">
					{/* Navbar content */}
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
