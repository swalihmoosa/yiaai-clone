import React from 'react'
import styled from 'styled-components'

import silubusImage from '../../assets/images/landing/ai.jpg'
import topicImage from '../../assets/images/landing/card.svg'


export default function Tech() {
    return (
        <TechSection>
            <Wrapper>
                <H3>
                    <B>ഞങ്ങളുടെ</B> പാഠ്യപദ്ധതികൾ
                </H3>
                <P>
                ടെക് പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ ടാൽറോപ് മുന്നോട്ട് വയ്ക്കുന്ന <br />സിലബസുകൾ പരിചയപ്പെടാം 
                </P>
                <Ul>
                    <Li>
                        <Silubus>
                            <img src={silubusImage} alt='Silubus' />
                        </Silubus>
                        <Name>
                            Artifical Intelligence
                        </Name>
                    </Li>
                </Ul>
                <Topic>
                    <img src={topicImage} alt='Topics' />
                </Topic>
            </Wrapper>
        </TechSection>
    )
}
const TechSection =  styled.section`
    padding: 5% 0;
`
const Wrapper =  styled.section``
const H3 =  styled.h3`
    font-size: 45px;
    font-weight: 700;
    margin-bottom: 1%;
    text-align: center;
`
const B =  styled.b`
    font-size: 45px;
    color: #59a670;
    font-weight: 700;
`
const P =  styled.p`
    font-size: 22px;
    text-align: center;
    margin-bottom: 3%;
    color: #6e718c;
`
const Ul =  styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 4%;
`
const Li =  styled.li``
const Silubus =  styled.div``
const Name =  styled.h4``
const Topic =  styled.div``