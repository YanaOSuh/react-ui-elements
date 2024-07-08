import './style.css';

const Content = ({ setIsOpen }) => {

    return(<div className='modal_content'>
        <p>Modal CONTENT</p>
        <button onClick={() => setIsOpen(false)}>Close modal</button>
    </div>
    )
} 
export default Content;