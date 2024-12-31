import Accordion from './Accordion';
import './App.css'

function App() {

  const data = [
    { title: 'Section 1', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, adipisci at. Distinctio veniam quaerat nobis aut veritatis doloremque, officia enim?" },
    { title: 'Section 2', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, pariatur facilis. Accusantium natus officiis blanditiis dolores dolorum id quas corrupti possimus facilis a sed praesentium illum asperiores provident dolor nemo sunt, repudiandae repellendus! Exercitationem recusandae dolore amet repellendus, ad sint." },
    { title: 'Section 3', content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem odio reiciendis aperiam consectetur rerum rem iusto reprehenderit nesciunt nobis aspernatur vitae animi eligendi quaerat nulla, atque ad expedita voluptatem, assumenda laboriosam veritatis officia repellendus quis! Velit consequuntur mollitia ad. Illum quis inventore aliquam, amet ex perspiciatis laboriosam eveniet adipisci atque aliquid sunt, dolorem quos dicta? Iste, eos! Debitis, quibusdam consequuntur?" }
];

  return (
    <>
      <Accordion lists={data}/>
    </>
  )
}

export default App;
