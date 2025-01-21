import PuzzleImage from "./PuzzleImage";
import { useState } from "react";
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';

function Puzzle() {
    let p1 = { num: 1, img: img1 };
    let p2 = { num: 2, img: img2 };
    let p3 = { num: 3, img: img3 };
    let p4 = { num: 4, img: img4 };
    let p5 = { num: 5, img: img5 };
    let p6 = { num: 6, img: img6 };
    let p7 = { num: 7, img: img7 };
    let p8 = { num: 8, img: img8 };
    let p9 = { num: 9 };

    const [p, setP] = useState([p1, p2, p3, p4, p5, p6, p7, p8, p9]);
    const [won, setWon] = useState(false);

    function shufflePuzzle() {
        let shuffled = [...p];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setP(shuffled);
        setWon(false);
    }

    function checkWin(pieces) {
        return pieces.every((piece, index) => piece.num === index + 1);
    }

    function isAdjacent(index1, index2, gridSize) {
        const row1 = Math.floor(index1 / gridSize);
        const col1 = index1 % gridSize;
        const row2 = Math.floor(index2 / gridSize);
        const col2 = index2 % gridSize;

        return (
            (Math.abs(row1 - row2) === 1 && col1 === col2) ||
            (Math.abs(col1 - col2) === 1 && row1 === row2)
        );
    }

    function changeHandler(key) {
        let clone = [...p];
        let pos;
        let temp = clone[key];
        for (let i = 0; i < p.length; i++) {
            if (p[i].num === 9) {
                pos = i;
                break;
            }
        }
        if (isAdjacent(key, pos, 3)) {
            clone[key] = clone[pos];
            clone[pos] = temp;
            setP(clone);
            if (checkWin(clone)) {
                setWon(true);
            }
        }
    }

    return (
        <div className={`container ${won ? 'win' : ''}`}>
            <h1>Guinea Pig Puzzle</h1>
            <div className="picture-container">
                {p.map((el, index) => (
                    <div key={index} onClick={() => changeHandler(index)}>
                        <PuzzleImage imag={el.img} num={el.num} />
                    </div>
                ))}
            </div>
            <button onClick={shufflePuzzle}>Shuffle</button>
        </div>
    );
}

export default Puzzle;
