import { Route, Switch } from 'react-router-dom';

import Home from './components/home';
import BlogsPage from './components/blogsPage';
import Error from './components/error';

function App() {
    return (
        <>
            <main>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/blogs" component={BlogsPage} exact />
                    <Route component={Error} />
                </Switch>
            </main>
        </>
    );
}

export default App;
