import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import FilterButtons from '../src/components/filter-butons';

describe('Testing FilterButtons', () => {
    describe('FilterButton', () => {

        test('renders without errors', () => {
            render(<FilterButtons onFilterChange={() => {}} />);
        });

        test('Sort by" option is in the document', () => {
            const { getByText } = render(<FilterButtons onFilterChange={() => {}} />);

            // sort by esta en el document 
            expect(getByText('Sort by')).toBeInTheDocument();
        });

        test('calls the onFilterChange function with "A-Z" when "A-Z" option is selected', () => {
            const onFilterChangeMock = jest.fn();
            const { getByLabelText } = render(<FilterButtons onFilterChange={onFilterChangeMock} />);
            const selectElement = getByLabelText('Large select example');

            // Simula un cambio en la selección para la opción "A-Z"
            fireEvent.change(selectElement, { target: { value: 'alphabetical' } });
            expect(onFilterChangeMock).toHaveBeenCalledWith('alphabetical');
        });

        test('calls the onFilterChange function with "Actives" when "Actives" option is selected', () => {
            const onFilterChangeMock = jest.fn();
            const { getByLabelText } = render(<FilterButtons onFilterChange={onFilterChangeMock} />);
            const selectElement = getByLabelText('Large select example');

            // Simula un cambio en la selección para la opción "Actives"
            fireEvent.change(selectElement, { target: { value: 'active' } });
            expect(onFilterChangeMock).toHaveBeenCalledWith('active');
        });

        test('calls the onFilterChange function with "Inactives" when "Inactives" option is selected', () => {
            const onFilterChangeMock = jest.fn();
            const { getByLabelText } = render(<FilterButtons onFilterChange={onFilterChangeMock} />);
            const selectElement = getByLabelText('Large select example');

            // Simula un cambio en la selección para la opción "Inactives"
            fireEvent.change(selectElement, { target: { value: 'inactive' } });
            expect(onFilterChangeMock).toHaveBeenCalledWith('inactive');
        });
    });
});

