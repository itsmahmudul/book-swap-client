import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <div>
        <div className=''>Navbar</div>
        <div>
            <ThemeToggle/>
        </div>
        <Button>
            Click
        </Button>
    </div>
  )
}
