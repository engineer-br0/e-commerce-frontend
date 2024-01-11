import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

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
        const navigate = useNavigate();
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef<HTMLButtonElement>(null);

        const handleToggle = () => {
            setOpen((prevOpen) => !prevOpen);
        };

        const handleClose = (event: Event | React.SyntheticEvent) => {
            if (
                anchorRef.current &&
                anchorRef.current.contains(event.target as HTMLElement)
            ) {
                return;
            }

            setOpen(false);
        };

        function handleListKeyDown(event: React.KeyboardEvent) {
            if (event.key === 'Tab') {
                event.preventDefault();
                setOpen(false);
            } else if (event.key === 'Escape') {
                setOpen(false);
            }
        }

        // return focus to the button when we transitioned from !open -> open
        const prevOpen = React.useRef(open);
        React.useEffect(() => {
            if (prevOpen.current === true && open === false) {
                anchorRef.current!.focus();
            }

            prevOpen.current = open;
        }, [open]);

        return (
            <Stack direction="row" spacing={2}>
                <div>
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        {children}
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            {arr.map(obj => {
                                                return (
                                                    <MenuItem onClick={(e) => {
                                                        navigate(obj.path)
                                                        handleClose(e)
                                                    }
                                                    }>{obj.field}</MenuItem>
                                                )
                                            })
                                            }
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Stack>
        );
    }

export default Dropdown;

// // import { Children, Fragment, useState } from 'react';
// // import { Menu, Transition } from '@headlessui/react';
// // import { Link } from 'react-router-dom';

// // const Dropdown: React.FC<{
// //     children: React.ReactNode,
// //     toggleFunc: () => void,
// //     arr:
// //     {
// //         field: string,
// //         path: string
// //     }[]
// // }> = (
// //     {
// //         children,
// //         toggleFunc,
// //         arr
// //     }) => {

// //         const [isOpen, setIsOpen] = useState<boolean>(false);

// //         const toggle = () => {
// //             setIsOpen(old => !old);
// //         }

// //         const transClass = isOpen
// //             ?
// //             "flex"
// //             :
// //             "hidden";
// //         return (
// //             <>
// //                 <div
// //                     className="relative inline-block text-left"
// //                 >
// //                     <button
// //                         onClick={toggle}
// //                         className="w-12 h-12 p-1 relative group rounded-full overflow-hidden focus:outline-none"
// //                     >
// //                         {children}
// //                     </button>
// //                     {isOpen && (
// //                         <div className=" origin-top-right absolute right-0 mt-3 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
// //                             <div className="py-1">
// //                                 <a
// //                                     href="/profile"
// //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                                     onClick={toggle}
// //                                 >
// //                                     View Profile
// //                                 </a>
// //                                 <a
// //                                     href="/profile"
// //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                                     onClick={toggle}
// //                                 >
// //                                     View Profile
// //                                 </a>
// //                                 <a
// //                                     href="/profile"
// //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                                     onClick={toggle}
// //                                 >
// //                                     View Profile
// //                                 </a>
// //                                 <a
// //                                     href="/profile"
// //                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                                     onClick={toggle}
// //                                 >
// //                                     View Profile
// //                                 </a>
// //                                 {/* <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
// //                                     <button onClick={() => { toggle }}>
// //                                         Logout
// //                                     </button>
// //                                 </div> */}
// //                             </div>
// //                         </div>
// //                     )}
// //                 </div>
// //             </>
// //             // <div className='relative z-50'>
// //             //     <Menu as="div" className="relative inline-block text-left z-10">
// //             //         <div>
// //             //             <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50">
// //             //                 {children}
// //             //             </Menu.Button>
// //             //         </div>

// //             //         <Transition
// //             //             as={Fragment}
// //             //             enter="transition ease-out duration-100"
// //             //             enterFrom="transform opacity-0 scale-95"
// //             //             enterTo="transform opacity-100 scale-100"
// //             //             leave="transition ease-in duration-75"
// //             //             leaveFrom="transform opacity-100 scale-100"
// //             //             leaveTo="transform opacity-0 scale-95"
// //             //         >
// //             //             <div className='relatife z-50'>
// //             //                 <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //             //                     <div className="py-1">
// //             //                         {arr.map((obj) => {
// //             //                             return (
// //             //                                 <Menu.Item>
// //             //                                     {({ active: any }) => (
// //             //                                         <Link
// //             //                                             to={obj.path}
// //             //                                             className="
// //             //                                         bg-gray-100 text-gray-900
// //             //                                         block px-4 py-2 text-sm"
// //             //                                         >
// //             //                                             {obj.field}
// //             //                                         </Link>
// //             //                                     )}
// //             //                                 </Menu.Item>
// //             //                             )
// //             //                         })}


// //             //                     </div>
// //             //                 </Menu.Items>
// //             //             </div>
// //             //         </Transition>
// //             //     </Menu>
// //             // </div>
// //         );
// //     };

// // export default Dropdown;
