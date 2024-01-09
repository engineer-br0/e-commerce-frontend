import { Children, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const Dropdown: React.FC<{
    children: React.ReactNode,
    toggleFunc: () => void,
    arr:
    {
        field: string,
        path: string
    }[]
}> = (
    {
        children,
        toggleFunc,
        arr
    }) => {
        return (
            <div className='relative z-50'>
                <Menu as="div" className="relative inline-block text-left z-10">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50">
                            {children}
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {arr.map((obj) => {
                                    return (
                                        <Menu.Item>
                                            {({ active: any }) => (
                                                <Link
                                                    to={obj.path}
                                                    className="
                                                    bg-gray-100 text-gray-900
                                                    block px-4 py-2 text-sm"
                                                >
                                                    {obj.field}
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    )
                                })}


                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        );
    };

export default Dropdown;
