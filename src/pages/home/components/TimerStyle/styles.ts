import styled from 'styled-components'

export const TimerComponentStyle = styled.div`
    font-size: 10rem;
    line-height: 8rem;
    font-family: 'JetBrains Mono', monospace;
    color: ${props => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background: ${props => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`

export const SeparatorStyle = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme['purple-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
