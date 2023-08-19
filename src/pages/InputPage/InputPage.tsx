import React, { useState } from "react";

import Container from "../../shared/Container";
import Input from "../../shared/Input";

import { InputPageProps } from "./InputPageProps";
import './InputPage.scss'
import Button from "../../shared/Button/Button";

const InputPage:React.FC<InputPageProps> = (props) => {
{ /*    const [valor, setValor] = useState(100.00);
    const [dataInicial, setDataInicial] = useState(Date.now().toString);
*/}
    return (
        <Container>
            <Input label="Valor a se atualizar" type="number" />
{/*                   value={valor} onChange={(e) => setValor(Number(e.target.value))} /> */}
            <Input label="Data Inicial" type="date" />
{/*                   value={dataInicial} onChange={(e) => setDataInicial(e.target.value)} /> */}
            <Button classIcon="fa-solid fa-calculator" label="Calcular" />
        </Container>
    );
}

export default InputPage