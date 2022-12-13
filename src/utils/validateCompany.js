
import { GetCompanyDetail }  from '../hooks/reactQuery'


  const validateComapany = (user)=>{

		const authorizedToPost = ['Travel Agency','Tour Operator','Destination Management Company']


		const { data:company } = GetCompanyDetail(user?.public_id)

		const IsCompanyRegistered = company?.details && authorizedToPost.includes(company?.details?.business_type) ? true : false

		return IsCompanyRegistered;

  }

 export default validateComapany;