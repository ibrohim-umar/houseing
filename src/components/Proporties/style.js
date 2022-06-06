import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 20px;
width: 100%;
max-width: var(--width);
padding: 70px;
align-items: center;
@media screen and (max-width: 500px) {
    padding-left: 50px;
    display: grid;
    grid-template-columns: repeat(1, 380px);
    align-items: center;
    min-width: 380px;
}
`
export const Total = styled.div`
padding: 16px 0px 0px 110px;
display: flex;
justify-content: flex-start;
`