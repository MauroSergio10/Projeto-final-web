import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BRASIL from '../Assets/Brasil.png'

function ConsultarPlaca() {
    const [valorPlaca, setValorPlaca] = useState('');
    const navigate = useNavigate();


    const handleChange = (event) => {
        setValorPlaca(event.target.value);
    };

    const handleNavigate = () => {
        navigate('/Pagamento', { state: { placa: valorPlaca } });
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center px-4">
            <div className="flex flex-col justify-center items-center bg-gray-800 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 py-12 rounded-xl space-y-8 shadow-br shadow-2xl shadow-indigo-900 px-4">
                <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4 font-bold">DIGITE SUA PLACA</p>
                <div className="w-full px-10">
                    <div className="w-full bg-white relative space-y-3 rounded-lg">
                        <div className="bg-blue-800 w-full flex justify-between items-center p-2 rounded-t-lg px-4">
                            <div></div>
                            <h1 className="font-bold text-white text-xl ml-6">BRASIL</h1>
                            <img src={BRASIL} className="w-7 h-5" alt="Bandeira do Brasil"></img>
                        </div>
                        <div className="flex justify-center items-center pb-8 pt-4">
                            <input
                                type="text"
                                placeholder='ABCD0E00'
                                className="text-center uppercase text-4xl focus:outline-none w-full focus:border-transparent font-bold"
                                minLength='6'
                                maxLength='7'
                                value={valorPlaca}
                                onChange={handleChange}
                            ></input>                        </div>
                        <h1 className="font-bold absolute text-xl left-2 bottom-2">BR</h1>
                    </div>
                </div>
                {/* botao que passa o valor de placa para /pagamentos */}
                <button
                    className="font-bold text-lg border-2 border-indigo-700 bg-indigo-700 text-white h-12 md:h-16 w-full md:w-64 lg:w-72 rounded-full hover:text-indigo-700 hover:bg-transparent transition-all duration-300 ease-in-out"
                    onClick={handleNavigate}
                >
                    CONSULTAR
                </button>
            </div>
        </div>
    );
}

export default ConsultarPlaca;
