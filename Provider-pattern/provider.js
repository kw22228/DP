const DataContext = React.createContext();

function App() {
  const data = {
    listItem: ['a', 'b', 'c'],
    title: 'non provider pattern',
    text: 'about provider pattern',
  };

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  );
}

const SideBar = () => <List />;
const List = () => <ListItem />;
const ListItem = () => {
  const { data } = React.useContext(DataContext);

  return <span>{data.listItem}</span>;
};

const Content = () => (
  <div>
    <Header />
    <Block />
  </div>
);
const Header = () => {
  const { data } = React.useContext(DataContext);

  return <div>{data.title}</div>;
};
const Block = () => <Text />;
const Text = () => {
  const { data } = React.useContext(DataContext);

  return <h1>{data.text}</h1>;
};
