
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/solid'

import {greetings} from '../../utils/dateUtils'

const cards = [
  { name: 'Account balance', href: '#', icon: ScaleIcon, amount: 'UGX 0' },
  { name: 'Total Articles', href: '#', icon: ScaleIcon, amount: '50' },
  { name: 'Users', href: '#', icon: UsersIcon, amount: '50' },
  { name: 'Sermons', href: '#', icon: UsersIcon, amount: '50' },
  // More items...
]
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({user}){
  

	return (
		   <main className="flex-1 pb-8">
            {/* Page header */}
            <div className="mx-auto max-w-5xl px-4 py-6 sm:py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className=" text-center sm:text-left">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Welcome, Supu!
                    </h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                      Let's write a new blog post! 🎉
                    </p>
                  </div>
                  </div>
                  </div>
          </main>
		)
}