import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Comment from '../views/Comment'
import Communication from '../views/Communication'
import antd from '../views/antd'
import NotFound from '../views/404';

function IndexRouter(props) {
    return (
        <HashRouter>
            {props.children}
            <Switch>
                <Route path='/comment' component={Comment}></Route>
                <Route path='/communication' component={Communication}></Route>
                <Route path='/antd' component={antd}></Route>
                <Redirect from='/' to='/comment' exact></Redirect>
                <Route component={NotFound}></Route>
            </Switch>
        </HashRouter>
    );
}

export default IndexRouter;
