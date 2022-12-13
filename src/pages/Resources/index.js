import Layout from '../../components/Layout';
import Dashboard from '../../components/Dashboard';
import { useSelector } from 'react-redux'

export default function Home (){
	const user = useSelector((state) => state?.auth?.user)

	return (
		<Layout user={user} Component={<Dashboard user={user}/>}/>

		)
}