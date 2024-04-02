import './App.css';
import File_upload_layout from './component/File_upload_layout';
import Result_layout from './component/Result_layout'

function App() {
  return (
    <div className="App">
      <div className='background'>
          <File_upload_layout/>
          <Result_layout/>
      </div>
    </div>
  );
}

export default App;
