import React from 'react'
import { getZeckendorfTheoremResult } from '../../helpers/task1';
import { useForm } from '../../hooks/useForm';

export const Task1Screen = () => {
    const [formValues, handleInputChange] = useForm({n:0});
    const {n}=formValues;


    return (
        <>
            <div className="container mt-3">
                <h1 className="text-center">Zechendorf’s Theorem </h1>
                <p className="text-left mt-5">Returns the Zeckendorf representation of a given integer n as a list
                    of Fibonacci numbers in decreasing order. Return an empty list for n = 0 and None/nil for
                    negative n.</p>
                <div className="mt-4">
                    <form className="row g-3">
                        <div className="mb-2">
                            <label htmlFor="nValue" className="form-label">n Value</label>
                            <input
                                type="number"
                                name="n"
                                className="form-control"
                                id="nValue"
                                required={true}
                                onChange={handleInputChange}
                                value={n}
                            />
                        </div>
                        <div className="task1_cuota">
                            <div>
                                <small>Zeckendorf Theorem Result</small>
                                <div>
                                    <span style={{ fontWeight: 'bold', fontSize: 1.2 + "rem" }}>
                                        <pre>{JSON.stringify(getZeckendorfTheoremResult(n), null, 3)}</pre>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
