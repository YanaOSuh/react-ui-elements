import { useEffect, useState } from 'react';
import './App.css';
import bgalert from './bg-alert.jpg';

import { Accordion } from './Accordion/Accordion';

import Tabs from './Tabs/Tabs';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';

import Modal from './Modal/Modal';
import Content from './Modal/Content';

import LoaderPAge from './Loader/LoaderPAge';

import Swal from 'sweetalert2';

function App() {

  const [activeTab, setActiveTab] = useState(0); //tabs

  const [isOpen, setIsOpen] = useState(false); //modal

  const [stateLoader, setStateLoader] = useState(true); //loader
  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 3000);
    return() => clearTimeout(timer)
  }, [])

  const handleAlert =() => {
    Swal.fire({
      title: "Custom ALERT",
      imageUrl: {bgalert},
      text: "alert custom",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#BCA9F5",
      backdrop: `
        rgba(0,0,123,0.4)
      `
    });
  }

  return (
    <div className="App">

      <div className='accordion-section'>
        <Accordion />
      </div>

      <div className='tabs-section'>
        <Tabs setActiveTab={setActiveTab} />
        {activeTab === 0 && <TabInfoOne/>}
        {activeTab === 1 && <TabInfoTwo />}
        {activeTab === 2 && <TabInfoThree />}
      </div>

      <div className='modal-section'>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && 
        <Modal setIsOpen={setIsOpen} >
          <Content setIsOpen={setIsOpen} />
        </Modal>
        }
      </div>

      <button className='alert-btn' onClick={handleAlert}>ALERT</button>

      <div className='loader-section'>
        {stateLoader && <LoaderPAge />}
      </div>
    </div>
  );
}

export default App;
