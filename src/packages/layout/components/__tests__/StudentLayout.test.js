import React from 'react'
import { render, screen } from '@testing-library/react'
import StudentLayout from '../StudentLayout'

describe('StudentLayout', () => {
  it('renders without crashing', () => {
    render(<StudentLayout />)
    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument()
  })
})
