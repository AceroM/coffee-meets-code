import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

const CardComponent = styled.div`
  background: #383838;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  pointer-events: none;
  box-shadow: 0 0 100px  rgba(0,0,0,0.25);
  height: 560px;
  margin: 2em auto 0;
  width: 320px;
  overflow: hidden;
  position: relative;
`;

const CardContent = (item) => {
  let hacker = item.hacker;
  return (
    <CardComponent>
      <Overlay></Overlay>
      <Header>
        <img src={hacker.imageUrl} alt={hacker.username}/>
        <h2> {hacker.firstName} {hacker.lastName} </h2>
        <h4> {hacker.description} </h4>
      </Header>
      <Footer>
        <ul>
          { hacker.hackathons ? (
            hacker.hackathons.map(hack => (
              <li><a><span>{hack}</span></a></li>
            ))
          ) : (
            <li><a><span>None :( </span></a></li>
          )}
        </ul>
      </Footer>
      <Btn>Super Like</Btn>
    </CardComponent>
  );
};

const Header = styled.div`
  & {
    background: rgba(0, 97, 145, 0.45);
    color: #FFF;
    height: 380px;
    left: 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: inherit;
  }
  &:before {
    border-right: solid 20px transparent;
    border-left: solid 20px transparent;
    border-top: solid 20px #f8d05d;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 50%;
    height: 0;
    width: 0;
  }
  & img {
    border: 5px solid #A1DCFF;
    border-radius: 100%;
    height: 140px;
    margin: 4em auto 2.5em;
    object-fit: cover;
    width: 140px;
  }
  & h2 {
    color: white;
    display: inline-block;
    font-family: 'Quicksand', sans-serif;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -2px;
    margin: 0 auto;
    padding: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  & h4 {
    color: rgba(255, 255, 255, 0.75);
    display: block;
    font-size: 15px;
    margin: 0 auto;
    padding: 5px 0 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    text-transform: uppercase;
  }
`;

const Footer = styled.div`
  & {
    background: rgba(0, 97, 145, 0.75);
    bottom: 0;
    color: #FFF;
    left: 0;
    position: absolute;
    text-align: center;
    top: 380px;
    width: inherit;
  }
  & ul {
    display: flex;
    font-size: 9px;
    font-weight: 400;
    height: 40px;
    line-height: 40px;
    padding: 20px 20px;
  }
  & li:first-child {
    border: 0;
  }
  & li {
    border-left: 2px solid rgba(255, 255, 255, .15);
    font-family: 'Quicksand', sans-serif;
    padding: 0 4px 0 6px;
    width: 100%;
  }
  & a span {
    color: #9CDFF5;
    display: inline-block;
    font-size: 14px;
    padding: 0 4px 0 0;
    vertical-align: middle;
  }
`;

let Btn = styled.a`
  & {
    background: rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 40px;
  color: rgba(0,0,0,0.75);
  display: block;
  font-size: 1em;
  font-weight: 400;
  height: 44px;
  letter-spacing: 5px;
  line-height: 42px;
  margin: 10px auto;
  padding: 0;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: all .5s ease;
  transition: all .5s ease;
  vertical-align: middle;
  width: 60%;
  }
  &:hover {
    background: rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.15);
  }
`;

const Overlay = styled.div`
  background: #158 url(https://images.unsplash.com/photo-1451191703739-5c2ad91bf6af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80) center no-repeat;
  background-size: cover;
  height: calc(100% + 40px);
  margin: -20px;
  position: relative;
  width: calc(100% + 40px);
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  filter: blur(10px);
`;

export default CardContent;