import { useState } from 'react';

export default function UniqueArrayComponent() {

    const [resutls, setResults] = useState <number[]> (new Array());

    const testCase1:Array<number> = [1, 1, 2];
    const testCase2:Array<number> = [100, 200, 300, 300, 300, 300, 300, 300];
    const testCase3:Array<number> = [8, 8, 7, 7, 2, 3, 0, 1, 7, 8, 9, 0, 1, 2];
    
    const removeWithSet = (array: Array<number>): Array<number> => {
        return Array.from(new Set(array));
    }

    const handleClick = (testCase: Array<number>): void => {
        setResults(removeWithSet(testCase))
    }
    
    return (
        <section className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <div className="p-2 ">
                    <h5>Select array to probe</h5>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="p-2">
                    <button className="btn btn-primary" onClick={e => handleClick(testCase1)}>[1, 1, 2]</button>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="p-2">
                    <button className="btn btn-primary" onClick={e => handleClick(testCase2)}>[100, 200, 300, 300, 300, 300, 300, 300]</button>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <div className="p-2">
                    <button className="btn btn-primary" onClick={e => handleClick(testCase3)}>[8, 8, 7, 7, 2, 3, 0, 1, 7, 8, 9, 0, 1, 2]</button>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                {JSON.stringify(resutls.sort())}
            </div>


        </section>
    )
}