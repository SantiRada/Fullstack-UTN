import { HiInformationCircle } from "react-icons/hi";

import { UserItem } from './UserItem';

export function AddToFeed({count}) {
    return(
        <div className="add-to-feed card">
            <h3>Añadir a tu feed <HiInformationCircle color="191919" /></h3>
            <div className="list-users">
                { Array.from({length: count}).map((_, index) => (
                    <UserItem />
                ))
                }
                
            </div>
        </div>
    );
}