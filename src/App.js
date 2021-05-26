import { Admin, Resource  } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/users';
import { PostList,PostEdit,PostCreate } from './components/Posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList}/>
      </Admin>
    </div>
  );
}

export default App;
