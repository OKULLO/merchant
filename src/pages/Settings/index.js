import Layout from '../../components/Layout';
import Settings from '../../components/Setting';
import { useSelector } from 'react-redux'

export default function Home (){
	// const user = useSelector((state) => state?.auth?.user)

	const user = {
		name: 'Chelsea Hagon',
		email: 'chelsea.hagon@example.com',
		imageUrl:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	}
	

	return (
		<Layout user={user} Component={<Settings user={user}/>}/>

		)
}