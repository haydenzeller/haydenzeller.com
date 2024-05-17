'use client'
interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
    const handleClose = () => {
      onClose(); // Call the onClose function passed from the parent component to close the modal
    };
  
    return (
        <dialog id="infoModal" open={isOpen} onClose={onClose} className="modal  bg-gradient-to-r from-indigo-400 to-orange-400">
            <div className="modal-box mx-auto bg-white">
            <h3 className="font-bold text-black text-lg">Hello!</h3>
            <p className="text-black font-bold text-lg">I put together this website to explore the capabilities of IPFS and .eth routing. It&apos;s built with NextJS, Tailwind, DaisyUI, and is hosted on <span className="bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text"><a href="https://fleek.xyz" target="_blank">fleek.xyz</a></span>. You can check out the source code on my <span className="bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text"><a href="https://github.com/haydenzeller/haydenzeller.com.git" target="_blank">GitHub</a></span>:)</p>
            <br/>
            <p className="font-bold text-black text-lg">Routes to this site:</p>
            <ul>
                <li><a className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text" href="https://haydenzeller.com">haydenzeller.com</a></li>
                <li><a className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text" href="https://haydenzeller.eth.link">haydenzeller.eth.link</a></li>
                <li><a className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text" href="https://haydenzeller.eth.limo">haydenzeller.eth.limo</a></li>
                <br/>
                <li><p className="font-bold text-black text-lg">If your browser supports .eth try this:</p></li> 
                <li><a className="font-bold text-lg bg-gradient-to-r from-indigo-500 via-green-500 to-violet-600 text-transparent bg-clip-text" href="https://haydenzeller.eth">haydenzeller.eth</a></li> 
            </ul>
            <div className="modal-action">
                {/* Use onClick to handle the close button */}
                <button className="btn" onClick={handleClose}>
                    <p className="text-white font-bold text-xl">Close</p>
                </button>
            </div>
            </div>
        </dialog>
    );
  };
  
  export default InfoModal;
  