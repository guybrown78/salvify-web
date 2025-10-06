import React from 'react'



interface Props {
	title: string
}


const FooterNavigationTitle = ({title}: Props) => {
	return (
		<span className="font-semibold uppercase">
			{title}
		</span>
	)
}

export default FooterNavigationTitle