/** Props drilling이 일어날 때 */
function App() {
  const data = {
    listItem: ['a', 'b', 'c'],
    title: 'non provider pattern',
    text: 'about provider pattern',
  };

  return (
    <div>
      <SideBar data={data} />
    </div>
  );
}

const SideBar = ({ data }) => <List data={data} />;
const List = ({ data }) => <ListItem data={data} />;
const ListItem = ({ data }) => <span>{data.listItem}</span>;

const Content = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
);
const Header = ({ data }) => <div>{data.title}</div>;
const Block = ({ data }) => <Text data={data} />;
const Text = ({ data }) => <h1>{data.text}</h1>;
/** provider pattern이 없을 때, 어마어마한 props drilling이 일어나고 있다. */
