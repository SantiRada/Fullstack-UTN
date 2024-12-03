import './MainContent.css';

import { CardProfile } from './CardProfile';
import { AddToFeed } from './AddToFeed';

export function MainContent(){
    return(
        <main className="container">
            <CardProfile />
            <div></div>
            <AddToFeed count={4} />
            <div></div>
            <div></div>
        </main>
    );
}