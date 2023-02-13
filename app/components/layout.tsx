import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

interface Props {
	children: ReactNode
}

function Layout(props: Props) {
	return (
		<>
			<div className='fixed inset-0 flex justify-center sm:px-8'>
				<div className='flex w-full max-w-7xl lg:px-8'>
					<div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
				</div>
			</div>
			<div className='relative'>
				<Navbar />
				<main className='flex items-center justify-center'>
					<div className='mx-auto max-w-7xl lg:px-8'>
						<div className='relative px-4 sm:px-8 lg:px-12'>
							<div className='prose mx-auto max-w-2xl dark:prose-invert lg:max-w-5xl'>
								{props.children}
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
