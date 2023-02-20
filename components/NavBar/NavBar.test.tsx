import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
	it('Should', () => {
		render(<NavBar />);

		const isNavBar = screen.getByRole('heading', { name: /navbar/i });
		expect(isNavBar).toBeInTheDocument();
	});
});
