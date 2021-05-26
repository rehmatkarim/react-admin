import { Admin, Resource  } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users';
import { PostList,PostEdit,PostCreate } from './components/Posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon}/>
      </Admin>
    </div>
  );
}

export default App;
