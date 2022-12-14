import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4,100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: #ff5470;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const PreviousNumber = styled.div`
    color: rgba(255, 255, 254, 0.75);
    font-size: 1.5rem;

`

export const CurrentNumber = styled.div`
    color: #fffffe;
    font-size: 2.5rem;
    
`

export const Button = styled.button`
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset white;
    outline: none;
    background-color: rgba(0, 235, 199, 0.75);
    &:hover {
        background-color: rgba(0, 235, 199, 0.9);
    };

    ${ ({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}`}

    ${ ({ operation }) => operation && `background-color: #00214d; color: white`}

    // ${ ({ control }) => control && `background-color: #fde24f;`}

    // ${ ({ equals }) => equals && `border-bottom-right-radius: 10px; background-color: #fde24f`}

`