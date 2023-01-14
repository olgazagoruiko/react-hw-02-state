
import './App.css';
import ColorPicker from './components/colorpicker/ColorPicker';
import Counter from './components/counter/Counter';
import Dropdown from './components/menu/Dropdown';

 const colorPickerOptions = [
    { label: "red", color: "#f44336" },
    { label: "green", color: "#40ff00" },
    { label: "blue", color: "#0080ff" },
    { label: "yellow", color: "#ffff00" },
  ];
function App() {
  return (
    <div className="Container">
      <Counter />
      <ColorPicker options={colorPickerOptions} />
      <Dropdown />
    </div>
  );
}

export default App;
