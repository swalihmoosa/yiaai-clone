import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import bg from '../../assets/images/details/top.svg'
import WelcomeModal from '../modals/WelcomeModal'


export default function FillDetails() {
    const[isSubmitted,setIsSubmitted] = useState(false)

    const[predictions,setPredictions] = useState([])
    const[selectedSchool,setSelectedSchool] = useState('')

    const[schools] = useState([
        'JNE002 :- Jamia Nadviyya',
        'JNE003 :- Jamath College edakkara',
        'JNE004 :- Mila Manjeri',
        'DNBSC :- Donbosco Mannuthy',
    ])

    const getPredictions = ()=>(
        setPredictions(schools.filter(school => school.toLowerCase().indexOf(selectedSchool.toLowerCase()) !== -1))
    )

    const notAssociated = () =>{
        if(selectedSchool !== ""){
            if(schools.includes(selectedSchool) === true ){
                return ""
            }else{
                return <Not>Your Campus is not Associated with Tefun programme</Not>
            }
        }
    }


    return (
        <FillDetailsSection>
            <Wrapper>
                <WelcomeModal isSubmitted={isSubmitted} />

                <Details>
                    <H3>
                        Fill Your Details
                    </H3>
                    <Hr />
                    <Form onSubmit={ (e)=> {
                        e.preventDefault();
                    } } >
                        <Label>
                            Campus Name / Code *
                        </Label>
                        <Campus type="text" placeholder="JNE002" 
                        onChange={e => {
                            setSelectedSchool(e.target.value)
                            getPredictions()
                        }
                        }
                        value = {selectedSchool}
                        />
                        {
                            notAssociated()
                        }
                        <PredictionContainer>
                            {
                                predictions.map(prediction=>(
                                        <Predictions onClick={()=> {
                                            setSelectedSchool(prediction)
                                            setPredictions([])
                                        }
                                    } key={prediction} >{prediction}</Predictions>
                                ))
                            }
                        </PredictionContainer>
                         
                        <Label>
                            Select Class *
                        </Label>
                        <Classes>
                            <Class>
                                10
                            </Class>
                            <Class>
                                9
                            </Class>
                            <Class>
                                8
                            </Class>
                        </Classes>
                        <Label>
                            Select Division *
                        </Label>
                        <Divisions>
                            <Div>
                                A
                            </Div>
                            <Div>
                                B
                            </Div>
                            <Div>
                                C
                            </Div>
                        </Divisions>
                        <Buttons>
                            <Back to="/" >Back</Back>
                            <Submit onClick={()=> setIsSubmitted(true) }>Submit</Submit>
                        </Buttons>
                    </Form>
                </Details>                
            </Wrapper>
        </FillDetailsSection>
    )
}
const FillDetailsSection = styled.section`
    padding: 10% 0 0;
`
const Wrapper = styled.section`
    margin: 0 auto;
    width: 90%;
    background-color: #e4fdf7;
    padding: 4%;
    border-radius: 50px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: left top;
    position: relative;
`
const Details = styled.div`
    width: 50%;
    margin: 0 auto;
    border: 1px dotted #bfbfbf;
    border-radius: 25px;
`
const H3 = styled.h3`
    padding: 5%;
    font-size: 20px;
    font-weight: 700;
`
const Hr = styled.hr`
    border-top: 1px dotted #bfbfbf;
    margin-bottom: 30px;
    width: 100%;
`
const Form = styled.form`
    position: relative;
    padding: 5% 5% 12%;
`
const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
    color: #bfbfbf;
`
const Campus = styled.input`
    width: 100%;
    border: 2px solid #e3e3e3;
    padding: 4%;
    margin: 3% 0;
    border-radius: 15px;
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Classes = styled.select`
    width: 100%;
    border: 2px solid #e3e3e3;
    padding: 4%;
    margin: 3% 0;
    border-radius: 15px;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right transparent;
    -webkit-appearance: none;
    background-position-x: 95%;
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Class = styled.option`
    font-size: 15px;
    font-weight: 700;
`
const Divisions = styled.select`
    width: 100%;
    border: 2px solid #e3e3e3;
    padding: 4%;
    margin: 3% 0;
    border-radius: 15px;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right transparent;
    -webkit-appearance: none;
    background-position-x: 95%;
    &:focus{
        border: 2px solid #22c1c3;
    }
`
const Div = styled.option`
    font-size: 15px;
    font-weight: 700;
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7%;
    position: relative;
    &::after{
        content: "";
        position: absolute;
        width: 111%;
        height: 50%;
        border-left: 2px dotted #5aa870;
        bottom: -94px;
        left: -39px;
        background-image: linear-gradient(to right,#68ba50,#469aad);
        border-radius: 0 0 25px 25px;
    }
`
const Back = styled(Link)`
    width: 25%;
    text-align: center;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #4f585e;
    border: 2px solid #dfdfdf;
    padding: 20px 30px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: 4%;
    &:hover{
        border: 2px solid #22c1c3;
        cursor: pointer;
    }
`
const Submit = styled.button`
    width: 25%;
    font-size: 18px;
    font-weight: 900;
    display: block;
    color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#68ba50,#469aad);
    &:hover{
        background-image: linear-gradient(to right,#469aad,#68ba50);
        cursor: pointer;
    }
`
const Predictions = styled.p`
    border-bottom: 2px solid #e6e6e6;
    padding: 3%;
    margin-bottom: 15px;
    color: #68ba50;
    font-size: 15px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
    }
    &:last-child{
        margin-bottom: 0;
        border: 0;
    }
`
const PredictionContainer = styled.div`
    background: #fff;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 3%) 0px 16px 24px;
    position: absolute;
    width: 90%;
    top: 20%;
`
const Not =  styled.p`
    color: #ff0000;
    text-align: left;
    width: 95%;
    margin: 0 auto 2%;
    font-size: 14px;
    font-weight: 700;
`