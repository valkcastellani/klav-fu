// /*         <div>
//     <span className="user-avatar"
//         onClick={(event) => { menuUser.current && menuUser.current.toggle(event) }}
//         aria-controls="popup_menu_right" aria-haspopup>
//     </span>
//     <Menu model={items} popup ref={menuUser} id="popup_menu_right" popupAlignment="right" />
// </div> */

import React from "react";

// import React, { useRef } from 'react';
// //import { useRouter } from 'next/router';
// import { SlideMenu } from 'primereact/slidemenu';
// import { Avatar } from 'primereact/avatar';
// import { Button } from 'primereact/button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function UserMenu() {
    //     const menuUser = useRef<SlideMenu | undefined>(null);
    //     //const router = useRouter();
    //     const items = [
    //         {
    //             label: 'Options',
    //             items: [
    //                 {
    //                     label: 'Update',
    //                     icon: 'pi pi-refresh'/* ,
    //                     command: () => {
    //                         toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
    //                     } */
    //                 },
    //                 {
    //                     label: 'Delete',
    //                     icon: 'pi pi-times'/*,
    //                      command: () => {
    //                         toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
    //                     } */
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Navigate',
    //             items: [
    //                 {
    //                     label: 'React Website',
    //                     icon: 'pi pi-external-link',
    //                     url: 'https://reactjs.org/'
    //                 },
    //                 {
    //                     label: 'Router',
    //                     icon: 'pi pi-upload'/* ,
    //                     command:(e) => {
    //                         //router.push('/fileupload');
    //                     } */
    //                 }
    //             ]
    //         }
    //     ];

    return (
        <>
        </>
    );
    /*
//         <div className="card flex justify-content-center">
//             <SlideMenu ref={menuUser} model={items} popup viewportHeight={220} menuWidth={175}></SlideMenu>
//             <Button type="button" icon="pi pi-bars" label="Show" onClick={(event) => menuUser.current && menuUser.current.toggle(event)}>
//                 <Avatar icon={<FontAwesomeIcon icon={faUser} />} className="user-avatar-image"
//                     size="large" shape="circle" />
//             </Button>
//         </div>
    */
}
