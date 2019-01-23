import React from 'react';

const CardContent = (item) => {
  let hacker = item.hacker;
  return (
    <div>
      Name: {hacker.firstName} {hacker.lastName} <br/>
      Age: {hacker.age} <br/>
      Description: {hacker.description} <br/>
      
    </div>
  );
};

export default CardContent;