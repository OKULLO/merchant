import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@headlessui/react'
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
  PlusIcon
} from '@heroicons/react/solid'

const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]




const tabs = [
  { name: 'Sermons', href: '#', id: 1 },
  { name: 'Blog', href: '#', id: 2 },
  { name: 'Podcasts', href: '#', id: 3 },
  { name: 'Events', href: '#', id: 4 },
]



export default function Dashboard(){
 
   const [enabled, setEnabled] = useState(false)



	return (
		 
          
                    <div>
                   {people.length>0 ?(  
                      <div className="px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                      <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">All Blog posts</h1>
                        <p className="mt-2 text-sm text-gray-700">
                          A list of all published blog posts
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                          Add new post
                        </button>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col">
                      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                    Blog title
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Category
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Status
                                  </th>
                                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    posted by
                                  </th>
                                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">delete</span>
                                    
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                  <tr key={person.email}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                      <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                          <img className="h-12 w-12 rounded-lg" src={person.image} alt="" />
                                        </div>
                                        <div className="ml-4">
                                          <div className="font-medium text-gray-900">{person.name}</div>
                                          <div className="text-gray-500">Posted on 6th dec 2022</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                      <div className="text-gray-900">{person.title}</div>
                                      <div className="text-gray-500">{person.department}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                        <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
      <Switch.Label as="span" className="ml-3">
        <span className="text-sm font-medium text-gray-900">Published</span>
        
      </Switch.Label>
    </Switch.Group>
                                      </span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3  pr-4 text-right text-sm font-medium sm:pr-6">
                                      <a href="#" className="text-red-600 mx-4 hover:text-indigo-900">
                                        Delete<span className="sr-only">, {person.name}</span>
                                      </a>
                                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        View<span className="sr-only">, {person.name}</span>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    ):(
                      <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          vectorEffect="non-scaling-stroke"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                      </svg>
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No Blog Yet</h3>
                      <p className="mt-1 text-sm text-gray-500">Get started by publishing a new blog post</p>
                      <div className="mt-6">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                          New post
                        </button>
                      </div>
                    </div>
                    )}
                
                
               
                  
                </div>
     
		)
}