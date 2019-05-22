import { Subject, Observer ,fromEvent, Observable  } from 'rxjs';

export default function () {
    let numberOb: Observer<number>;
    const Reporter = new Subject();
    const Main = document.getElementById('square');
    const Status = document.getElementById('status');
    const ColorInput = document.getElementById('color');
    const moves$ = Observable.create((obs: Observer<number>) => {
        numberOb = obs;
    });
    if(Main) {
        Main.addEventListener('mousemove', (e) => {
            // console.log(e);
            // Reporter.next(e.pageX);
            numberOb.next(e.pageX);
        })
    }
    moves$.subscribe({
        next: (v: number) => console.log('from listener', v)
    })
    ColorInput!.addEventListener('change', (e) => {
        console.log(e);
    })
};