import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import EditButton from '../src/components/edit-button';

describe('testing editButton', () => {
    describe('EditButton', () => {

        test('renders the "Edit" button by default', () => {
            const { getByText } = render(<EditButton product={{ id: 1, name: 'Product 1' }} />);
            expect(getByText('Edit')).toBeInTheDocument();
        });

        test('calls the onEdit function when "Edit" button is clicked', () => {
            const mockOnEdit = jest.fn();
            const { getByText } = render(<EditButton product={{ id: 1, name: 'Product 1'}} onEdit={mockOnEdit}/>);
            
            fireEvent.click(getByText('Edit'));
            expect(mockOnEdit).toHaveBeenCalledWith({ id: 1, name: 'Product 1' });
        });

        test('renders the "Save" button when editing', () => {
            const { getByText } = render(<EditButton product={{ id: 1, name: 'Product 1' }} onEdit={() => {}} />);

            fireEvent.click(getByText('Edit'));
            expect(getByText('Save')).toBeInTheDocument();
        });

        test('calls the onEdit function when "Save" button is clicked', () => {
            const mockOnEdit = jest.fn();
            const { getByText } = render(<EditButton product={{ id: 1, name: 'Product 1' }} onEdit={mockOnEdit}/>);

            fireEvent.click(getByText('Edit'));
            fireEvent.click(getByText('Save'));
            expect(mockOnEdit).toHaveBeenCalledWith({ id: 1, name: 'Product 1' });
        });
    });
});
