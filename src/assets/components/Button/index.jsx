import styled from "styled-components";

export const Button = styled.button`
    align-items: flex-start;
    width: 36%;
    height: 50px;
    margin-top: 1rem;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: var(--main);
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #000;
    transition: all 0.3s ease;
    margin-left: 16rem;
    

&:hover {
    background-color: #fff;
    color: var(--main);
    border: 2px solid var(--main);
    box-shadow: 5px 5px 0px var(--main);
}

&:active {
    background-color: #adc0d1;
    color: var(--main);
    transform: translateY(4px);
    border: 2px solid var(--main);
    box-shadow: 5px 5px 0px var(--main);
}

`

export const Button2 = styled.button`
    align-items: flex-start;
    width: 26%;
    height: 38px;
    margin-top: 1rem;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: var(--secondary);
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 2px 2px 0px #000;
    transition: all 0.3s ease;
    margin-left: 10px;
    

&:hover {
    background-color: #fff;
    color: var(--secondary);
    border: 2px solid var(--secondary);
    box-shadow: 5px 5px 0px var(--secondary);
}

&:active {
    background-color: #e2e2e2;
    color: var(--secondary);
    transform: translateY(4px);
    border: 2px solid var(--secondary);
    box-shadow: 5px 5px 0px var(--secondary);
}



`