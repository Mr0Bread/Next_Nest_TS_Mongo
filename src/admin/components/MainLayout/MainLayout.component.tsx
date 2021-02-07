import Head from 'next/head';
import MainMenu from 'Components/MainMenu';
import MainWindow from 'Components/MainWindow';

export default function MainLayoutComponent() {
	return (
		<>
			<Head>
				<title>Reagento</title>
			</Head>
			<main className="h-screen flex">
				<MainMenu />
				<MainWindow />
			</main>
		</>
	);
}
