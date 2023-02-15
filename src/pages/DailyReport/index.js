import Layout from '../../components/Layout';
import DailyReport from '../../components/DailyReport';
import { useSelector } from 'react-redux'

export default function Home (){

	const user = useSelector((state) => state?.auth?.user)
	

	
	

	return (
		<Layout user={user} Component={<DailyReport />}/>

		)
}