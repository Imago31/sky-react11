

function ButtonParag() {
    
    let paragHided = false;
    const hideBlock = () => {
        const parag = document.querySelector(".parag");
        parag.classList.toggle("hideClass");
        document.querySelector("button").innerText = "Показать";
        if(paragHided){
            document.querySelector("button").innerText = "Скрыть";
            paragHided = false;
        }
        else{
            paragHided = true;
        }
    }; 

    const boxBlueClick = () => {
      document.querySelector(".boxBlue").style = "display:none"
      document.querySelector(".boxGreen").style = "display:block"
    }; 
    const boxGreenClick = () => {
      document.querySelector(".boxBlue").style = "display:block"
      document.querySelector(".boxGreen").style = "display:none"
    }; 

  return (
    <div className='buttonParag'>
        <button type="button" onClick={hideBlock}>
          Скрыть
        </button>
        <p className='parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="boxes">
        <div className="box boxBlue" onClick={boxBlueClick}></div>
        <div className="box boxGreen" onClick={boxGreenClick}></div>
      </div>
    </div>
  )
}

export default ButtonParag