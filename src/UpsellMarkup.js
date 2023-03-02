function UpsellMarkup() {
  return (
    <div class="upsell-markup-container">
      <div class="promo-bottom-sheet">
        <div class="container">
          <h3 class="title">LinkedIn is better on the app</h3>
          <h4 class="subtitle">Access your professional network anytime, anywhere</h4>
          <div class="button-container open-app-button-container">
            <icon class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox="0 0 27 27" focusable="false" class="svg">
                <g fill="currentColor">
                  <path d="M1.91 0h22.363a1.91 1.91 0 011.909 1.91v22.363a1.91 1.91 0 01-1.91 1.909H1.91A1.91 1.91 0 010 24.272V1.91A1.91 1.91 0 011.91 0zm1.908 22.364h3.818V9.818H3.818zM8.182 5.727a2.455 2.455 0 10-4.91 0 2.455 2.455 0 004.91 0zm2.182 4.091v12.546h3.818v-6.077c0-2.037.75-3.332 2.553-3.332 1.3 0 1.81 1.201 1.81 3.332v6.077h3.819v-6.93c0-3.74-.895-5.78-4.667-5.78-1.967 0-3.277.921-3.788 1.946V9.818z" fill="currentColor" fill-rule="evenodd"></path>
                </g>
              </svg>
            </icon>
            <p class="text">LinkedIn App</p>
            <button class="button open-app-button">
              Open App
            </button>
          </div>
          <div class="button-container continue-app-button-container">
            <icon class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" focusable="false" class="svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM16.9 6H13.6C13.3 4.5 12.7 3.2 12.1 2.3C14.1 2.8 15.9 4.2 16.9 6ZM18 10C18 11.1 17.8 12.1 17.4 13H13.8C13.9 12.1 14 11.1 14 10C14 8.9 13.9 7.9 13.8 7H17.4C17.8 7.9 18 8.9 18 10ZM10 18C9.2 18 8.1 16.5 7.4 14H12.5C11.9 16.5 10.8 18 10 18ZM7.2 13C7.1 12.1 7 11.1 7 10C7 8.9 7.1 7.9 7.2 7H12.7C12.9 7.9 12.9 8.9 12.9 10C12.9 11.1 12.8 12.1 12.7 13H7.2ZM2 10C2 8.9 2.2 7.9 2.6 7H6.2C6.1 7.9 6 8.9 6 10C6 11.1 6.1 12.1 6.2 13H2.6C2.2 12.1 2 11.1 2 10ZM10 2C10.8 2 11.9 3.5 12.6 6H7.4C8.1 3.5 9.2 2 10 2ZM8 2.3C7.3 3.2 6.8 4.5 6.4 6H3.1C4.1 4.2 5.9 2.8 8 2.3ZM3.1 14H6.4C6.7 15.5 7.3 16.8 7.9 17.7C5.9 17.2 4.1 15.8 3.1 14ZM12 17.7C12.7 16.8 13.2 15.5 13.5 14H16.8C15.9 15.8 14.1 17.2 12 17.7Z" fill="black" fill-opacity="0.6"></path>
              </svg>
            </icon>
            <p class="text">Browser</p>
            <button class="button continue-button">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpsellMarkup;
