import { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  SearchIcon,
} from '@heroicons/react/solid'
import {
  BellIcon,
  FireIcon,
  UserGroupIcon,
  SunIcon,
  CogIcon,
  GiftIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon

} from '@heroicons/react/outline'

import { HOME_PAGE, ORDERS_PAGE,MENU_PAGE,DAILY_REPORT_PAGE,REVENUE_PAGE,SETTINGS_PAGE } from '../constants/history.constants'



const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Account Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communities = [
  { name: 'Integrations', href: '#' },
  { name: 'Dine in QR Menu', href: '#' },

]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Layout({Component, user}) {

  const navigation = [
    { name: 'Overview', href: HOME_PAGE, icon: ChartBarIcon, current: true },
    { name: 'Daily Report', href: DAILY_REPORT_PAGE(user?.merchantId), icon: SunIcon, current: false },
    { name: 'Orders', href: ORDERS_PAGE, icon: FireIcon, current: false },
    { name: 'Revenue', href: REVENUE_PAGE, icon: CurrencyDollarIcon, current: false },
    { name: 'Menu', href: MENU_PAGE, icon: FireIcon, current: false },
    { name: 'Customers', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Promotions', href: '#', icon: GiftIcon, current: false },
    { name: 'Team', href: '#', icon: UserCircleIcon, current: false },
  
    { name: 'Settings', href: SETTINGS_PAGE, icon: CogIcon, current: false },
    { name: 'Support', href: '#', icon: QuestionMarkCircleIcon, current: false },
    
  ]
  
  return (
    <>

 
  
      <div className="min-h-full   overflow-hidden bg-slate-50">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible'
            )
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="#">
                        <img
                          className="block h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                          alt="Your Company"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <SearchIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                       
                        <BellIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
                      Go Premium
                    </a>
                    <a
                      href="#"
                      className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </a>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-5 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block py-2 px-4 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    {/* <a
                      href="#"
                      className="ml-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      New Post
                    </a> */}
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                        'block rounded-md py-2 px-3 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                  >
                    New Post
                  </a>

                  <div className="mt-6 flex justify-center">
                    <a href="#" className="text-base font-medium text-gray-900 hover:underline">
                      Go Premium
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className="py-10 max-w-4xl  mx-auto sm:px-2 lg:max-w-7xl xl:max-w-8xl  flex flex-1  justify-center ">
          
          <div className="hidden lg:flex lg:w-64 lg:flex-col max-w-7xl lg:px-8  lg:inset-y-0">
            <div className="hidden lg:col-span-2 lg:block xl:col-span-2">
              <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                <div className="space-y-1 pb-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-50',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="pt-10">
                  <p className="px-3 text-sm font-medium text-gray-500" id="communities-headline">
                    App Configurations
                  </p>
                  <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                    {communities.map((community) => (
                      <a
                        key={community?.name}
                        href={community?.href}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <span className="truncate">{community?.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className=" flex flex-col flex-1   ">
          {Component}
          </div>
        </div>
      </div>
    </>
  )
}