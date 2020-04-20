import React from 'react';
import styled from 'styled-components';
import GradationText from '../ui/text/GradationText.js';
import NormalText from '../ui/text/NormalText';
import FilledGradationButton from '../ui/button/FilledGradationButton';
import Spinner from '../ui/Spinner'

const Wrapper = styled.div`
`;

const Background = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 1000px) {
        height: 100vh;
        width: 100vh;
        background: url(${require('../../static/img/intro/background-desktop.jpg')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    @media (max-width: 1000px) {
        height: 100vh;
        width: 48vh;
        background: url(${require('../../static/img/intro/background.png')}) no-repeat center center; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;     
    }

`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        };
    }

    onClick = () => {
        this.setState({
            clicked:true
        })

        setTimeout(() => {
            window.location.href = '/quiz'
        }, 750)
    }

    render() {
        return (
            <Background>
                <Wrapper>
                    <GradationText style= {{marginTop:"56px"}} fontSize={2.6} fontWeight={'bold'}>
                        PythonQuizFlex
                    </GradationText>

                    <NormalText style= {{marginTop:"24px", fontSize:"16px"}}>
                        Challenge and brag your python language level
                    </NormalText>
                </Wrapper>

                <FilledGradationButton onClick={()=>window.location.href = '/quiz'}>
                    Start a Quiz
                </FilledGradationButton>
            </Background>
        );
    }
}

export default AppPage;
