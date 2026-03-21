import { Container } from '@/components/Container'
import React from 'react'
import BookADemo from '@/components/forms/BookADemo'
const BookADemoPage = () => {
	return (
		<section
			id="book-a-demo"
			aria-labelledby="book-a-demo-title"
			className="overflow-hidden py-6 lg:py-12"
		>
			<Container>	
				{/* <Demo /> */}
				<BookADemo />
			</Container>
		</section>
	)
}

export default BookADemoPage