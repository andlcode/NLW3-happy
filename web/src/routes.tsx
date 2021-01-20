import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './components/Landing';
import OrphanagesMap from './components/OrphanagesMap';
function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/app"  component={OrphanagesMap} />
        </BrowserRouter>
    );
}

export default Routes;