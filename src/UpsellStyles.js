function UpsellStyles() {
  return (
    <style>
      {
        `
        .promo-bottom-sheet__card {
          display: flex; 
          z-index: 10; 
          padding: 16px; 
          text-align: left; 
          flex-direction: column; 
          width: -webkit-fill-available;; 
          background-color: #ffffff;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
  
        .promo-bottom-sheet__card-headline {
          margin-bottom: 16px;
          font-family: sans-serif;
          font-weight: 600; 
          text-align: center; 
          font-size: 16px;
          color: #000000e6;
        }
  
        .promo-bottom-sheet__card-action {
          display: flex; 
          align-items: center; 
          margin-bottom: 20px;
        }
  
        .promo-bottom-sheet__card-icon {
          display: inline-block; 
          margin-right: 16px; 
          flex-shrink: 0; 
          height: 20px;
          width: 20px;
          color: #0a66c2;
        }
  
        .promo-bottom-sheet__card-icon-svg {
          height: 20px;
          width: 20px;
        }
  
        .promo-bottom-sheet__card-text {
          font-family: sans-serif;
          color: #000000e6;
          flex-grow: 1;
        }
  
        .promo-bottom-sheet__action {
          box-shadow: 0 0 0 1px #00000000;
          background-color: #0a66c2;
          color: #ffffff;
          cursor: pointer;
          text-decoration: none;
          height: min-content;
          min-height: 32px;
          border-radius: 24px;
          padding-top: 7px;
          padding-bottom: 7px;
          padding-left: 16px;
          padding-right: 16px;
          text-align: center;
          font-family: sans-serif;
          font-size: 14px;
          font-weight: 600;
          min-width: 110px;
          border: 0;
          vertical-align: baseline;
          box-sizing: border-box;
        }
  
        .promo-bottom-sheet__card-action {
          display: flex; 
          align-items: center; 
          margin-bottom: 20px;
        }
  
        .promo-bottom-sheet__dismiss {
          box-shadow: 0 0 0 1px #000000bf;
          background-color: #00000000;
          color: #000000bf;
          cursor: pointer;
          text-decoration: none;
          height: min-content;
          min-height: 32px;
          border-radius: 24px;
          padding-top: 7px;
          padding-bottom: 7px;
          padding-left: 16px;
          padding-right: 16px;
          text-align: center;
          font-family: sans-serif;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid transparent;
          min-width: 110px;
        }`
      }
    </style>
  );
}

export default UpsellStyles;
