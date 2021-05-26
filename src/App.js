import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./components/users";
import { PostList, PostEdit, PostCreate } from "./components/Posts";
import Dashboard from "./components/Dashboard";
import authProvider from "./auth/authProvider";
import NotFound from "./components/NotFound";
import { createMuiTheme } from "@material-ui/core/styles";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#388e3c",
    },
  },
});
function App() {
  return (
    <div className="App">
      <Admin
        theme={theme}
        catchAll={NotFound}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
      >
        <Resource
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        <Resource name="users" list={UserList} icon={UserIcon} />
      </Admin>
    </div>
  );
}

export default App;
