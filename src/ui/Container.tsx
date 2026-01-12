import { type ReactNode } from 'react'

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='pt-1'>
                {children}
            </div>
        </div>
    )
}
