import React from 'react'
import { getPalin } from '../../helpers/task2';
import { useForm } from '../../hooks/useForm';

export const Task2Screen = () => {
    const [formValues, handleInputChange] = useForm({ s: "" });
    const { s } = formValues;

    /**Un palíndromo, también llamado palíndromo, palíndroma o palindroma,
     *  es una palabra o frase que se lee igual en un sentido que en otro. */


    return (
        <>
            <div className="container mt-3">
                <h1 className="text-center">Shortest Palindrome</h1>
                <p className="text-left mt-5">You are given a string s. You can convert it to a palindrome by adding characters in front of it.
                    Return the shortest palindrome you can find by performing this transformation.</p>
                <div className="mt-4">
                    <form className="row g-3">
                        <div className="mb-2">
                            <label htmlFor="sValue" className="form-label">s Value (string)</label>
                            <input
                                type="text"
                                name="s"
                                className="form-control"
                                id="sValue"
                                required={true}
                                onChange={handleInputChange}
                                value={s}
                            />
                        </div>
                        <div className="task2_cuota">
                            <div>
                                <small>Shortest Palindrome</small>
                                <div>
                                    <span style={{ fontWeight: 'bold', fontSize: 1.2 + "rem" }}>
                                        {
                                            getPalin(s)
                                        }
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
