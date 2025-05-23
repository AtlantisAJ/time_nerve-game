import { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from 'react-dom';

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {
  const dialogRef = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100) ;


  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      }
    };
  });

  return createPortal(

    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>, document.getElementById('modal')
  );
});

export default ResultModal;

// начиная с React до 19

// export default function ResultModal({ref, result, targetTime}) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2>You {result}</h2>
//       <p>The target time was <strong>{targetTime} seconds.</strong></p>
//       <p>The stopped the timer with <strong>X seconds left.</strong></p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }


// прошлые версии React до 19

// import React from 'react';
//
// const ResultModal = React.forwardRef(function ResultModal({result, targetTime}, ref) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2>You {result}</h2>
//       <p>The target time was <strong>{targetTime} seconds.</strong></p>
//       <p>You stopped the timer with <strong>X seconds left.</strong></p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });
//
// export default ResultModal;
