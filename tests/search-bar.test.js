import React from 'react';
import '@testing-library/jest-dom';
import SearchBar from '../src/components/search-bar';
import { render, screen, fireEvent } from '@testing-library/react';


describe('Testing searchBar', () => {
    describe('searchBar', () => {

        test('renders without errors', () => {
            render(<SearchBar onSearchChange={() => {}} />);
          
            const searchInput = screen.getByPlaceholderText('Search'); 
            expect(searchInput).toBeInTheDocument();
          })

        test('calls handleSearchChange when the input value changes', () => {
            const mockHandleSearchChange = jest.fn();
            const { getByPlaceholderText } = render(
                <SearchBar onSearchChange={mockHandleSearchChange} />
            );
            const searchInput = getByPlaceholderText('Search');
        
            fireEvent.change(searchInput, { target: { value: 'product 1' } });
        
            expect(mockHandleSearchChange).toHaveBeenCalledWith('product 1');
        });
    });
 });
  
