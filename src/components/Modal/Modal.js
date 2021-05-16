import React, { useCallback, useMemo, useState } from 'react'
import ModalChild from './ModalChild'
import './Modal.css'

const  Modal = () =>{
//*------------------useMemo
const [num,setNum] = useState(0)
const [color,setColor] = useState(false) //Перерендоривание компонента

//Доходим до этой функции и выполняем, через useMemo е вызываем её повторно
const sum = (n) =>{
console.log(num);
return n
}
const countSum = useMemo(()=>sum(num),[num])
//*------------------useMemo



//*------------------useCallback
const [counterOne, setCounter] = useState(0);
const [counterTwo, setCounterTwo] = useState(0);

const updateOne = () => {
   console.log(
   "Не мемоизированая функция"
   );
   
 };

const updateTwo = useCallback(() => {
   console.log(
   "Мемоизированая функция"
   );
}, [counterTwo]);
//*------------------useCallback
   const [isOpen, setIsOpen] = useState(false)
      return (
         <>
            <button onClick={() => setIsOpen(true)}>
               Открыть модальное окно
            </button>

            {isOpen && (
               <div className='modal'>
                  <div className='modal-body'>
                     <h1>Заголовок</h1>
                     <p>Содержимое модального окна</p>

                     <span style={{color: color ? 'red' : 'blue'}} onClick={()=>{setColor(!color)}}>Изменить цвет {countSum}</span>
                     <br/><br/><br/>

                     {/* useMemo */}
                     <button onClick={() =>setNum(num+1)}>Добавить +1</button>
                     <button onClick={() =>setNum(num-1)}>Отнять -1</button>
                     {/* useMemo */}

                     {/* useCallback */}
                     <br/><br/><br/>
                     +Знаечние {counterOne}
                     <br/><br/>
                     -Знаечние {counterTwo}
                     <br/><br/>
                     <button onClick={() => setCounter(counterOne + 1)}>useCallback (false) +1</button>
                     <button onClick={() => setCounterTwo(counterTwo - 1)}>useCallback (true)-1</button>
                     {/* useCallback */}

                     <br/><br/>
                     <button onClick={() => setIsOpen(false)}>
                        Закрыть
                     </button>

                     <ModalChild updateOne ={updateOne} updateTwo ={updateTwo} />

                  </div>
               </div>
            )}
         </>
      )
}

export default Modal
