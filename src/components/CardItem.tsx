
import React from 'react';


type CardProps={
  
  label?:string;
  src?:string;
  text?:string;
  link?:string;
  value?:Number | string;
}

const CardItem = ({link,label,src,text,value}:CardProps) => {
  return (
    <div  >
      <li className='cards__item'>
      
        <a className='cards__item__link' href={link}  >
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={src}
            />
            
           
          </figure>
          <div className='cards__item__info'>
           
            <h5 className='cards__item__text'>{text}</h5>

            <span>{`${value}`} </span>
                 
          </div>
        </a>
     
      </li>

    
    </div>
      
  );
}

export default CardItem;
