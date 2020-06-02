import React from 'react';
import { Link } from 'react-router-dom';
 
function Home() {
    return (
        <div className="view-home">
            <h1>Welcome to bike rental!</h1>
            <ul>
            {
                ['br-001', 'br-002', 'br-oo3'].map((id) => (<li>
                    <Link to={`/stations/${id}`}>Station {id}</Link>
                </li>))
            }
            </ul>

        </div>
    );
}

export default Home;
